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
      question: "Onde eu instalo a modpack, qual o endereço do servidor?",
      answer: "Todas essas informações estão disponíveis num canal em nosso servidor do Discord disponível apenas para os aprovados."
    },
    {
      question: "Quantas vidas um jogador e/ou uma criança tem?",
      answer: "Os jogadores e as crianças tem três vidas. Porém, as crianças perdem uma vida em qualquer morte, os jogadores só perdem vida em mortes durante eventos."
    },    
    {
      question: "O SMP já começou?",
      answer: "Não, começará provavelmente dia 03 de julho de 2026."
    },
    {
      question: "Qual é a versão da modpack? Qual o modloader? Quantos mods tem?",
      answer: "Há uma média de 270 mods na versão NeoForge 1.21.1"
    },    
  ]

  return (
    <div className="max-w-screen-2xl py-8 px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="mb-6 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-muted-foreground" />
              </div>

              <h1 className="text-3xl font-bold text-foreground">
                FAQ - Perguntas Frequentes
              </h1>
            </div>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-muted-foreground">
            Nesta página, você encontra respostas para algumas dúvidas simples ou frequentes; considere verificá-la antes de abrir um ticket de atendimento ou perguntar para alguém.
            Esta página é atualizada periodicamente.
          </p>

          {/* Lista de FAQ */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 border border-border bg-card">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Banner Informativo do Discord */}
          <Card className="p-4 bg-blue-500/10 border border-blue-500/20">
            <p className="text-sm text-blue-400">
              <strong>Não encontrou sua resposta?</strong> Abra um ticket de atendimento no nosso servidor do Discord!
            </p>
          </Card>

          {/* Navegação Inferior */}
          <div className="flex justify-between gap-4 pt-2">
            <Link to="/principal/diretrizes" className="flex-1">
              <Card className="p-4 border border-border bg-card hover:bg-accent/40 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <ChevronLeft className="w-5 h-5 text-muted-foreground" />
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground mb-1">Anterior</p>
                    <h3 className="font-semibold text-foreground">Diretrizes</h3>
                  </div>
                </div>
              </Card>
            </Link>

            <Link to="/principal/definicoes" className="flex-1">
              <Card className="p-4 border border-border bg-card hover:bg-accent/40 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Próximo</p>
                    <h3 className="font-semibold text-foreground">Definições</h3>
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