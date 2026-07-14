import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { ChevronLeft, FileText, ExternalLink, NotebookPen } from 'lucide-react'
import { Link } from 'react-router-dom'

export function FormulariosPage() {
  const forms = [
    {
      title: "Formulário de Inscrição de Jogador",
      description: "Formulário para tornar-se um jogador (andarilho) no servidor",
      status: "Disponível",
      link: "https://forms.gle/tKXWh3gYeN7XQfB36",
      statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      requirements: [
        "Formulário aprovado pelos administradores;",
        "14 anos ou mais."
      ]
    },
    {
      title: "Formulário de Inscrição de Staff",
      description: "Formulário para tornar-se um staff no servidor",
      status: "Disponível",
      link: "https://forms.gle/1CghL7KTVyPJMTZ69",
      statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      requirements: [
        "Formulário aprovado pelos administradores;",
        "15 anos ou mais."
      ]
    },
    {
      title: "Formulário de Inscrição de Filhote",
      description: "Formulário para tornar-se um filhote (ovo) no servidor",
      status: "Disponível",
      link: "https://forms.gle/B73qY4GDzAP9Kqxr6",
      statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      requirements: [
        "Formulário aprovado pelos administradores;",
        "15 anos ou mais."
      ]
    }    
  ]

  return (
    <div className="max-w-screen-2xl py-8 px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="mb-6 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                <NotebookPen className="w-5 h-5 text-muted-foreground" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">
                Formulários
              </h1>
            </div>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-muted-foreground">
            Aqui você encontra os formulários de inscrição do Lumen.
          </p>

          {/* Banner Informativo Azul */}
          <Card className="p-4 bg-blue-500/10 border border-blue-500/20">
            <p className="text-sm text-blue-400">
              <strong>Importante:</strong> Todos os formulários são processados pela equipe de administração. 
              O tempo de aprovação costuma ser menor, mas não passa de 15 dias.
            </p>
          </Card>

          {/* Lista de Formulários */}
          <div className="space-y-4">
            {forms.map((form, index) => (
              <Card key={index} className="p-6 border border-border bg-card">
                <div className="flex items-start justify-between mb-4 gap-4">
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{form.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{form.description}</p>
                    </div>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${form.statusColor} flex-shrink-0`}>
                    {form.status}
                  </span>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-2">Requisitos:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {form.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  asChild
                  className="w-full gap-2"
                >
                  <a href={form.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Acessar Formulário
                  </a>
                </Button>
              </Card>
            ))}
          </div>

          {/* Navegação Inferior */}
          <div className="flex justify-between gap-4 pt-2">
            <Link to="/principal/redes-sociais" className="flex-1">
              <Card className="p-4 border border-border bg-card hover:bg-accent/40 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <ChevronLeft className="w-5 h-5 text-muted-foreground" />
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground mb-1">Anterior</p>
                    <h3 className="font-semibold text-foreground">Redes Sociais</h3>
                  </div>
                </div>
              </Card>
            </Link>

            <div className="flex-1">
              <Card className="p-4 border border-border bg-card opacity-40 flex items-center justify-center h-full">
                <p className="text-sm text-muted-foreground font-medium">Última página</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}