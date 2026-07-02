import { Card } from '../components/ui/card'
import { ChevronRight, ChevronLeft, X, AlertTriangle, Ban } from 'lucide-react'
import { Link } from 'react-router-dom'

export function ItensBanidosPage() {
  const bannedItems = [
    {
      category: "Itens Banidos",
      items: [
        "Magia - Abyssal Blast",
        "Aegis Wine",
        "Black Sun Sword",
        "Coin Minting Machine",
        "Cross Necklace",
        "Crystal Heart",
        "Dimensional Carver",
        "Draconic Twinsword",
        "Eiswein",
        "Encantamento - Disarming",
        "Enderic Railgun",
        "Ferricore Ingot",
        "Ignitium Boots",
        "Ignitium Chestplate",
        "Ignitium Elytra Chestplate",
        "Ignitium Helmet",
        "Ignitium Leggings",
        "Magia - Invisibility",
        "Longsword of the Plague",
        "Magenta",
        "Meat Shredder",
        "Mellohi Wine",
        "Apple Wine",
        "Mortuth",
        "Netherfused Gem - Radiance",
        "Runefused Gem - Immolation",
        "Shattered Dimensional Carver",
        "Transmutation Table",
        "Erdrick's Sword",
        "Transmuting Elixir",
      ]
    }
  ]

  const bannedAttitudes = [
    "Invisiblidade em eventos",
    "Charm of Shrinking em eventos",
  ]

  const bannedEnchantments = [
    "Encantamento - Disarming",
  ]

  const bannedSpells = [
    "Magia - Abyssal Blast",
    "Magia - Invisibility",
  ]

  const bannedMods = [
    "Just Dire Things",
    "Simply Swords (ferramentas únicas)",
    "Chunk Loader",
  ]

  return (
    <div className="max-w-screen-2xl py-8 px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="mb-6 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                <Ban className="w-5 h-5 text-muted-foreground" />
              </div>

              <h1 className="text-3xl font-bold text-foreground">
                Itens Banidos
              </h1>
            </div>
          </div>
        </header>

        <div className="space-y-6">
          {/* Banner de Atenção Vermelho */}
          <Card className="p-4 bg-destructive/10 border border-destructive/20">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
              <div className="text-sm text-destructive-foreground">
                <p className="font-semibold mb-1 text-destructive">Atenção!</p>
                <p className="opacity-90">O uso, posse ou distribuição dos itens listados abaixo pode resultar em punições. 
                Esta lista é atualizada regularmente conforme necessário.</p>
              </div>
            </div>
          </Card>

          <p className="text-muted-foreground">
            Os itens banidos foram selecionados para manter o equilíbrio do servidor e preservar 
            a experiência de roleplay. Alguns itens podem ser permitidos em situações específicas 
            com autorização da administração.
          </p>

          {/* Listagem por Categoria */}
          <div className="space-y-6">
            {bannedItems.map((category, index) => (
              <Card key={index} className="p-6 border border-border bg-card">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-destructive" />
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2 p-2 bg-destructive/10 rounded-md border border-destructive/10">
                      <X className="w-4 h-4 text-destructive flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Tabela Atitudes Banidas */}
          <Card className="p-6 border border-border bg-card">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <X className="w-5 h-5 text-destructive" />
              Atitudes Banidas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {bannedAttitudes.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center gap-2 p-2 bg-destructive/10 rounded-md border border-destructive/10">
                  <X className="w-4 h-4 text-destructive flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Tabela Encantamentos Banidos */}
          <Card className="p-6 border border-border bg-card">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <X className="w-5 h-5 text-destructive" />
              Encantamentos Banidos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {bannedEnchantments.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center gap-2 p-2 bg-destructive/10 rounded-md border border-destructive/10">
                  <X className="w-4 h-4 text-destructive flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Tabela Magias Banidas */}
          <Card className="p-6 border border-border bg-card">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <X className="w-5 h-5 text-destructive" />
              Magias Banidas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {bannedSpells.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center gap-2 p-2 bg-destructive/10 rounded-md border border-destructive/10">
                  <X className="w-4 h-4 text-destructive flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Tabela Mods Banidos */}
          <Card className="p-6 border border-border bg-card">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <X className="w-5 h-5 text-destructive" />
              Mods Banidos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {bannedMods.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center gap-2 p-2 bg-destructive/10 rounded-md border border-destructive/10">
                  <X className="w-4 h-4 text-destructive flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Exceções Amarelo */}
          <Card className="p-4 bg-amber-500/10 border border-amber-500/20">
            <h4 className="font-semibold text-amber-400 mb-2">Exceções e Casos Especiais</h4>
            <ul className="text-sm text-amber-500/90 space-y-1">
              <li>• Alguns itens podem ser permitidos para eventos especiais</li>
              <li>• Administradores e pessoas permitidas podem usar itens restritos</li>
              <li>• Sempre consulte a administração em caso de dúvida</li>
              <li>• A lista pode ser atualizada sem aviso prévio</li>
            </ul>
          </Card>

          {/* Reportar Azul */}
          <Card className="p-4 bg-blue-500/10 border border-blue-500/20">
            <p className="text-sm text-blue-400">
              <strong>Encontrou um item banido?</strong> Reporte imediatamente à administração. 
              Não tente usar ou esconder o item, pois isso pode resultar em punições adicionais.
            </p>
          </Card>

          {/* Navegação Inferior */}
          <div className="flex justify-between gap-4 pt-2">
            <Link to="/principal/criacao-de-personagem" className="flex-1">
              <Card className="p-4 border border-border bg-card hover:bg-accent/40 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <ChevronLeft className="w-5 h-5 text-muted-foreground" />
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground mb-1">Anterior</p>
                    <h3 className="font-semibold text-foreground">Criação de Personagem</h3>
                  </div>
                </div>
              </Card>
            </Link>

            <Link to="/principal/redes-sociais" className="flex-1">
              <Card className="p-4 border border-border bg-card hover:bg-accent/40 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Próximo</p>
                    <h3 className="font-semibold text-foreground">Redes Sociais</h3>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}