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
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <BookMarked className="w-5 h-5 text-gray-600" />
              </div>

              <h1 className="text-3xl font-bold text-gray-900">
                Definições
              </h1>
            </div>
          </div>
        </header>

        <div className="space-y-6">
          <div className="prose max-w-none">
            <div className="space-y-6">
              <p className="text-gray-600">
                Aqui você encontrará algumas dicas de vocabulário para utilizar
                dentro de roleplay, como por exemplo, dor de cabeça = lag.
              </p>

              <div className="space-y-6">

                  <div className="bg-gray-50 p-3 rounded-lg">

                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="text-gray-400 mt-1">•</span>

                        <span>
                          Lag (por fps): "dor de cabeça".
                        </span>
                      </li>

                      <li className="flex items-start gap-2">
                        <span className="text-gray-400 mt-1">•</span>

                        <span>
                          Servidor lagando: "tempestade mágica".
                        </span>
                      </li>

                      <li className="flex items-start gap-2">
                        <span className="text-gray-400 mt-1">•</span>

                        <span>
                          Chat do jogo: os balões de fala, considere como se a pessoa estivesse falando.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-400 mt-1">•</span>

                        <span>
                          Discord: evite falar sobre no roleplay, mas se for muito necessário, fale no chat: "// (sinal que indica off-rp) discord"
                        </span>
                      </li>

                    </ul>
                  </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-4">
            <Link to="/principal/faq" className="flex-1">
              <Card className="p-4 border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <ChevronLeft className="w-5 h-5 text-gray-400" />

                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">
                      Anterior
                    </p>

                    <h3 className="font-semibold text-gray-900">
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
              <Card className="p-4 border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      Próximo
                    </p>

                    <h3 className="font-semibold text-gray-900">
                      Criação de Personagem
                    </h3>
                  </div>

                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}