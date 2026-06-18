import { Card } from '../components/ui/card'
import {
  ChevronRight,
  ChevronLeft,
  TriangleAlert,
  UserPen
} from 'lucide-react'

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
      tips: [
        "Ele é bom no que? E ruim em que?",
        "O que nele pode ser visto como algo ruim?"
      ]
    },
    {
      title: "Como é a personalidade do seu personagem?",
      description: "Descreva a personalidade de seu personagem",
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
      tips: [
        "Medo de algo maior?",
        "Medo de ser esquecido?",
        "Fobias do que? De insetos? Alturas?"
      ]
    },
    {
      title: "Qual é a história de seu personagem?",
      description: "Como era o mundo de onde veio",
      tips: [
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
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                <UserPen className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">
                  Dicas de Criação de Personagem
                </h1>
              </div>
            </div>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-muted-foreground">
            Criar um personagem envolvente é essencial para uma boa experiência de roleplay.
            Siga este guia para desenvolver um personagem memorável e coerente com o universo de Lumen.
          </p>

          <div className="space-y-6">
            {characterSteps.map((step, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>

                    <p className="text-muted-foreground mb-3">
                      {step.description}
                    </p>

                    <div className="bg-muted p-3 rounded-lg">
                      <h4 className="text-sm font-medium text-foreground mb-2">
                        Perguntas para refletir:
                      </h4>

                      <ul className="text-sm text-muted-foreground space-y-1">
                        {step.tips.map((tip, tipIndex) => (
                          <li
                            key={tipIndex}
                            className="flex items-start gap-2"
                          >
                            <span className="text-muted-foreground/60 mt-1">•</span>
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

          {/* Card Importante - Estilizado para o Tema Escuro usando a variável destructive */}
          <Card className="p-4 bg-destructive/10 border-destructive/30">
            <div className="flex items-start gap-3">
              <TriangleAlert className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold text-foreground mb-1">
                  Importante
                </p>
                <p className="leading-relaxed">
                  Lembre-se, a história de seu personagem deve sempre terminar com ele acordando num lugar, como um salão grande, e o que antecede isso, ele apenas dormir e acordar já nesse ambiente, ou ele ver uma luz muito forte e acordar nesse lugar.
                  Não cite reações nem sentimentos dele nesse novo ambiente, apenas diga que o personagem acordou nesse lugar, reações e/ou sentimentos do personagem devem ser interpretados dentro do roleplay nesse momento.
                  Nenhum personagem tem memórias exatas de sua origem, apenas informações básicas, hobbies, gostos, desgostos, nome, etc.
                  O personagem pode vir de outras realidades, de outros universos, ter outras raças (deve ser citado na história dele) e etc, desde que não seja nada que de poder absurdo ao personagem, como por exemplo, uma raça 'semi-deus'.
                </p>
              </div>
            </div>
          </Card>

          {/* Navegação Inferior */}
          <div className="flex justify-between gap-4">
            <Link to="/principal/definicoes" className="flex-1">
              <Card className="p-4 border border-border bg-card hover:bg-accent/40 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <ChevronLeft className="w-5 h-5 text-muted-foreground" />
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground mb-1">
                      Anterior
                    </p>
                    <h3 className="font-semibold text-foreground">
                      Definições
                    </h3>
                  </div>
                </div>
              </Card>
            </Link>

            <Link to="/principal/itens-banidos" className="flex-1">
              <Card className="p-4 border border-border bg-card hover:bg-accent/40 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Próximo
                    </p>
                    <h3 className="font-semibold text-foreground">
                      Itens Banidos
                    </h3>
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