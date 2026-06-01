import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { ChevronRight, ChevronLeft, HelpCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
export function FAQPage() {
  const faqs = [
    {
      question: "Dá para jogar no Minecraft Pirata?",
      answer: "Sim, é possível jogar utilizando o SKLauncher. Devido a um dos mods em nossa modpack, é impossível jogar utilizando o TLauncher."
    },
    {
      question: "Onde eu instalo a modpack, qual é a versão, qual o endereço do servidor?",
      answer: "Todas essas informações estão disponíveis num canal em nosso servidor do Discord disponível apenas para os aprovados."
    },
    {
      question: "Quantas vidas um jogador e/ou uma criança tem?",
      answer: "Os jogadores e as crianças tem três vidas. Porém, as crianças perdem uma vida em qualquer morte, os jogadores só perdem vida em mortes durante eventos."
    },    
    {
      question: "O SMP já começou?",
      answer: "Não, começará entre junho e julho de 2026."
    },
  ]
  return (
    <div className="max-w-screen-2xl py-8 px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="mb-6 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
  <HelpCircle className="w-5 h-5 text-gray-600" />
</div>

              <h1 className="text-3xl font-bold text-gray-900">
                FAQ - Perguntas Frequentes
              </h1>
            </div>
          </div>
        </header>
        <div className="space-y-6">
          <p className="text-gray-600">
            Nesta página, você encontra respostas para algumas dúvidas simples ou frequentes; considere verificá-la antes de abrir um ticket de atendimento ou perguntar para alguém.
            Esse página é atualizada periodicamente.
          </p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <Card className="p-4 bg-blue-50 border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>Não encontrou sua resposta?</strong> Abra um ticket de atendimento no nosso servidor do Discord!
            </p>
          </Card>
          <div className="flex justify-between gap-4">
            <Link to="/principal/diretrizes" className="flex-1">
              <Card className="p-4 border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <ChevronLeft className="w-5 h-5 text-gray-400" />
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">Anterior</p>
                    <h3 className="font-semibold text-gray-900">Diretrizes</h3>
                  </div>
                </div>
              </Card>
            </Link>
            <Link to="/principal/definicoes" className="flex-1">
              <Card className="p-4 border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Próximo</p>
                    <h3 className="font-semibold text-gray-900">Definições</h3>
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