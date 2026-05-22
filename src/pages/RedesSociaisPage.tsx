import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { ChevronRight, ChevronLeft, ExternalLink, Hash } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FaDiscord } from "react-icons/fa"
import { FaTiktok } from "react-icons/fa";
export function RedesSociaisPage() {
  const socialNetworks = [
    {
      name: "Discord",
      description: "Nossa comunidade, suporte, anúncios, em geral tudo que acontece no servidor é discutido e notificado lá.",
      link: "https://discord.gg/SNjDTsVApZ",
      icon: <FaDiscord className="text-indigo-600 w-7 h-7" />,
      color: "bg-indigo-50 border-indigo-200 text-indigo-800"
    },
    {
      name: "TikTok",
      description: "Nosso TikTok oficial, onde postamos vídeos curtos sobre o servidor, desde eventos, até momentos engraçados e interessantes.",
      link: "https://www.tiktok.com/",
      icon: <FaTiktok className="text-black w-7 h-7" />,
      color: "bg-indigo-50 border-indigo-200 text-indigo-800"
    },    
  ]
  return (
    <div className="max-w-screen-2xl py-8 px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="mb-6 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
  <Hash className="w-5 h-5 text-gray-600" />
</div>

              <h1 className="text-3xl font-bold text-gray-900">
                Redes Sociais
              </h1>
            </div>
          </div>
        </header>
        <div className="space-y-6">
          <div className="grid gap-4">
            {socialNetworks.map((network, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center">
                     {network.icon}
                       </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{network.name}</h3>
                      <p className="text-sm text-gray-600">{network.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button asChild variant="outline" size="sm" className="gap-2">
                    <a href={network.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Visitar
                    </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="flex justify-between gap-4">
            <Link to="/principal/itens-banidos" className="flex-1">
              <Card className="p-4 border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <ChevronLeft className="w-5 h-5 text-gray-400" />
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">Anterior</p>
                    <h3 className="font-semibold text-gray-900">Itens Banidos</h3>
                  </div>
                </div>
              </Card>
            </Link>
            <Link to="/inscricao/formularios" className="flex-1">
              <Card className="p-4 border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Próximo</p>
                    <h3 className="font-semibold text-gray-900">Formulários</h3>
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