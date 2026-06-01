import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { ChevronRight, ChevronLeft, ExternalLink, Hash } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FaDiscord } from "react-icons/fa"
import { FaTiktok } from "react-icons/fa"

export function RedesSociaisPage() {
  const socialNetworks = [
    {
      name: "Discord",
      description: "Nossa comunidade, suporte, anúncios, em geral tudo que acontece no servidor é discutido e notificado lá.",
      link: "https://discord.gg/SNjDTsVApZ",
      icon: <FaDiscord className="text-indigo-400 w-7 h-7" />
    },
    {
      name: "TikTok",
      description: "Nosso TikTok oficial, onde postamos vídeos curtos sobre o servidor, desde eventos, até momentos engraçados e interessantes.",
      link: "https://www.tiktok.com/",
      icon: <FaTiktok className="text-foreground w-7 h-7" />
    },    
  ]

  return (
    <div className="max-w-screen-2xl py-8 px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="mb-6 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                <Hash className="w-5 h-5 text-muted-foreground" />
              </div>

              <h1 className="text-3xl font-bold text-foreground">
                Redes Sociais
              </h1>
            </div>
          </div>
        </header>

        <div className="space-y-6">
          {/* Grid de Redes Sociais */}
          <div className="grid gap-4">
            {socialNetworks.map((network, index) => (
              <Card key={index} className="p-6 border border-border bg-card hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="flex items-center justify-center p-2 bg-muted rounded-md min-w-[44px]">
                      {network.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{network.name}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{network.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 self-end sm:self-auto">
                    <Button asChild variant="outline" size="sm" className="gap-2 border-border hover:bg-muted">
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

          {/* Navegação Inferior */}
          <div className="flex justify-between gap-4 pt-2">
            <Link to="/principal/itens-banidos" className="flex-1">
              <Card className="p-4 border border-border bg-card hover:bg-accent/40 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <ChevronLeft className="w-5 h-5 text-muted-foreground" />
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground mb-1">Anterior</p>
                    <h3 className="font-semibold text-foreground">Itens Banidos</h3>
                  </div>
                </div>
              </Card>
            </Link>

            <Link to="/inscricao/formularios" className="flex-1">
              <Card className="p-4 border border-border bg-card hover:bg-accent/40 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Próximo</p>
                    <h3 className="font-semibold text-foreground">Formulários</h3>
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