import { Card } from '../components/ui/card'
import { Info, ChevronRight, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

export function WelcomePage() {
  return (
    <div className="max-w-screen-2xl py-8 px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="mb-6 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                {/* Coração monocromático adaptado ao tema escuro */}
                <Heart className="w-5 h-5 text-muted-foreground fill-muted-foreground/10" />
              </div>

              <h1 className="text-3xl font-bold text-foreground">
                Bem-vindo(a) ao LumenSMP!
              </h1>
            </div>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-lg text-foreground font-medium">
            Seja bem-vindo(a) ao site oficial do LumenSMP!
          </p>
          
          <p className="text-muted-foreground leading-relaxed">
            Esta documentação/site foi criada para a melhor visualização de informações, como 
            lore, regras, etc.
          </p>

          {/* Banner Informativo Azul */}
          <Card className="p-4 bg-blue-500/10 border border-blue-500/20">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-blue-400">
                Informações podem ser adicionadas ou alteradas a qualquer momento.
              </p>
            </div>
          </Card>

          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              LumenSMP é desenvolvido e administrado por <span className="text-foreground font-medium">Digo</span> e <span className="text-foreground font-medium">David</span>. 
            </p>
            
            {/* Link para a História */}
            <Link to="/principal/lore" className="block">
              <Card className="p-4 border border-border bg-card hover:bg-accent/40 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Próximo</p>
                    <h3 className="font-semibold text-foreground">História</h3>
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