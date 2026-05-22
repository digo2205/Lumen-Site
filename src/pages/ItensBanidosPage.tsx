import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { ChevronRight, ChevronLeft, X, AlertTriangle, Ban } from 'lucide-react'
import { Link } from 'react-router-dom'
export function ItensBanidosPage() {
  const bannedItems = [
    {
      category: "Itens Banidos",
      items: [
        "indefinido",
      ]
    }
  ]
  return (
    <div className="max-w-screen-2xl py-8 px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="mb-6 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
  <Ban className="w-5 h-5 text-gray-600" />
</div>

              <h1 className="text-3xl font-bold text-gray-900">
                Itens Banidos
              </h1>
            </div>
          </div>
        </header>
        <div className="space-y-6">
          <Card className="p-4 bg-red-50 border-red-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-red-800">
                <p className="font-semibold mb-1">Atenção!</p>
                <p>O uso, posse ou distribuição dos itens listados abaixo pode resultar em punições. 
                Esta lista é atualizada regularmente conforme necessário.</p>
              </div>
            </div>
          </Card>
          <p className="text-gray-600">
            Os itens banidos foram selecionados para manter o equilíbrio do servidor e preservar 
            a experiência de roleplay. Alguns itens podem ser permitidos em situações específicas 
            com autorização da administração.
          </p>
          <div className="space-y-6">
            {bannedItems.map((category, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-red-500" />
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2 p-2 bg-red-50 rounded-md">
                      <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          <Card className="p-4 bg-yellow-50 border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-2">Exceções e Casos Especiais</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Alguns itens podem ser permitidos para eventos especiais</li>
              <li>• Administradores e pessoas permitidas podem usar itens restritos</li>
              <li>• Sempre consulte a administração em caso de dúvida</li>
              <li>• A lista pode ser atualizada sem aviso prévio</li>
            </ul>
          </Card>
          <Card className="p-4 bg-blue-50 border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>Encontrou um item banido?</strong> Reporte imediatamente à administração. 
              Não tente usar ou esconder o item, pois isso pode resultar em punições adicionais.
            </p>
          </Card>
          <div className="flex justify-between gap-4">
            <Link to="/principal/criacao-de-personagem" className="flex-1">
              <Card className="p-4 border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <ChevronLeft className="w-5 h-5 text-gray-400" />
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">Anterior</p>
                    <h3 className="font-semibold text-gray-900">Criação de Personagem</h3>
                  </div>
                </div>
              </Card>
            </Link>
            <Link to="/principal/redes-sociais" className="flex-1">
              <Card className="p-4 border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Próximo</p>
                    <h3 className="font-semibold text-gray-900">Redes Sociais</h3>
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