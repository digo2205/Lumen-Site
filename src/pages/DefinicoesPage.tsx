import { Card } from '../components/ui/card'
import {
  ChevronRight,
  ChevronLeft,
  BookMarked
} from 'lucide-react'
import { Link } from 'react-router-dom'

export function DefinicoesPage() {
  return (
    <div className="max-w-screen-2xl py-8 px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="mb-6 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                <BookMarked className="w-5 h-5 text-muted-foreground" />
              </div>

              <h1 className="text-3xl font-bold text-foreground">
                Definições
              </h1>
            </div>
          </div>
        </header>

        <div className="space-y-6">
          <div className="prose max-w-none">
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Aqui você encontrará algumas dicas de vocabulário para utilizar
                dentro de roleplay, como por exemplo, dor de cabeça = lag.
              </p>

              <div className="space-y-6">
                <div className="bg-muted p-4 rounded-lg">
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground/60 mt-1">•</span>
                      <span>
                        <strong className="text-foreground font-medium">Lag (por fps):</strong> "dor de cabeça".
                      </span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground/60 mt-1">•</span>
                      <span>
                        <strong className="text-foreground font-medium">Servidor lagando:</strong> "tempestade".
                      </span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground/60 mt-1">•</span>
                      <span>
                        <strong className="text-foreground font-medium">Chat do jogo:</strong> considere como se a pessoa estivesse falando.
                      </span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground/60 mt-1">•</span>
                      <span>
                        <strong className="text-foreground font-medium">JEI/Missões:</strong> trate como o item Manual.
                      </span>
                    </li>
                    
                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground/60 mt-1">•</span>
                      <span>
                        <strong className="text-foreground font-medium">Discord:</strong> evite falar sobre no roleplay, mas se for muito necessário, fale no chat: "// (sinal que indica off-rp) discord"
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Navegação Inferior */}
          <div className="flex justify-between gap-4">
            <Link to="/principal/faq" className="flex-1">
              <Card className="p-4 border border-border bg-card hover:bg-accent/40 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <ChevronLeft className="w-5 h-5 text-muted-foreground" />

                  <div className="text-right">
                    <p className="text-sm text-muted-foreground mb-1">
                      Anterior
                    </p>
                    <h3 className="font-semibold text-foreground">
                      FAQ
                    </h3>
                  </div>
                </div>
              </Card>
            </Link>

            <Link
              to="/principal/criacao-de-personagem"
              className="flex-1"
            >
              <Card className="p-4 border border-border bg-card hover:bg-accent/40 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Próximo
                    </p>
                    <h3 className="font-semibold text-foreground">
                      Criação de Personagem
                    </h3>
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