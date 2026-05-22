import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { ChevronRight, ChevronLeft, User, Lightbulb, NotebookPen, UserRoundSearch, TriangleAlert, Check, UserPen } from 'lucide-react'
import { Link } from 'react-router-dom'
export function CriacaoPersonagemPage() {
  const characterSteps = [
    {
      title: "Como seu personagem age?",
      description: "Como ele interage? O que ele faria em determinados momentos",
      tips: [
        "Ele age com controle ou por impulso?",
        "Ele prefere analisar antes de agir?",
        "Ele tenta resolver tudo sozinho?",
        "Ele evita conflitos ou enfrenta?",
        "Ele mantém calma quando algo sai do esperado?",
        "Como ele interage com as pessoas?"
      ]
    },
    {
      title: "Como seu personagem vê o mundo?",
      description: "Ele vê como um desafio, ou como uma brincadeira",
      tips: [
        "Ele confia mais na lógica, na ciência, ou na magia?",
        "Ele acredita que o mundo é justo?",
        "Ele confia nos superiores a ele?"
      ]
    },
    {
      title: "Quais são as qualidades e defeitos do seu personagem?",
      description: "Qualidades e defeitos do seu personagem",
      icon: <UserRoundSearch className="w-5 h-5 text-blue-600" />,
      tips: [
        "Ele é bom no que? E ruim em que?",
        "O que nele pode ser visto como algo ruim?"
      ]
    },
        {
      title: "Como é a personalidade do seu personagem?",
      description: "Descreva a personalidade de seu personagem",
      icon: <UserRoundSearch className="w-5 h-5 text-blue-600" />,
      tips: [
        "Introvertido ou extrovertido?",
        "Metódico ou espontâneo?",
        "Pragmático ou idealista?",
        "Calmo ou ansioso?",
        "Tem fé, esperança?"
      ]
    },
            {
      title: "Quais são os gostos e desgostos do seu personagem?",
      description: "O que ele gosta, ou desgosta",
      icon: <UserRoundSearch className="w-5 h-5 text-blue-600" />,
      tips: [
        "Perfeição ou imperfeição?",
        "Caos ou tranquilidade?",
        "Silêncio ou barulho?",
        "Gosta do que?",
        "Quais são seus interesses ou hobbies?"
      ]
    },
                {
      title: "Quais são os medos/fobias do seu personagem?",
      description: "Do que ele tem medo, ou fobia",
      icon: <UserRoundSearch className="w-5 h-5 text-blue-600" />,
      tips: [
        "Medo de algo maior?",
        "Medo de ser esquecido?",
        "Fobias do que? De insetos? Alturas?"
      ]
    },
                    {
      title: "Qual é a história de seu personagem?",
      description: "Como era o mundo de onde veio",
      icon: <UserRoundSearch className="w-5 h-5 text-blue-600" />,
      tips: [
        "Como era seu mundo original? Medieval? Fantasioso?",
        "Ele sente que veio de outro mundo? (lembrando que nenhum personagem tem memórias exatas de seu mundo, talvez habilidades)",
        "Pelo o que ele passou durante sua vida?",
        "Quais desafios ele já enfrentou?",
        "Quais habilidades ele desenvolveu? Como?"
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
  <UserPen className="w-5 h-5 text-gray-600" />
</div>
              <h1 className="text-3xl font-bold text-gray-900">
                Dicas de Criação de Personagem
              </h1>
            </div>
          </div>
        </header>
        <div className="space-y-6">
          <p className="text-gray-600">
            Criar um personagem envolvente é essencial para uma boa experiência de roleplay. 
            Siga este guia para desenvolver um personagem memorável e coerente com o universo de Lumen.
          </p>
          <div className="space-y-6">
            {characterSteps.map((step, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Perguntas para refletir:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {step.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="flex justify-between gap-4">
            <Link to="/principal/definicoes" className="flex-1">
              <Card className="p-4 border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <ChevronLeft className="w-5 h-5 text-gray-400" />
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">Anterior</p>
                    <h3 className="font-semibold text-gray-900">Definições</h3>
                  </div>
                </div>
              </Card>
            </Link>
            <Link to="/principal/itens-banidos" className="flex-1">
              <Card className="p-4 border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Próximo</p>
                    <h3 className="font-semibold text-gray-900">Itens Banidos</h3>
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