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
No princípio havia apenas vazio. Nada existia além de duas essências absolutas: a Luz e a Penumbra. Não havia forma, não havia tempo, apenas essas duas consciências primordiais fluindo pelo nada infinito.
Num momento que não pertence a nenhuma cronologia, movidas por um tédio sem nome, elas decidiram se unir. Dessa fusão veio uma explosão, ou então, expansão. O universo se expandiu em todas as direções possíveis. Galáxias surgiram, estrelas explodiram em vida, mundos tomaram forma. E dentro desse "caos", nasceu o Lumen, a essência da criação.
Essas essências são como consciências dispersas, almas ou espíritos onipresentes. O Lumen, em sua natureza ordenadora, olhou para tudo aquilo que havia sido criado e teve uma ideia: um planeta feito de intenção, não de acaso. Assim nasceu Luminosidade.
Aqui, Luz e Penumbra são como correntes vivas, parte da energia do mundo, entrelaçadas num equilíbrio dinâmico e contínuo. E nesse mundo, surgiram formas de vida alinhadas às essências primordiais. Os Revens surgiram da Penumbra em estado absoluto, manifestações densas da sombra. Os Lumyn nasceram da Luz pura, sua contraparte celeste e luminosa. Os Oaken emergiram entre ambos, carregando um equilíbrio perfeito das duas forças. E os Humanos, seres que não se sabe ao certo a origem, apenas que não são frutos de nenhuma essência.
Mas então veio Apollo. Um Lumyn escolhido para ser o receptáculo do Lumen, tornando-se aquilo que se conhece como Radiante, uma raça rara. Ele era a mutação final, o primeiro e único ser vivo a carregar a essência da criação em forma encarnada. Quando Apollo percebeu a influência global que tinha, começou a construção do Reino de Lumen, uma estrutura que tentava ordenar o mundo sob a luz de uma nova era; era o sonho de Apollo criar seu próprio reino, sua principal ideia era "melhorar" todo o mundo.
Apollo via o caos que ainda persistia mesmo com suas leis e intervenções. Conflitos e desequilíbrios continuavam.
Então Apollo tomou uma decisão: no milésimo ano de Luminosidade, ele subiu à mais alta montanha do planeta e realizou um ritual. Um ritual que redefiniria tudo. Os seres vivos retornaram às suas formas primordiais de Luz e Penumbra. Corpos desfeitos em essência pura. Consciências dissolvidas. O mundo foi reorganizado.
Com isso feito, Apollo iniciou algo novo. Em vez de deixar o acaso governar novamente, ele começou a selecionar. Trouxe indivíduos de outros universos, trazendo-os para Luminosidade, mas sem lembranças plenas de seus mundos, história ou familiares. Deixou apenas fragmentos: nome, gostos, um detalhe aqui ou ali que os mantinha minimamente inteiros.
Ao atravessarem o limiar entre universos, suas essências se revelavam. Alguns se tornavam Revens. Outros, Lumyn. Outros ainda, Oaken. E uma parcela permanecia humana, sem que nenhuma força primordial os reclamasse.
Luminosidade estava habitada de novo. Moldada de novo. Mas dessa vez, totalmente guiada por Apollo, ou melhor dizendo, o Lumen.
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