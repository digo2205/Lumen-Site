import { link } from 'fs'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { ChevronRight, ChevronLeft, FileText, ExternalLink, Clock, NotebookPen } from 'lucide-react'
import { Link } from 'react-router-dom'
export function FormulariosPage() {
  const forms = [
    {
      title: "Formulário de Inscrição de Jogador",
      description: "Formulário para tornar-se um jogador (habitante) no servidor",
      status: "Disponível",
      link: "https://forms.gle/tKXWh3gYeN7XQfB36",
      statusColor: "bg-green-100 text-green-800",
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
      statusColor: "bg-green-100 text-green-800",
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
      statusColor: "bg-green-100 text-green-800",
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
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <NotebookPen className="w-5 h-5 text-gray-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">
                Formulários
              </h1>
            </div>
          </div>
        </header>
        <div className="space-y-6">
          <p className="text-gray-600">
            Aqui você encontra os formulários de inscrição do Lumen.
          </p>
          <Card className="p-4 bg-blue-50 border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>Importante:</strong> Todos os formulários são processados pela equipe de administração. 
              O tempo de aprovação costuma ser menos, mas não passa de 15 dias.
            </p>
          </Card>
          <div className="space-y-4">
            {forms.map((form, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{form.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{form.description}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${form.statusColor}`}>
                    {form.status}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Requisitos:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {form.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
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
          <Card className="p-4 bg-yellow-50 border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-2">📝 Dicas para Preenchimento</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Seja honesto e detalhado em suas respostas</li>
              <li>• Revise antes de enviar para evitar erros</li>
              <li>• Leia as dicas de criação de personagem</li>
            </ul>
          </Card>
          <div className="flex justify-between gap-4">
            <Link to="/principal/redes-sociais" className="flex-1">
              <Card className="p-4 border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <ChevronLeft className="w-5 h-5 text-gray-400" />
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">Anterior</p>
                    <h3 className="font-semibold text-gray-900">Redes Sociais</h3>
                  </div>
                </div>
              </Card>
            </Link>
            <div className="flex-1">
              <Card className="p-4 border border-gray-200 opacity-50">
                <div className="flex items-center justify-center">
                  <p className="text-sm text-gray-500">Última página</p>
                </div>
              </Card>
          </div>
          </div>
          <div className="pt-8 border-t border-gray-200">
          </div>
        </div>
      </div>
    </div>
  )
}
