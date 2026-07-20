import { Card } from '../components/ui/card'
import { ChevronRight, ChevronLeft, AlertTriangle, ListCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSiteData, type Rule } from '../lib/store'

function RuleBlock({ rule }: { rule: Rule }) {
  return (
    <div className="border-l-4 border-primary bg-muted/30 p-4 rounded-r-lg">
      <h3 className="text-lg font-semibold text-foreground mb-1">{rule.title}</h3>
      <p className="text-muted-foreground">{rule.text}</p>
    </div>
  )
}

export function DiretrizesPage() {
  const data = useSiteData()

  return (
    <div className="max-w-screen-2xl py-8 px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="mb-6 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                <ListCheck className="w-5 h-5 text-muted-foreground" />
              </div>

              <h1 className="text-3xl font-bold text-foreground">
                Diretrizes
              </h1>
            </div>
          </div>
        </header>

        <div className="space-y-6">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-6">Diretrizes do Servidor</h2>
            <div className="space-y-4">
              {data.serverRules.map((rule) => (
                <RuleBlock key={rule.id} rule={rule} />
              ))}
            </div>

            <Card className="p-4 bg-destructive/10 border-destructive/30 my-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground mb-1">Importante</p>
                  <p className="leading-relaxed">As diretrizes do servidor valem para o servidor do Discord e para o servidor do Minecraft.</p>
                </div>
              </div>
            </Card>

            <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">Diretrizes do Roleplay</h2>
            <div className="space-y-4">
              {data.roleplayRules.map((rule) => (
                <RuleBlock key={rule.id} rule={rule} />
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">Diretrizes do Minecraft</h2>
            <div className="space-y-4">
              {data.minecraftRules.map((rule) => (
                <RuleBlock key={rule.id} rule={rule} />
              ))}
            </div>
          </div>

          {/* Navegação Inferior */}
          <div className="flex justify-between gap-4 pt-4">
            <Link to="/principal/lore" className="flex-1">
              <Card className="p-4 border border-border bg-card hover:bg-accent/40 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <ChevronLeft className="w-5 h-5 text-muted-foreground" />
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground mb-1">Anterior</p>
                    <h3 className="font-semibold text-foreground">História</h3>
                  </div>
                </div>
              </Card>
            </Link>

            <Link to="/principal/faq" className="flex-1">
              <Card className="p-4 border border-border bg-card hover:bg-accent/40 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Próximo</p>
                    <h3 className="font-semibold text-foreground">FAQ</h3>
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
