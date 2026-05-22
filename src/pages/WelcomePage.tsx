import { Button } from '../components/ui/button'
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
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
  <Heart className="w-5 h-5 text-gray-500" />
</div>

              <h1 className="text-3xl font-bold text-gray-900">
                Bem-vindo(a) ao LumenSMP!
              </h1>
            </div>
          </div>
        </header>
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            Seja bem-vindo(a) ao site oficial do LumenSMP!
          </p>
          <p className="text-gray-600">
            Esta documentação/site foi criada para a melhor visualização de informações, como 
            lore, regras, etc.
          </p>
          <Card className="p-4 bg-blue-50 border-blue-200">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-blue-800">
                Informações podem ser adicionadas ou alteradas a qualquer momento.
              </p>
            </div>
          </Card>
          <div className="space-y-4">
            <p className="text-sm text-blue-600">
              LumenSMP é desenvolvido e administrado por Digo e David. 
            </p>
            <Link to="/principal/lore">
              <Card className="p-4 border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Próximo</p>
                    <h3 className="font-semibold text-gray-900">História</h3>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </Card>
            </Link>
          </div>
          <div className="pt-8 border-t border-gray-200">
          </div>
        </div>
      </div>
    </div>
  )
}