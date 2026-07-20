import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Plus, Trash2, LogOut, Ban, ListCheck, NotebookPen, RotateCcw } from 'lucide-react'
import {
  isAuthenticated, logout, loadData, saveData, resetData,
  type SiteData, type Rule, type FormEntry,
} from '../lib/store'

type Tab = 'itens' | 'regras' | 'formularios'

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

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/dashboard')
      return
    }
    setAuthed(true)
  }, [navigate])

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
        <div className="flex gap-2 border-b border-border">
          {[
            { id: 'itens' as Tab, label: 'Itens/Atitudes Banidos', icon: Ban },
            { id: 'regras' as Tab, label: 'Regras', icon: ListCheck },
            { id: 'formularios' as Tab, label: 'Formulários', icon: NotebookPen },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
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
      </div>
    </div>
  )
}
