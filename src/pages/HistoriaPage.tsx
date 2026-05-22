import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { ChevronRight, ChevronLeft, BookOpenText } from 'lucide-react'
import { Link } from 'react-router-dom'
export function HistoriaPage() {
  return (
    <div className="max-w-screen-2xl py-8 px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="mb-6 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
  <BookOpenText className="w-5 h-5 text-gray-600" />
</div>

              <h1 className="text-3xl font-bold text-gray-900">
                História
              </h1>
            </div>
          </div>
        </header>
        <div className="space-y-6">
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
Em processo de edição.
            </p>
            <Card className="p-4 bg-amber-50 border-amber-200 mb-6">
              <p className="text-sm text-amber-800">
                <strong>Nota:</strong> A lore é bem maior do que isso, porém, para maior imersão, damos apenas esses detalhes para que você compreenda a base da lore, a maioria dos outros detalhes você irá descobrir jogando.
              </p>
            </Card>
          </div>
          <div className="flex justify-between gap-4">
            <Link to="/" className="flex-1">
              <Card className="p-4 border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <ChevronLeft className="w-5 h-5 text-gray-400" />
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">Anterior</p>
                    <h3 className="font-semibold text-gray-900">Bem-vindo</h3>
                  </div>
                </div>
              </Card>
            </Link>
            <Link to="/principal/diretrizes" className="flex-1">
              <Card className="p-4 border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Próximo</p>
                    <h3 className="font-semibold text-gray-900">Diretrizes</h3>
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