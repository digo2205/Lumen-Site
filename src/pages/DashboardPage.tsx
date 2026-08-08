import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import {
  Plus, Trash2, LogOut, Ban, ListCheck, NotebookPen, RotateCcw,
  BookOpenText, Lightbulb, ChevronLeft, ChevronRight, Pencil, X, Check,
} from 'lucide-react'
import {
  isAuthenticated, logout, loadData, saveData, resetData,
  type SiteData, type Rule, type FormEntry, type Idea, type LoreCategory,
} from '../lib/store'

type Tab = 'itens' | 'regras' | 'formularios' | 'lore' | 'ideias'

const LIST_FIELDS = [
  { key: 'bannedItems', label: 'Itens Banidos' },
  { key: 'bannedAttitudes', label: 'Atitudes Banidas' },
  { key: 'bannedEnchantments', label: 'Encantamentos Banidos' },
  { key: 'bannedSpells', label: 'Magias Banidas' },
  { key: 'bannedMods', label: 'Mods Banidos' },
] as const

export function DashboardPage() {
  const navigate = useNavigate()
  const [authed, setAuthed] = useState(false)
  const [tab, setTab] = useState<Tab>('itens')
  const [data, setData] = useState<SiteData>(loadData)
  const [newValues, setNewValues] = useState<Record<string, string>>({})
  const [newIdea, setNewIdea] = useState({ title: '', text: '' })

  // estado da aba Lore
  const [loreCategoryId, setLoreCategoryId] = useState<string | null>(null)
  const [lorePageIndex, setLorePageIndex] = useState(0)
  const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null)
  const [categoryLabelDraft, setCategoryLabelDraft] = useState('')
  const [newCategoryLabel, setNewCategoryLabel] = useState('')

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/dashboard')
      return
    }
    setAuthed(true)
  }, [navigate])

  useEffect(() => {
    if (!loreCategoryId && data.lore.length > 0) {
      setLoreCategoryId(data.lore[0].id)
    }
  }, [data.lore, loreCategoryId])

  function persist(next: SiteData) {
    setData(next)
    saveData(next)
  }

  function addListItem(field: keyof SiteData) {
    const value = (newValues[field] || '').trim()
    if (!value) return
    const next = { ...data, [field]: [...(data[field] as string[]), value] }
    persist(next)
    setNewValues((prev) => ({ ...prev, [field]: '' }))
  }

  function removeListItem(field: keyof SiteData, index: number) {
    const list = [...(data[field] as string[])]
    list.splice(index, 1)
    persist({ ...data, [field]: list })
  }

  type RuleField = 'serverRules' | 'roleplayRules' | 'minecraftRules'

  function addRule(field: RuleField) {
    const rule: Rule = { id: crypto.randomUUID(), title: 'Nova regra', text: '' }
    persist({ ...data, [field]: [...data[field], rule] })
  }

  function updateRule(field: RuleField, id: string, patch: Partial<Rule>) {
    const list = data[field].map((r) => (r.id === id ? { ...r, ...patch } : r))
    persist({ ...data, [field]: list })
  }

  function removeRule(field: RuleField, id: string) {
    persist({ ...data, [field]: data[field].filter((r) => r.id !== id) })
  }

  function toggleFormStatus(id: string) {
    const list = data.forms.map((f) =>
      f.id === id ? { ...f, status: f.status === 'Disponível' ? 'Indisponível' : 'Disponível' } as FormEntry : f
    )
    persist({ ...data, forms: list })
  }

  function handleLogout() {
    logout()
    navigate('/dashboard')
  }

  function addIdea() {
    const title = newIdea.title.trim()
    const text = newIdea.text.trim()
    if (!title && !text) return
    const idea: Idea = {
      id: crypto.randomUUID(),
      title: title || 'Sem título',
      text,
      createdAt: Date.now(),
    }
    persist({ ...data, ideas: [idea, ...data.ideas] })
    setNewIdea({ title: '', text: '' })
  }

  function updateIdea(id: string, patch: Partial<Idea>) {
    const list = data.ideas.map((i) => (i.id === id ? { ...i, ...patch } : i))
    persist({ ...data, ideas: list })
  }

  function removeIdea(id: string) {
    persist({ ...data, ideas: data.ideas.filter((i) => i.id !== id) })
  }

  // --- Lore: categorias ---
  function addCategory() {
    const label = newCategoryLabel.trim()
    if (!label) return
    const category: LoreCategory = {
      id: crypto.randomUUID(),
      label,
      pages: [],
    }
    persist({ ...data, lore: [...data.lore, category] })
    setNewCategoryLabel('')
    setLoreCategoryId(category.id)
    setLorePageIndex(0)
  }

  function startRenameCategory(id: string, currentLabel: string) {
    setEditingCategoryId(id)
    setCategoryLabelDraft(currentLabel)
  }

  function confirmRenameCategory() {
    if (!editingCategoryId) return
    const label = categoryLabelDraft.trim()
    if (!label) {
      setEditingCategoryId(null)
      return
    }
    const list = data.lore.map((c) => (c.id === editingCategoryId ? { ...c, label } : c))
    persist({ ...data, lore: list })
    setEditingCategoryId(null)
  }

  function removeCategory(id: string) {
    const list = data.lore.filter((c) => c.id !== id)
    persist({ ...data, lore: list })
    if (loreCategoryId === id) {
      setLoreCategoryId(list[0]?.id ?? null)
      setLorePageIndex(0)
    }
  }

  function selectLoreCategory(id: string) {
    setLoreCategoryId(id)
    setLorePageIndex(0)
  }

  // --- Lore: páginas ---
  function addPage() {
    if (!loreCategoryId) return
    const list = data.lore.map((c) => {
      if (c.id !== loreCategoryId) return c
      const page = { id: crypto.randomUUID(), title: 'Nova página', paragraphs: [''] }
      return { ...c, pages: [...c.pages, page] }
    })
    persist({ ...data, lore: list })
    const cat = list.find((c) => c.id === loreCategoryId)
    if (cat) setLorePageIndex(cat.pages.length - 1)
  }

  function updatePageTitle(pageId: string, title: string) {
    if (!loreCategoryId) return
    const list = data.lore.map((c) => {
      if (c.id !== loreCategoryId) return c
      return { ...c, pages: c.pages.map((p) => (p.id === pageId ? { ...p, title } : p)) }
    })
    persist({ ...data, lore: list })
  }

  function removePage(pageId: string) {
    if (!loreCategoryId) return
    const list = data.lore.map((c) => {
      if (c.id !== loreCategoryId) return c
      return { ...c, pages: c.pages.filter((p) => p.id !== pageId) }
    })
    persist({ ...data, lore: list })
    setLorePageIndex((i) => Math.max(0, i - 1))
  }

  // --- Lore: parágrafos ---
  function updateParagraph(pageId: string, index: number, text: string) {
    if (!loreCategoryId) return
    const list = data.lore.map((c) => {
      if (c.id !== loreCategoryId) return c
      return {
        ...c,
        pages: c.pages.map((p) => {
          if (p.id !== pageId) return p
          const paragraphs = [...p.paragraphs]
          paragraphs[index] = text
          return { ...p, paragraphs }
        }),
      }
    })
    persist({ ...data, lore: list })
  }

  function addParagraph(pageId: string) {
    if (!loreCategoryId) return
    const list = data.lore.map((c) => {
      if (c.id !== loreCategoryId) return c
      return {
        ...c,
        pages: c.pages.map((p) => (p.id === pageId ? { ...p, paragraphs: [...p.paragraphs, ''] } : p)),
      }
    })
    persist({ ...data, lore: list })
  }

  function removeParagraph(pageId: string, index: number) {
    if (!loreCategoryId) return
    const list = data.lore.map((c) => {
      if (c.id !== loreCategoryId) return c
      return {
        ...c,
        pages: c.pages.map((p) => {
          if (p.id !== pageId) return p
          const paragraphs = [...p.paragraphs]
          paragraphs.splice(index, 1)
          return { ...p, paragraphs }
        }),
      }
    })
    persist({ ...data, lore: list })
  }

  const currentLoreCategory = data.lore.find((c) => c.id === loreCategoryId) ?? null
  const currentLorePage = currentLoreCategory?.pages[lorePageIndex] ?? null

  if (!authed) return null

  return (
    <div className="max-w-screen-2xl py-8 px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => { resetData(); setData(loadData()) }} className="gap-2">
              <RotateCcw className="w-4 h-4" /> Restaurar padrão
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout} className="gap-2">
              <LogOut className="w-4 h-4" /> Sair
            </Button>
          </div>
        </header>

        {/* Abas */}
        <div className="flex gap-2 border-b border-border overflow-x-auto">
          {[
            { id: 'itens' as Tab, label: 'Itens/Atitudes Banidos', icon: Ban },
            { id: 'regras' as Tab, label: 'Regras', icon: ListCheck },
            { id: 'formularios' as Tab, label: 'Formulários', icon: NotebookPen },
            { id: 'lore' as Tab, label: 'Lore', icon: BookOpenText },
            { id: 'ideias' as Tab, label: 'Ideias', icon: Lightbulb },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                tab === id
                  ? 'border-primary text-foreground'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Aba: Itens/Atitudes Banidos */}
        {tab === 'itens' && (
          <div className="space-y-6">
            {LIST_FIELDS.map(({ key, label }) => (
              <Card key={key} className="p-6 border border-border bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-4">{label}</h3>
                <div className="flex gap-2 mb-4">
                  <Input
                    placeholder={`Adicionar em "${label}"`}
                    value={newValues[key] || ''}
                    onChange={(e) => setNewValues((prev) => ({ ...prev, [key]: e.target.value }))}
                    onKeyDown={(e) => e.key === 'Enter' && addListItem(key)}
                  />
                  <Button size="icon" onClick={() => addListItem(key)}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {(data[key] as string[]).map((item, i) => (
                    <div key={i} className="flex items-center justify-between gap-2 p-2 bg-muted/30 rounded-md border border-border">
                      <span className="text-sm text-foreground">{item}</span>
                      <button onClick={() => removeListItem(key, i)} className="text-muted-foreground hover:text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  {(data[key] as string[]).length === 0 && (
                    <p className="text-sm text-muted-foreground">Nenhum item.</p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Aba: Regras */}
        {tab === 'regras' && (
          <div className="space-y-6">
            {([
              ['serverRules', 'Diretrizes do Servidor'],
              ['roleplayRules', 'Diretrizes do Roleplay'],
              ['minecraftRules', 'Diretrizes do Minecraft'],
            ] as const).map(
              ([field, label]) => (
                <Card key={field} className="p-6 border border-border bg-card">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground">{label}</h3>
                    <Button size="sm" variant="outline" onClick={() => addRule(field)} className="gap-2">
                      <Plus className="w-4 h-4" /> Nova regra
                    </Button>
                  </div>
                  <div className="space-y-3">
                    {data[field].map((rule) => (
                      <div key={rule.id} className="p-3 border border-border rounded-md space-y-2">
                        <div className="flex items-center gap-2">
                          <Input
                            value={rule.title}
                            onChange={(e) => updateRule(field, rule.id, { title: e.target.value })}
                            className="font-medium"
                          />
                          <button onClick={() => removeRule(field, rule.id)} className="text-muted-foreground hover:text-destructive flex-shrink-0">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <textarea
                          value={rule.text}
                          onChange={(e) => updateRule(field, rule.id, { text: e.target.value })}
                          rows={2}
                          className="w-full text-sm rounded-md border border-input bg-background px-3 py-2 text-foreground"
                        />
                      </div>
                    ))}
                  </div>
                </Card>
              )
            )}
          </div>
        )}

        {/* Aba: Formulários */}
        {tab === 'formularios' && (
          <div className="space-y-4">
            {data.forms.map((form) => (
              <Card key={form.id} className="p-6 border border-border bg-card">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-foreground">{form.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{form.description}</p>
                    <p className="text-xs text-muted-foreground mt-2 break-all">{form.link}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                        form.status === 'Disponível'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                          : 'bg-destructive/10 text-destructive border-destructive/20'
                      }`}
                    >
                      {form.status}
                    </span>
                    <Button size="sm" variant="outline" onClick={() => toggleFormStatus(form.id)}>
                      Marcar como {form.status === 'Disponível' ? 'Indisponível' : 'Disponível'}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Aba: Lore (totalmente editável) */}
        {tab === 'lore' && (
          <div className="space-y-4">
            {/* Categorias */}
            <div className="flex flex-wrap items-center gap-2">
              {data.lore.map((cat) => (
                <div key={cat.id} className="flex items-center">
                  {editingCategoryId === cat.id ? (
                    <div className="flex items-center gap-1">
                      <Input
                        autoFocus
                        value={categoryLabelDraft}
                        onChange={(e) => setCategoryLabelDraft(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && confirmRenameCategory()}
                        className="h-8 w-40"
                      />
                      <button onClick={confirmRenameCategory} className="text-muted-foreground hover:text-emerald-400">
                        <Check className="w-4 h-4" />
                      </button>
                      <button onClick={() => setEditingCategoryId(null)} className="text-muted-foreground hover:text-destructive">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div
                      className={`group flex items-center gap-1 pl-3 pr-1.5 py-1.5 rounded-md text-sm font-medium border transition-colors ${
                        cat.id === loreCategoryId
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'bg-card text-muted-foreground border-border hover:text-foreground'
                      }`}
                    >
                      <button onClick={() => selectLoreCategory(cat.id)}>{cat.label}</button>
                      <button
                        onClick={() => startRenameCategory(cat.id, cat.label)}
                        className="opacity-60 hover:opacity-100 p-0.5"
                        aria-label="Renomear categoria"
                      >
                        <Pencil className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeCategory(cat.id)}
                        className="opacity-60 hover:opacity-100 hover:text-destructive p-0.5"
                        aria-label="Excluir categoria"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              ))}

              {/* Nova categoria */}
              <div className="flex items-center gap-1">
                <Input
                  placeholder="Nova aba de lore"
                  value={newCategoryLabel}
                  onChange={(e) => setNewCategoryLabel(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addCategory()}
                  className="h-8 w-40"
                />
                <Button size="icon" variant="outline" className="h-8 w-8" onClick={addCategory}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {data.lore.length === 0 && (
              <p className="text-sm text-muted-foreground">Nenhuma aba de lore criada ainda. Crie uma acima.</p>
            )}

            {currentLoreCategory && (
              <Card className="p-6 border border-border bg-card">
                {/* Cabeçalho: título da página + navegação/CRUD de páginas */}
                <div className="flex items-center justify-between mb-4 gap-4">
                  {currentLorePage ? (
                    <Input
                      value={currentLorePage.title}
                      onChange={(e) => updatePageTitle(currentLorePage.id, e.target.value)}
                      className="font-semibold text-lg h-9 max-w-sm"
                    />
                  ) : (
                    <h3 className="text-lg font-semibold text-foreground">Sem páginas</h3>
                  )}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {currentLoreCategory.pages.length > 0 && (
                      <span className="text-xs text-muted-foreground">
                        Página {lorePageIndex + 1} de {currentLoreCategory.pages.length}
                      </span>
                    )}
                    <Button size="sm" variant="outline" onClick={addPage} className="gap-2">
                      <Plus className="w-4 h-4" /> Página
                    </Button>
                    {currentLorePage && (
                      <button
                        onClick={() => removePage(currentLorePage.id)}
                        className="text-muted-foreground hover:text-destructive p-1.5"
                        aria-label="Excluir página"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {currentLorePage && (
                  <>
                    {/* Parágrafos editáveis */}
                    <div className="space-y-3 max-h-[55vh] overflow-y-auto pr-2">
                      {currentLorePage.paragraphs.map((paragraph, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <textarea
                            value={paragraph}
                            onChange={(e) => updateParagraph(currentLorePage.id, i, e.target.value)}
                            rows={3}
                            className="w-full text-sm rounded-md border border-input bg-background px-3 py-2 text-foreground leading-relaxed"
                          />
                          <button
                            onClick={() => removeParagraph(currentLorePage.id, i)}
                            className="text-muted-foreground hover:text-destructive p-1.5 flex-shrink-0"
                            aria-label="Excluir parágrafo"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                      {currentLorePage.paragraphs.length === 0 && (
                        <p className="text-sm text-muted-foreground">Nenhum parágrafo. Adicione abaixo.</p>
                      )}
                    </div>

                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => addParagraph(currentLorePage.id)}
                      className="gap-2 mt-3"
                    >
                      <Plus className="w-4 h-4" /> Parágrafo
                    </Button>

                    {/* Paginação dentro da categoria */}
                    {currentLoreCategory.pages.length > 1 && (
                      <div className="flex items-center justify-between gap-4 pt-4 mt-4 border-t border-border">
                        <Button
                          variant="outline"
                          size="sm"
                          disabled={lorePageIndex === 0}
                          onClick={() => setLorePageIndex((p) => Math.max(0, p - 1))}
                          className="gap-2"
                        >
                          <ChevronLeft className="w-4 h-4" /> Anterior
                        </Button>
                        <div className="flex gap-1">
                          {currentLoreCategory.pages.map((p, i) => (
                            <button
                              key={p.id}
                              onClick={() => setLorePageIndex(i)}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                i === lorePageIndex ? 'bg-primary' : 'bg-muted'
                              }`}
                              aria-label={`Ir para página ${i + 1}`}
                            />
                          ))}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          disabled={lorePageIndex === currentLoreCategory.pages.length - 1}
                          onClick={() =>
                            setLorePageIndex((p) => Math.min(currentLoreCategory.pages.length - 1, p + 1))
                          }
                          className="gap-2"
                        >
                          Próxima <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </Card>
            )}
          </div>
        )}

        {/* Aba: Ideias */}
        {tab === 'ideias' && (
          <div className="space-y-6">
            <Card className="p-6 border border-border bg-card space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Nova ideia</h3>
              <Input
                placeholder="Título"
                value={newIdea.title}
                onChange={(e) => setNewIdea((prev) => ({ ...prev, title: e.target.value }))}
              />
              <textarea
                placeholder="Descreva a ideia..."
                value={newIdea.text}
                onChange={(e) => setNewIdea((prev) => ({ ...prev, text: e.target.value }))}
                rows={3}
                className="w-full text-sm rounded-md border border-input bg-background px-3 py-2 text-foreground"
              />
              <div className="flex justify-end">
                <Button size="sm" onClick={addIdea} className="gap-2">
                  <Plus className="w-4 h-4" /> Adicionar
                </Button>
              </div>
            </Card>

            <div className="space-y-3">
              {data.ideas.map((idea) => (
                <Card key={idea.id} className="p-4 border border-border bg-card space-y-2">
                  <div className="flex items-center gap-2">
                    <Input
                      value={idea.title}
                      onChange={(e) => updateIdea(idea.id, { title: e.target.value })}
                      className="font-medium"
                    />
                    <button onClick={() => removeIdea(idea.id)} className="text-muted-foreground hover:text-destructive flex-shrink-0">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <textarea
                    value={idea.text}
                    onChange={(e) => updateIdea(idea.id, { text: e.target.value })}
                    rows={2}
                    className="w-full text-sm rounded-md border border-input bg-background px-3 py-2 text-foreground"
                  />
                  <p className="text-xs text-muted-foreground">
                    {new Date(idea.createdAt).toLocaleString('pt-BR')}
                  </p>
                </Card>
              ))}
              {data.ideas.length === 0 && (
                <p className="text-sm text-muted-foreground">Nenhuma ideia registrada ainda.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
