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
Havia apenas o vazio primordial, onde tudo o que existia era a presença de duas essências absolutas: a Luz e a Penumbra. Não havia forma, matéria ou tempo tal como se conhece, apenas essas duas consciências primordiais que permeavam o nada. Em um momento que não pertence à cronologia, movidas por um tédio sem nome, decidiram unir-se. Dessa fusão nasceu uma explosão sem origem e sem direção, um evento fundacional que expandiu a existência em todas as direções possíveis, dando origem ao universo: galáxias, estrelas, mundos e correntes infinitas de energia. Dentre essas correntes, surgiu o Lumen, a essência da criação.
Essas essências não são forças cegas, mas consciências dispersas, como almas que existem em escala cósmica. O Lumen, em sua natureza ordenadora, um dia concebeu a ideia de um mundo próprio, um planeta que não fosse resultado do acaso, mas de intenção. Assim nasceu Luminosidade, o único planeta moldado desde sua origem, onde Luz e Penumbra não apenas coexistem, mas percorrem a realidade como correntes vivas, entrelaçadas em um equilíbrio dinâmico e contínuo.
Nesse mundo, surgiram também formas de vida alinhadas às essências primordiais. Os Revens, nascidos da Penumbra em estado absoluto, existem como manifestações densas da sombra primordial, enquanto os Lumyn, formados da Luz pura, representam sua contraparte celeste e luminosa. Entre ambos, os Oaken emergem como síntese do equilíbrio, portadores de uma harmonia igual entre as duas forças.
Entre esses seres, destacou-se Apollo, um Lumyn escolhido como receptáculo do Lumen, tornando-se aquilo que se conhece como Radiante, uma espécie de mutação da raça Lumyn — o primeiro e único ser vivo a carregar a essência da criação em sua forma encarnada. Sob sua presença, ergueu-se o Reino de Lumen, estrutura que simbolizava a tentativa de ordenar o mundo sob a luz dessa nova era.
Contudo, diante da percepção do caos que ainda persistia entre os povos, marcado por conflitos e desequilíbrios, Apollo concebeu uma resolução definitiva. Assim nasceu o Festival da Aurora, um evento anunciado apenas como uma convergência inevitável do destino. No tempo marcado, no início do milésimo ano do planeta, ele dirigiu-se à mais alta montanha de Luminosidade e realizou o ritual que redefiniria toda a existência conhecida, retornando os seres vivos à sua forma primordial de Luz e Penumbra, desfazendo corpos e consciências em essência pura.
Com a conclusão do ritual, e diante do mundo reorganizado, Apollo passou a buscar uma nova era para Luminosidade. Em vez de permitir o retorno do acaso, iniciou a seleção de indivíduos provenientes de outros universos, trazendo-os de outros universos ao planeta, sem lembranças plenas de suas origens, preservando apenas fragmentos essenciais de identidade, como nome, gostos, entre outros. Ao atravessarem esse limiar, suas essências eram então reveladas: alguns tornavam-se Revens, outros Lumyn, outros Oaken, enquanto uma parcela permanecia humana, sem que nenhuma força primordial os reclamasse. Assim, Luminosidade passou a ser habitada por aqueles que foram trazidos, moldados ou deixados em sua forma original, sob a sombra de um mundo inteiramente guiado pelo Lumen.
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