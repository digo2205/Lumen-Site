// Store simples de conteúdo editável do site, persistido em localStorage.
// Cada página lê daqui em vez de ter os dados fixos no componente.

export interface Rule {
  id: string
  title: string
  text: string
}

export interface FormEntry {
  id: string
  title: string
  description: string
  status: "Disponível" | "Indisponível"
  link: string
  requirements: string[]
}

export interface Idea {
  id: string
  title: string
  text: string
  createdAt: number
}

export interface LorePage {
  id: string
  title: string
  paragraphs: string[]
}

export interface LoreCategory {
  id: string
  label: string
  pages: LorePage[]
}

export interface SiteData {
  bannedItems: string[]
  bannedAttitudes: string[]
  bannedEnchantments: string[]
  bannedSpells: string[]
  bannedMods: string[]
  serverRules: Rule[]
  roleplayRules: Rule[]
  minecraftRules: Rule[]
  forms: FormEntry[]
  ideas: Idea[]
  lore: LoreCategory[]
}

const STORAGE_KEY = "lumen-site-data"

const defaultData: SiteData = {
  bannedItems: [
    "Magia - Abyssal Blast", "Aegis Wine", "Black Sun Sword", "Coin Minting Machine",
    "Cross Necklace", "Crystal Heart", "Dimensional Carver", "Draconic Twinsword",
    "Eiswein", "Encantamento - Disarming", "Enderic Railgun", "Ferricore Ingot",
    "Ignitium Boots", "Ignitium Chestplate", "Ignitium Elytra Chestplate",
    "Ignitium Helmet", "Ignitium Leggings", "Magia - Invisibility",
    "Longsword of the Plague", "Magenta", "Meat Shredder", "Mellohi Wine",
    "Apple Wine", "Mortuth", "Netherfused Gem - Radiance", "Runefused Gem - Immolation",
    "Shattered Dimensional Carver", "Transmutation Table", "Erdrick's Sword",
    "Transmuting Elixir", "Oakskin Elixir", "Greater Oakskin Elixir",
    "Master Sword - em lore e pvp", "Gram", "Sigmun", "Trash Bag", "Chunk Loader (Kibe)",
  ],
  bannedAttitudes: [
    "Invisiblidade em eventos", "Charm of Shrinking em eventos",
    "Qualquer vinho a partir do nível um", "Entrar em qualquer dimensão sem permissão",
    "Criar ou duplicar moedas do Lightman's Currency",
    "Teleportar por waystones utilizando barcos", "Criar times do FTB Teams",
    "Pegar bosses em lassos do Kibe",
  ],
  bannedEnchantments: ["Disarming"],
  bannedSpells: ["Abyssal Blast"],
  bannedMods: ["Just Dire Things", "Simply Swords (só ferramentas únicas)", "Chunk Loader"],
  serverRules: [
    { id: "s1", title: "1. Discriminação", text: "É estritamente proibido qualquer tipo de preconceito no servidor, seja racismo, homofobia, xenofobia, intolerância religiosa, entre outros." },
    { id: "s2", title: "2. Respeito", text: "Pedimos para todos os membros que não desrespeitem ninguém, trate todos como você gostaria de ser tratado, sem discriminar ou ofender alguém." },
    { id: "s3", title: "3. Assédio", text: "Qualquer tipo de assédio, perseguição, intimidação, ou mesmo, abuso é inadmissível em nosso servidor." },
    { id: "s4", title: "4. Discussões", text: "Evite causar discussões, brigas, ou algo semelhante, afinal estamos aqui para jogar e nos divertir, e não para causar intriga." },
    { id: "s5", title: "5. Ameaças", text: "É intolerável qualquer tipo de ameaça, ataque pessoal, provocação, acusação falsa ou semelhante." },
    { id: "s6", title: "6. Doxxing", text: "Não compartilhe dados pessoais de outros usuários sem permissão, seja foto do rosto, nome, entre outros." },
    { id: "s7", title: "7. Spam", text: "Golpes, fraudes, spam, divulgações sem permissão ou coisa do gênero é proibido em nosso servidor." },
    { id: "s8", title: "8. Links", text: "Não envie links maliciosos que possam, conter malwares, spywares ou semelhantes, você não gostaria de receber um link desse gênero." },
    { id: "s9", title: "9. Conteúdo", text: "Nenhum conteúdo NSFW deve ser compartilhado no servidor, seja gore, pornografia ou qualquer outro tipo de material perturbador; também se encaixa nessa diretriz, assuntos como, drogas ilegais, armas reais, etc." },
    { id: "s10", title: "10. Flood", text: "Não spamme ou floode mensagens em bate-papos, são atitudes que incomodam e atrapalham a conversa ou jogatina." },
    { id: "s11", title: "11. Comportamentos", text: "Seja comportado, não pratique atos que prejudiquem a experiência dos usuários (por exemplo, spawnkill)." },
    { id: "s12", title: "12. Incentivo", text: "Não pratique e não incentive ódio, violência, extremismo, ou qualquer outra coisa que \"não seja legal\"." },
    { id: "s13", title: "13. Assuntos", text: "Evite comentar sobre assuntos que possam provocar gatilhos em algumas pessoas." },
    { id: "s14", title: "14. Cheats", text: "Qualquer tipo de cheat, programas externos que oferecem vantagem ao jogador, ou mesmo scripts maliciosos não são permitidos." },
    { id: "s15", title: "15. Colaboração", text: "Respeite as regras de eventos, horários de roleplay e lore, ou semelhantes." },
    { id: "s16", title: "16. Trapaças", text: "Não tente procurar bugs ou falhas, mantenha o espírito da diversão." },
    { id: "s17", title: "17. Instruções", text: "Siga as instruções dadas pelos moderadores ou administradores do servidor, seja em eventos, momentos de roleplay ou semelhantes." },
    { id: "s18", title: "18. Ações Perturbadoras", text: "Qualquer outra atitude considerada assustadora, irritante ou repetitiva pelos usuários, pode se encaixar nesta diretriz." },
  ],
  roleplayRules: [
    { id: "r1", title: "1. Hard-RP", text: "Siga o roleplay o tempo todo, independente das circunstâncias." },
    { id: "r2", title: "2. Interpretação", text: "Se você criou um personagem, você deve interpretá-lo da forma que ele é ou age." },
    { id: "r3", title: "3. Metagaming", text: "Não utilize informações externas dentro do roleplay e nem conte sobre o roleplay fora, exemplo: \"mandaram o nome de uma entidade no chat geral do Discord, eu sei, mas meu personagem não\" ou \"estou numa chamada com um amigo, não posso falar informações do roleplay para ele\"" },
    { id: "r4", title: "4. Random Death Match (RDM)", text: "Não mate jogadores, ou semelhantes sem razão aparente na lore." },
    { id: "r5", title: "5. Autonomia", text: "Na vida real você não chama um \"administrador\" para resolver seus problemas, o mesmo vale aqui, se precisar de algo, abra um ticket de atendimento em nosso servidor do Discord." },
    { id: "r6", title: "6. Preservação", text: "Mesmo em um ambiente onde a morte não é definitiva, a vida continua sendo algo precioso. Tratar a própria existência com descuido, se jogando em perigo sem motivo ou ignorando o instinto de sobrevivência, demonstra falta de respeito às regras do mundo." },
    { id: "r7", title: "7. Dark-rp", text: "Não faça dark-rp em nenhuma circunstância, ou seja, roleplays que tratam de assuntos muito pesados." },
    { id: "r8", title: "8. Itens de Lore", text: "Livros, itens da lore encontrados no local, devem permanecer lá, é permitido pegar os livros para ler na hora, se quiser, copiá-los, mas sempre devolver aonde encontrou." },
  ],
  minecraftRules: [
    { id: "m1", title: "1. Lag", text: "Qualquer coisa que cause lag ou crashs no servidor será destruído sem aviso prévio, sejam máquinas, rituais, entre outros." },
    { id: "m2", title: "2. Construções", text: "Não destrua construções que sejam pertencentes a lore ou a outros jogadores." },
    { id: "m3", title: "3. Roubo", text: "Não roube os jogadores, entidades ou mesmo as casas dos jogadores." },
    { id: "m4", title: "4. Modelos", text: "Não utilize modelos ou skins sem autorização da administração do servidor." },
    { id: "m5", title: "5. Waystones", text: "Não use barcos, ou qualquer outro bug para teletransportar mais de um jogador entre as waystones." },
    { id: "m6", title: "6. Inatividade", text: "Se passar mais de uma semana sem entrar no servidor, você será automaticamente desclassificado e todo o seu progresso e lore serão apagados; na lore seu personagem será dado como morto e você terá de criar um novo com outra história, personalidade e nome. Se você precisar ficar inativo por mais de sete dias, independente do motivo, avise no canal ausência em nosso servidor do Discord." },
    { id: "m7", title: "7. Vida", text: "Não ultrapasse sessenta corações de vida (três barras)." },
    { id: "m8", title: "8. \"Abuso\"", text: "Não use bugs ao seu favor ou tente descobrir a identidade dos filhotes ou moderadores/administradores; e se descobrir a identidade, guarde para você, não espalhe." },
    { id: "m9", title: "9. Placas & Livros", text: "Não edite placas ou livros pertencentes a lore; também evite deixar muitas placas por aí." },
  ],
  forms: [
    {
      id: "f1",
      title: "Formulário de Inscrição de Jogador",
      description: "Formulário para tornar-se um jogador (andarilho) no servidor",
      status: "Disponível",
      link: "https://forms.gle/tKXWh3gYeN7XQfB36",
      requirements: ["Formulário aprovado pelos administradores;", "14 anos ou mais."],
    },
    {
      id: "f2",
      title: "Formulário de Inscrição de Staff",
      description: "Formulário para tornar-se um staff no servidor",
      status: "Disponível",
      link: "https://forms.gle/1CghL7KTVyPJMTZ69",
      requirements: ["Formulário aprovado pelos administradores;", "15 anos ou mais."],
    },
    {
      id: "f3",
      title: "Formulário de Inscrição de Filhote",
      description: "Formulário para tornar-se um filhote (ovo) no servidor",
      status: "Indisponível",
      link: "https://forms.gle/B73qY4GDzAP9Kqxr6",
      requirements: ["Formulário aprovado pelos administradores;", "15 anos ou mais."],
    },
  ],
  ideas: [],
  lore: [
  {
    id: "principios",
    label: "Princípios",
    pages: [
      {
        id: "origem",
        title: "Origem",
        paragraphs: [
          "Em um dos incontáveis mundos espalhados pelo universo, existia Lumen. Sobre ele velavam dois guardiões de natureza quase divina: Auriel, cuja presença se fazia sentir no calor do sol, e Luriel, cujo silêncio habitava a face da lua. Nenhum dos dois possuía poder suficiente para tocar o mundo material de forma direta; sua influência chegava como a luz filtrada pela fresta de uma janela fechada — em sonhos, em intuições, em certezas inexplicáveis que vinham de lugar nenhum.",
          "Lumen era habitado por dois grandes reinos: Altamar e Olímpia. Por mais de seiscentos anos, coexistiram em paz. No seiscentésimo e quarto ano dessa paz, ela terminou.",
          "O que começou como uma disputa por terras num período de escassez cresceu até consumir gerações. Os recursos rareavam — minério, madeira, tudo o que sustenta uma civilização. Parte dessa escassez não era apenas natural: a Teia, a energia que percorre Lumen como sangue percorre um corpo, havia sido gasta em muitas regiões de ambos os reinos — por uso irresponsável da magia, por décadas de sofrimento acumulado, por conflitos internos que antecederam a grande guerra. Terras exauridas, incapazes de devolver o que antes davam.",
          "Esse conflito, que nenhuma geração conseguiu encerrar, foi nomeado de Cataclismo.",
          "Há aproximadamente duzentos e sessenta anos — Auriel e Luriel fizeram o que jamais haviam feito: agiram juntos. Guiaram por sonhos certas pessoas ainda íntegras — merecedoras, fiéis — até a costa do norte, entre os dois reinos, era um porto, onde um barco, sem ninguém, os aguardava. Assim que subiram no barco, ele se guiou \"sozinho\" até a ilha.",
          "Ali, numa ilha no extremo norte do mundo, afastada de tudo e desconhecida até mesmo dos mapas mais ousados — pois o mundo conhecido era apenas um quinto do que Lumen verdadeiramente era, e aquela ilha existia bem além dessa fronteira — essas pessoas foram deixadas.",
          "Seus habitantes a batizaram de Luanda. Elegeram um rei. Assim nasceu o Reino de Luanda. E por duzentos e sessenta anos, enquanto o mundo ardia, Luanda floresceu.",
          "Até que o restante do mundo a encontrou.",
          "A descoberta, feita no quingentésimo terceiro ano do Cataclismo, produziu um efeito que nenhuma batalha havia conseguido antes — uniu, pela primeira vez em séculos, Altamar e Olímpia. Não pela paz, mas pelo ressentimento. Saber que os guardiões haviam guardado \"favoritos\" para si enquanto o restante do mundo se dilacerava foi intolerável. E ver aquele lugar — belo, intacto, vivo — foi mais do que o ódio acumulado por gerações conseguia suportar.",
          "Então o destruíram.",
          "Foi erguida uma torre enorme numa zona remota da ilha. Sobre ela foram gravadas runas malditas, e através delas foi realizado um ritual que não pertence ao mundo dos vivos. Pois toda maldição carrega em si uma alma — e o ritual invocou uma das mais poderosas que jamais cruzou a teia entre o além e o mundo material. Um espírito denso, antigo e hostil, ancorado àquela terra por força de vontade corrompida.",
          "O que se seguiu foi silencioso, lento e devastador. Pessoas morrendo sem causa aparente. Corpos que desapareciam antes de serem encontrados. O caos instalando-se, com paciência cruel, sobre o que havia sido paraíso.",
          "O rei de Luanda, Apollo, não sabia o que causava aquilo. Via apenas o resultado — e desesperado, sem mais nada a tentar, recorreu ao único poder que lhe havia sido concedido: o de rasgar o tecido da realidade em direção a outros mundos.",
          "As fendas que abriu alcançaram várias realidades, universos e planetas.",
          "Aqueles que as atravessavam não escolhiam fazê-lo. Estavam dormindo, ou viram um clarão. E simplesmente acordaram — num lugar onde a física não existe, onde não há sensação de corpo, de fome, de peso. Um corredor entre mundos; um buraco de minhoca que conduzia, lentamente, até Lumen. Até Luanda.",
        ],
      },
      {
        id: "mundo-lumen",
        title: "Mundo: Lumen",
        paragraphs: [
          "Lumen é um mundo de proporções que excedem qualquer escala comum — seu diâmetro de aproximadamente 130.000 quilômetros o torna vastamente maior do que planetas ordinários. E ainda assim, de toda essa imensidão, apenas uma fração foi jamais tocada por olhos civilizados: cerca de um quinto do que o planeta verdadeiramente é. O restante permanece além — não inexplorado por falta de curiosidade, mas por força de barreiras que a natureza ergueu com aparente intenção. Oceanos sem litoral visível. Tempestades que não se dissipam. Regiões onde a própria magia se comporta de forma hostil a qualquer presença viva.",
          "Abaixo de toda superfície, dentro de toda pedra, permeando toda água e todo ar, existe uma rede invisível de energia chamada de A Teia. É o sistema nervoso do planeta: a corrente que conecta toda vida a toda outra vida, e toda vida ao chão sob ela.",
          "A Teia não é estática. Ela flui, pulsa, adensa-se em certas regiões e afina-se em outras. Onde é densa, a natureza floresce de formas que surpreendem até quem já viu muito. Onde é fraca, a terra ressente. Onde foi destruída, o silêncio que fica é diferente do silêncio comum — é a ausência de algo que deveria estar presente, e qualquer ser sensível o percebe.",
          "Quase todo ser vivo em Lumen possui alguma sensibilidade à Teia, em graus variados. Alguns a percebem como uma pressão sutil no ar, um formigamento nos dedos, uma certeza que não vem de lugar nenhum. Outros aprendem, com dedicação e tempo, a tocá-la e moldá-la — a esses, o mundo chama de Tecedores, ou simplesmente, Magos. Entre os Tecedores, os mais experientes são reconhecidos como Tecedores-Mestre: autoridades da prática, guardiões do equilíbrio entre o que pode ser feito e o que não deveria ser tentado.",
          "A Teia, porém, não é apenas fonte de poder. Existe algo do outro lado do mundo material — um plano que a maioria das pessoas vive a vida inteira sem precisar nomear. Um lugar onde residem as almas que partiram e as forças que nunca pertenceram ao plano dos vivos. A Teia é o que separa esses dois planos, o que mantém cada coisa no lugar que lhe é devido.",
          "Quando a Teia está saudável, essa separação é sólida. O além permanece onde deve. Quando a Teia se fragmenta — por uso irresponsável, por sofrimento prolongado, por destruição deliberada — a fronteira afina. Rachaduras se abrem. Por essas rachaduras, almas que deveriam ter seguido adiante encontram caminho de volta; forças antigas que nunca pertenceram a este mundo encontram fresta por onde entrar. Manifestam-se como perturbação, como presença hostil, como maldição — pois toda maldição verdadeira é, em sua essência, uma alma ancorada onde não deveria mais estar.",
          "Os Tecedores-Mestre que compreendem isso tratam a Teia como tratariam um organismo vivo: com cuidado, com responsabilidade, com consciência de que o que se faz com ela reverbera em camadas que olhos comuns não alcançam.",
          "Sobre Lumen velam dois guardiões. Auriel, associado ao sol — à luz, ao calor, ao crescimento e à coragem que empurra as coisas adiante. Luriel, associado à lua — ao silêncio, à introspecção, à paciência e à aceitação do que é inevitável.",
          "Não são deuses no sentido absoluto. Não criaram o universo, não são onipotentes. São entidades profundamente antigas, ligadas a Lumen desde sua formação — como se fossem a consciência mais elevada da própria Teia, sua forma de existir além da matéria. Habitam além do plano material e não podem tocá-lo de forma direta; sua influência chega apenas como luz por fresta: em sonhos, em intuições, em certezas sem origem explicável.",
          "São, em muitos sentidos, opostos. Auriel tende à ação, à clareza, ao imediato. Luriel tende à espera, ao silêncio, ao longo prazo. Raramente concordam sobre como agir. Mas ambos voltam seus olhos ao mesmo mundo — e ambos, cada qual à sua maneira, importam-se com ele.",
          "O que a civilização conhece de Lumen é apenas uma fração — vinte por cento, aproximadamente. O restante do planeta existe. É real. Tem montanhas, oceanos, florestas e, quase certamente, vida. As poucas expedições que avançaram além das fronteiras conhecidas nunca retornaram; por isso, há muitas lendas sobre o que existe nos vastos oceanos ou no restante do mundo.",
          "Lumen é imensamente maior do que tudo o que se sabe sobre ele. E existe há tempo suficiente para não se importar com o que ainda não foi descoberto.",
        ],
      },
      {
        id: "teia",
        title: "Teia",
        paragraphs: [
          "A Teia é uma estrutura física, invisível e onipresente que funciona como o sistema nervoso e circulatório do planeta Lumen, interconectando toda forma de vida e vinculando cada elemento diretamente ao solo. Sua distribuição pelo mundo não é uniforme, de modo que nas regiões onde ela é mais densa a natureza floresce com uma vitalidade exuberante, enquanto nas áreas onde enfraquece a terra ressente-se e torna-se estéril. Nos piores cenários, onde a estrutura foi efetivamente destruída, instala-se um silêncio artificial e angustiante, marcado pela ausência absoluta do que deveria estar ali.",
          "Quase todos os seres vivos em Lumen possuem alguma sensibilidade a essa rede. A população geral a percebe de forma sutil através de formigamentos, variações na pressão do ar ou intuições repentinas, mas indivíduos disciplinados chamados Tecedores, ou Magos, aprendem a usar a própria magia, material fornecido pela Teia. No topo dessa hierarquia estão os Tecedores-Mestre, a elite dos manipuladores que agem como guardiões do equilíbrio, ditando os limites éticos do que pode e não pode ser feito com essa energia.",
          "Além de ser uma fonte de poder, a Teia funciona como a barreira mística fundamental que separa o mundo material do Além, o plano para onde vão as almas dos mortos e onde habitam forças que nunca pertenceram aos vivos. Quando a Teia está saudável, essa barreira permanece sólida e mantém cada plano em seu devido lugar, mas quando ela se fragmenta devido a feitiçarias irresponsáveis, sofrimento coletivo, sentimentos negativos ou destruição deliberada, a fronteira afina e gera rachaduras na realidade.",
          "Por meio dessas rupturas, forças antigas e almas perdidas invadem o mundo físico, dando origem às maldições, que em Lumen são essencialmente entidades do Além ancoradas onde não deveriam estar. Por essa razão, os Tecedores-Mestre tratam a Teia como um organismo vivo, sabendo que qualquer dano aos seus fios invisíveis ecoa em camadas profundas, perigosas e invisíveis da existência.",
        ],
      },
    ],
  },
  {
    id: "personagens",
    label: "Personagens",
    pages: [
      {
        id: "auriel",
        title: "Auriel",
        paragraphs: [
          "Nos primórdios de Lumen, antes mesmo que os primeiros reinos erguessem suas fundações de pedra, Auriel se manifestou como a personificação do dia, da ação e da vitalidade. Ele era o guardião cuja presença se fazia notar no calor do sol que alimentava as colheitas e aquecia a terra. Sendo uma entidade de natureza quase divina, Auriel não possuía a capacidade de intervir fisicamente ou moldar a matéria com as próprias mãos; seu poder operava nas frestas da consciência mortal. Ele era a voz que soprava o otimismo nos corações desesperados, a intuição que guiava os descobridores e a certeza inexplicável que preenchia os homens justos quando precisavam tomar decisões difíceis.",
          "Durante os seiscentos anos de paz entre Altamar e Olímpia, Auriel atuou como o motor do progresso e da justiça. Ele inspirava os reis a governarem com generosidade e os magos a utilizarem a Teia para a cura e a construção. No entanto, quando o Cataclismo fraturou o mundo no seiscentésimo e quarto ano, o guardião do sol sentiu cada gota de sangue derramada no Vale do Fim como uma queimadura em sua própria essência. Ver a Teia ser gasta pelo uso irresponsável da magia e pelo egoísmo humano feriu sua natureza de doador da vida. Diante da iminente extinção da inocência no mundo, Auriel percebeu que a humanidade precisava de um recomeço, o que o levou a quebrar seu isolamento milenar para arquitetar o êxodo rumo ao norte.",
          "Ao lado de Luriel, Auriel derramou suas últimas forças ativas sobre os sonhos daqueles que ainda portavam corações íntegros. Ele soprou visões de um porto seguro e de um mar calmo, impulsionando a jornada que daria origem ao Reino de Luanda. Contudo, a derrocada de Luanda e a profanação da torre maldita trouxeram um luto profundo ao guardião. Ao ver o Submundo de Azrael estender suas garras sobre os seus protegidos, Auriel recolheu sua influência direta, restando-lhe apenas observar, com dor silenciosa, o momento em que o rei desesperado rasgaria a realidade para buscar salvação na Terra.",
        ],
      },
      {
        id: "luriel",
        title: "Luriel",
        paragraphs: [
          "Luriel nasceu do repouso e do mistério, a contraparte exata e necessária ao calor de seu irmão. Sua presença habitava a face da lua, o manto da noite e o silêncio que se instala sobre o mundo quando o barulho dos vivos cessa. Se Auriel inspirava a ação e o avanço, Luriel era o guardião da introspecção, dos segredos guardados e da sabedoria oculta. Sem poder tocar o plano material diretamente, a influência de Luriel chegava aos mortais através do tecido sutil dos sonhos profundos, das revelações silenciosas que surgiam na calada da noite e da paz espiritual que acalmava as mentes atribuladas antes do descanso.",
          "Por séculos, Luriel observou o Nexo de Ouro e os reinos de Lumen a partir de sua perspectiva eterna e distante. Ele compreendia que a escuridão não era o mal, mas o espaço necessário para a regeneração da Teia. Quando o Cataclismo começou e a magia corrompida passou a rasgar a energia vital do planeta, Luriel testemunhou o pior tipo de treva: o esgotamento da alma do mundo. As noites no Vale do Fim deixaram de ser momentos de paz e tornaram-se vigílias de agonia e assombrações. Percebendo que o ciclo natural de Lumen havia sido quebrado pela ganância de Altamar e Olímpia, o guardião da lua aceitou que a única forma de preservar a beleza da criação seria ocultando uma centelha dela onde ninguém pudesse encontrar.",
          "Unindo seu silêncio à vibração de Auriel, Luriel teceu o véu invisível que escondeu a ilha do extremo norte dos mapas e das mentes dos homens corruptos. Foi ele quem guiou a nau vazia pelas águas perigosas, usando as correntes marítimas e a luz do luar para proteger os escolhidos até Luanda. Quando a invasão continental quebrou o isolamento e o ritual necromântico ancorou uma alma hostil na ilha, Luriel sentiu o apodrecimento da noite de Luanda. Diante da tragédia, o guardião recolheu-se ao seu silêncio mais profundo, incapaz de impedir o colapso, mas assistindo à abertura das fendas cósmicas como o último ato de resistência de uma linhagem que ele mesmo ajudou a salvar.",
        ],
      },
      {
        id: "azrael",
        title: "Azrael",
        paragraphs: [
          "Antes de se tornar o monarca absoluto do Submundo, Azrael foi uma das existências mais antigas de Lumen, um ser de natureza grandiosa que caminhava ao lado de Auriel e Luriel. Na aurora dos tempos, ele não governava as sombras, mas atuava como o tecelão dos ciclos do universo, o guardião encarregado de recolher o sopro vital dos mortais e garantir que suas almas fizessem a transição pacífica através da Teia. Ele era uma entidade de justiça e equilíbrio, uma força necessária que compreendia a mortalidade como parte da harmonia do cosmos, respeitado tanto pelo calor do sol quanto pelo silêncio da lua.",
          "No entanto, a proximidade constante com o fim das coisas começou a transformar a mente de Azrael. Ao testemunhar eras de mortais que desperdiçavam suas existências com ganância, traições e violência — os primeiros sinais do que séculos mais tarde se tornaria o Cataclismo —, ele passou a enxergar o livre-arbítrio não como uma dádiva, mas como uma falha de criação. Azrael começou a questionar por que almas tão propensas ao caos deveriam retornar à Teia para reencarnar e errar novamente. Ele passou a acreditar que a verdadeira paz só seria alcançada através do controle absoluto, onde nenhuma alma teria a liberdade de falhar.",
          "Essa mudança de pensamento o colocou em rota de colisão direta com Auriel e Luriel. Quando Azrael tentou subjugar à força os espíritos dos primeiros mortais caídos para testar sua doutrina de obediência cega, os outros guardiões intervieram. O conflito que se seguiu não foi travado com espadas, mas com pura vontade metafísica. Julgado como uma ameaça à ordem natural do universo, Azrael foi banido da realidade de Lumen. Ele foi lançado para fora da Teia, exilado em uma dimensão desconhecida e completamente desconectada do mundo material, conhecida antes como Reino das Almas.",
          "Foi no exílio que o antigo guardião se transformou definitivamente no Rei do Inferno. A dimensão desolada para onde foi enviado moldou-se ao redor de seu rancor e de sua determinação inabalável. Azrael usou sua imensa energia para transformar o vazio no Reino das Almas, forjando do próprio sofrimento as primeiras correntes espirituais. Ele decretou que, se o mundo vivo o havia rejeitado, ele buscaria incessantemente vingança contra os próprios guardiões e habitantes de Lumen, tornando-se o senhor das maldições e o carcereiro eterno de cada espírito que ele desejasse ou que fosse banido para aquele lugar; talvez, almas que queiram estar ao seu lado também.",
        ],
      },
      {
        id: "apollo",
        title: "Apollo",
        paragraphs: [
          "Antes de carregar o peso de um reino em ruínas, Apollo foi um príncipe moldado pela própria essência de Luanda. Nascido da linhagem direta dos primeiros líderes escolhidos pelos guardiões, ele era filho do Rei Selenor e da Rainha Aurora. Seus pais governavam não pelo medo, mas pela devoção mútua e pelo respeito à Teia. O casamento deles era visto como o reflexo perfeito da união entre Auriel e Luriel: Selenor possuía a serenidade e a firmeza da lua, enquanto Aurora carregava a vivacidade e o calor do sol. Foi nesse ambiente de profundo afeto, estabilidade e reverência espiritual que Apollo cresceu, sendo educado para ser o elo definitivo entre seu povo e as divindades que os protegiam.",
          "Sua infância e adolescência foram vividas sob o teto de um palácio. Desde cedo, Apollo demonstrou uma sensibilidade incomum à Teia, a energia vital do mundo. Seus pais, percebendo o potencial do jovem, confiaram sua educação aos mais sábios sacerdotes da ilha. Longe dos campos de batalha e das cicatrizes que consumiam o resto de Lumen, o passado de Apollo foi preenchido por longos dias de estudo nas grandes bibliotecas, aprendizado de alta magia na academia de Luanda e longas caminhadas pelas florestas intocadas. Ele cresceu acreditando piamente que o isolamento de Luanda era um desígnio sagrado e que sua única missão na vida seria perpetuar aquela harmonia eterna.",
          "No entanto, a criação impecável e o amor superprotetor de seus pais também moldaram a maior fraqueza de Apollo: a total ingenuidade perante a maldade humana. O jovem príncipe nunca conheceu a escassez, a traição ou a dor da perda. Para ele, o Cataclismo que ocorria além dos oceanos era apenas uma abstração teórica, um erro de cálculo de povos que não sabiam amar os guardiões. Quando Selenor e Aurora faleceram de velhice natural, deixando a coroa nas mãos de um jovem e idealista Apollo, eles o entregaram um reino perfeito, mas um espírito despreparado para a escuridão. O passado de paz e privilégios de Apollo foi, ironicamente, o que tornou o choque da futura invasão tão devastador, transformando o menino criado no paraíso em um homem que, mais tarde, romperia as barreiras do próprio universo por puro desespero.",
        ],
      },
      {
        id: "tadeu",
        title: "Tadeu",
        paragraphs: [
          "Tadeu é um homem de presença imponente, cuja brutalidade e força física refletem de maneira cristalina os seus aproximadamente cinquenta anos de existência, todos moldados pelo calor excruciante das forjas e pela escuridão opressiva das minas. Tadeu desde criança já buscava recursos para tentar criar algo com a fúria de quem precisava garantir a sobrevivência de sua comunidade, isolando-se nas cavernas mais remotas de Luanda para extrair os recursos que essa terra ainda era capaz de oferecer.",
          "Sua história é a de um sobrevivente impiedoso, cujas mãos calejadas guardam o peso de um trabalho ininterrupto. Embora não tenha o dom de manipular a energia como os Tecedores, sua profunda familiaridade com as rochas lhe concedeu uma intuição singular. Esse dom velado permite-lhe forjar peças que respeitam a integridade do material e o fluxo invisível de energia do planeta, criando equipamentos extraordinários ou até mesmo, ligados a alma de alguém. Seu temperamento bruto e vocabulário ríspido, muitas vezes interpretados como insensibilidade, escondem uma vida de perdas e uma resiliência inabalável. Hoje, ele atua como o ferreiro mais formidável e confiável da região, fabricando armas, armaduras, ornamentos e tudo que há de possível com metais.",
        ],
      },
      {
        id: "barnabe",
        title: "Seu Barnabé",
        paragraphs: [
          "O venerável curandeiro espiritual conhecido como Seu Barnabé é uma figura cercada de misticismo e reverência em Luanda, ostentando uma idade que já se aproxima de seus oitenta anos. Ao longo de décadas de dedicação silenciosa, ele desenvolveu uma compreensão profunda sobre a Teia, a estrutura física e invisível que atua como o sistema nervoso de Lumen e conecta todas as formas de vida. Barnabé especializou-se na manipulação de ervas, compreendendo cada uma e suas utilidades. Utilizando seus conhecimentos empíricos, ele dedica seus dias a aliviar o sofrimento do povo, ajudando com doenças, dores e semelhantes.",
          "No entanto, sua verdadeira genialidade e periculosidade residem no obscuro campo das maldições. Barnabé compreende perfeitamente que as maldições verdadeiras são, em sua essência, entidades e almas do Além que acabaram ancoradas no mundo físico devido às rachaduras geradas na Teia. Com sua sabedoria, ele desenvolveu métodos complexos para tentar desfazer maldições, mas hoje não são mais eficientes como no passado. Contudo, é um segredo guardado nas profundezas de sua mente que esse vasto conhecimento não serve unicamente para a cura. Ele conhece as minúcias de como essas obras malignas funcionam a ponto de, possivelmente, ser capaz de criar suas próprias maldições — um poder profano que ele prefere manter oculto de todos, temendo a perseguição dos magos e as consequências catastróficas que isso traria ao já fragilizado equilíbrio de Lumen.",
        ],
      },
      {
        id: "celine",
        title: "Celine",
        paragraphs: [
          "Apesar de sua tenra juventude, aos dezenove anos, Celine é reverenciada com o prestigioso título de Diretora de Magia de Luanda, integrando a autoritária elite dos manipuladores de magia no Reino de Luanda. Desde a mais tenra infância, ela demonstrou uma afinidade prodigiosa com a Teia, sentindo a sua presença não apenas de forma sutil, mas através de severas variações na pressão do ar e formigamentos intensos que a guiavam como certezas absolutas. Ao invés de ceder à arrogância que tamanho talento natural poderia trazer, Celine dedicou sua vida ao estudo rigoroso e disciplinado dessa energia, compreendendo que a Teia atua como a barreira mística fundamental que separa o mundo material das forças e almas do Além. Essa compreensão a fez assumir para si a imensa responsabilidade de ditar os limites éticos e morais do que pode ou não ser feito com a magia em todo o reino.",
          "Consciente de que a feitiçaria irresponsável e a destruição deliberada afinam e fragmentam a Teia, permitindo que forças caóticas invadam o mundo físico, ela tomou para si o fardo da instrução. Em suas aulas e na regulação das leis mágicas de Luanda, Celine ensina com disciplina férrea que a energia do mundo deve ser tratada como um organismo vivo, exigindo respeito e cautela para não causar danos irreversíveis às camadas invisíveis da existência. Celine consegue usar magias impressionantes, podendo ser considerada uma das maiores feiticeiras da história de Lumen. Sua história pessoal é marcada pela renúncia de uma juventude comum em prol de um dever maior. Com uma postura implacável e uma sabedoria que contrasta fortemente com sua idade, Celine busca garantir que a nova geração de magos jamais repita os erros do passado que levaram o restante do planeta à ruína, agindo como o mais firme pilar da ordem mágica entre os sobreviventes de Luanda.",
        ],
      },
      {
        id: "almas",
        title: "Almas",
        paragraphs: [
          "As almas que dividem-se em duas categorias fundamentais, duas naturezas que definem sua essência e propósito.",
          "As Almas Benditas são aquelas que fluem em harmonia com a existência. São seres que buscam apoiar os encarnados, que encontram significado em auxiliar e ser auxiliados. Elas não conhecem rancor, apenas o desejo de servir e de conectar-se com aqueles que ainda possuem forma. Algumas permanecem próximas aos vivos, guiando-os em momentos de incerteza. Outras buscam encontrar seu próprio caminho através da benevolência que oferecem.",
          "As Almas Malditas, por sua vez, são aquelas presas à escuridão. Muitas são confinadas ao que alguns chamam de Inferno, aprisionadas pelas correntes de Azrael, aquele que guarda o Reino das Almas, o Rei desse ambiente. Essas almas não encontram paz. São atormentadas pela própria natureza, e essa angústia as leva a incomodar os encarnados, a perturbar sua paz, a atrapalhar seus caminhos. Elas espalham confusão e desassossego, como se a própria desgraça que as cerca precisasse ser compartilhada.",
        ],
      },
    ],
  },
  {
    id: "lugares",
    label: "Lugares",
    pages: [
      {
        id: "luanda",
        title: "Luanda",
        paragraphs: [
          "Luanda não nasceu da expansão territorial, mas de um ato de misericórdia divina no quingentésimo terceiro ano antes de sua queda. Enquanto o continente de Lumen se afogava no início do Cataclismo, os guardiões Auriel e Luriel uniram suas forças remanescentes para salvar uma fagulha da humanidade que ainda preservava a integridade espiritual. Através de sonhos e pressentimentos, os escolhidos foram conduzidos a um porto misterioso e embarcaram em uma nau que navegou sem tripulação rumo ao desconhecido. O destino era uma ilha colossal no extremo norte, oculta além do mapa do mundo conhecido — que correspondia a apenas um quinto da verdadeira extensão de Lumen. Ali, cercados por águas intransponíveis e protegidos pelo isolamento, os sobreviventes fundaram o Reino de Luanda, elegendo uma linhagem real para governar sob as bênçãos do sol e da lua.",
          "Por duzentos e sessenta anos, Luanda floresceu como um espelho de perfeição em meio ao caos universal. A Teia, a energia vital do mundo que havia sido exaurida e corrompida no continente pela magia irresponsável e pela guerra entre Altamar e Olímpia, permaneceu pura e pulsante no solo da ilha. Para os habitantes da ilha, a fome, a peste e o ódio eram conceitos abstratos de histórias antigas; eles viviam em um ecossistema autossustentável de paz absoluta, alheios ao fato de que o resto do planeta ardia em cinzas.",
          "A era de ouro da ilha encontrou seu fim trágico no momento exato em que o isolamento foi quebrado. Navegadores do continente, expandindo suas buscas por recursos escassos, finalmente cruzaram as fronteiras proibidas e avistaram a opulência de Luanda. A descoberta gerou um impacto sem precedentes: a visão daquele paraíso intacto uniu os inimigos históricos, Altamar e Olímpia, em um sentimento mútuo de profundo ressentimento. Para as nações do continente, a existência de Luanda era a prova viva de que os guardiões possuíam \"favoritos\" e os haviam abandonado à própria sorte por séculos. Movidos por uma inveja avassaladora e pelo ódio acumulado de gerações, os reinos invasores decidiram que se eles não podiam ter o paraíso, Luanda também não teria.",
          "A destruição do reino não veio por meio de um cerco militar tradicional, mas pela profanação de sua própria terra. Nas zonas mais remotas da ilha, os invasores ergueram uma torre monumental com runas malditas, realizando um ritual necromântico que ancorou um espírito antigo, denso e hostil ao solo de Luanda. A partir daquele dia, a Teia do reino começou a apodrecer de dentro para fora. A outrora radiante ilha transformou-se em um cenário de horror silencioso: plantações murcharam, pessoas passaram a morrer sem qualquer explicação médica e corpos desapareciam misteriosamente antes que pudessem ser sepultados. O paraíso havia sido transformado em uma armadilha mortal, forçando o desespero de sua coroa a buscar uma salvação proibida além das estrelas.",
        ],
      },
      {
        id: "vale-do-fim",
        title: "Vale do Fim",
        paragraphs: [
          "O Vale do Fim nem sempre carregou esse nome fúnebre. Localizado exatamente na linha equatorial de Lumen — uma vasta faixa de terra que geograficamente equivaleria à Europa e às zonas centrais da Terra —, a região era conhecida no passado como o Nexo de Ouro. Era o coração pulsante do planeta, um corredor verdejante de florestas densas, rios colossais e cadeias de montanhas ricas em minérios. Por se situar bem na fronteira natural entre Altamar e Olímpia, o vale funcionou durante os seiscentos anos de paz como o grande entreposto comercial e cultural do mundo, o ponto exato onde as duas potências se cruzavam para prosperar juntas sob a neutralidade garantida pela Teia abundante.",
          "A transformação do nexo em um cenário de horror começou no seiscentésimo e quarto ano da paz, quando a escassez de recursos desencadeou o Cataclismo. Por sua posição central e estratégica, a região tornou-se o tabuleiro principal da guerra bi-secular. O que começou com disputas por minas e colheitas evoluiu para uma campanha de terra arrasada. Décadas de bombardeios mágicos irresponsáveis, canalizações forçadas da Teia para alimentar feitiços de destruição em massa e o sangue de milhões de soldados soterrados reviraram o solo. A energia vital da terra foi violentada a ponto de o ecossistema colapsar por completo, transformando florestas luxuriantes em desertos de poeira cinzenta e rios em canais de lama e resíduos alquímicos.",
          "Hoje, o Vale do Fim é uma gigantesca trincheira planetária que racha o meio de Lumen. A atmosfera ali é permanentemente cinzenta, sufocada pela fuligem de conflitos que nunca cessam por completo e pelos resquícios de magias instáveis que distorcem a gravidade e o clima. Não há dia ou noite claros no vale; a luz do sol de Auriel e o brilho da lua de Luriel mal conseguem penetrar a barreira de fumaça estagnada. A terra tornou-se totalmente estéril, incapaz de germinar uma única semente, forçando os exércitos de Altamar e Olímpia a dependerem inteiramente de linhas de suprimento externas para continuar enviando contingentes para a morte.",
          "Mais do que uma ruína geográfica, o vale tornou-se uma anomalia espiritual e o berço do ressentimento que condenaria Luanda. Como a Teia foi completamente drenada e corrompida naquela zona, o tecido da realidade no Vale do Fim é frágil, repleto de \"bolsões mortos\" onde as almas dos caídos não conseguem fazer a travessia para o além, pairando como um eco de agonia constante. Foi justamente no solo envenenado e rancoroso do vale que os magos de ambos os reinos idealizaram e testaram os rituais necromânticos que, mais tarde, ergueriam a torre maldita no norte. O Vale do Fim é o monumento vivo do fracasso de Lumen: o lugar onde o mundo escolheu sangrar até morrer.",
        ],
      },
      {
        id: "reino-das-almas",
        title: "Reino das Almas",
        paragraphs: [
          "O Reino das Almas, conhecido popularmente entre os mortais de Lumen como o Inferno, não faz parte do plano físico e nem compartilha da energia da Teia que sustenta o planeta. Ele é uma dimensão completamente isolada, um universo de densidade, sombras e silêncio sepulcral que existe à margem da realidade viva. Geograficamente, o reino não possui relevo natural, vegetação ou oceanos; erguido inteiramente pelo rancor e pela força de vontade de seu criador e monarca absoluto, Azrael.",
          "A fundação desse plano dimensional ocorreu após o banimento de Azrael da realidade de Lumen. Condenado ao vazio eterno por Auriel e Luriel devido à sua tentativa de erradicar o livre-arbítrio dos mortais, o antigo guardião utilizou seu imenso poder cósmico para transformar o nada em um império de retribuição e controle. O Reino das Almas foi desenhado para ser o avesso perfeito de Lumen: enquanto o mundo dos vivos celebra o caos da escolha e a imperfeição, o submundo opera sob uma ordem matemática, fria e absolutamente inquebrável. É o destino final de todas as almas que partem de Lumen carregadas de corrupção, ódio ou que foram vinculadas a pactos obscuros.",
          "O coração do reino é sustentado pelas correntes metafísicas de Azrael. Diferente de Lumen, onde os espíritos transitam livremente pela Teia para fazer a passagem, no Reino das Almas o livre-arbítrio é sumariamente extinto na entrada. As almas que cruzam os portões dessa dimensão são acorrentadas ao trono do monarca, sofrendo uma reconfiguração espiritual que as obriga a manter 100% de fidelidade a Azrael por toda a eternidade. No Inferno, não existem rebeliões, dissidências ou falhas: bilhões de espíritos outrora orgulhosos marcham em uníssono, trabalhando na manutenção da infraestrutura sombria do plano ou servindo como uma bateria eterna de energia espiritual para o rei.",
          "Além de ser uma prisão perfeita, o Reino das Almas funciona como a forja central de todas as mazelas metafísicas que afligem Lumen. É nas profundezas dessa dimensão que as maldições, as pestes espirituais e as runas de apodrecimento são arquitetadas e destiladas. Como o reino está fora do espaço-tempo mortal, Azrael consegue observar as rachaduras causadas pelo Cataclismo no plano material e enviar suas criações nefastas através de frestas dimensionais, sussurrando feitiços proibidos para os magos de Altamar e Olímpia. Foi desse lugar que saiu a entidade antiga que destruiu Luanda, provando que, embora o Reino das Almas seja uma dimensão de exílio, sua sombra projeta-se sobre cada centímetro do universo vivo.",
        ],
      },
    ],
  },
  {
    id: "criancas",
    label: "Crianças",
    pages: [
      {
        id: "filhos-de-lumen",
        title: "Filhos de Lumen",
        paragraphs: [
          "A criação das crianças, conhecidas como os Filhos de Lumen, foi o desfecho de uma necessidade existencial profunda de Auriel e Luriel, os guardiões de Luanda. Após a fundação da ilha, os seres primordiais compreenderam que a sua observação secular do mundo os tornara distantes demais do plano material, reduzindo-os a presenças etéreas, meras vozes em sonhos e intuições desprovidas de substância. Para ancorarem-se à realidade e garantirem a perenidade de sua proteção, os guardiões sacrificaram fragmentos de suas próprias essências, moldando oito seres materiais. Optaram, por escolha deliberada, que estas crianças mantivessem permanentemente a aparência e o comportamento de quatro anos de idade, preservando nelas uma pureza imaculada que o tempo e a fadiga do mundo seriam capazes de corromper.",
          "O vínculo estabelecido com esses seres foi inédito na história da existência dos guardiões, pois, por meio das crianças, eles passaram a experimentar o plano material de forma sensorial. Tudo o que cada criança sentia, os guardiões igualmente sentiam, transformando os Filhos de Lumen em uma janela real para o mundo vivo. Contudo, essa nova capacidade trouxe consigo uma vulnerabilidade desconhecida até então: a possibilidade de sofrer pela iminência da perda. Distribuídas entre famílias selecionadas pela integridade de seus lares, as crianças cresceram integradas à rotina da ilha, tornando-se elementos vitais que conferiam uma aura de vivacidade atemporal a Luanda.",
          "A ameaça à estabilidade do reino surgiu quando a entidade maldita foi ancorada ao solo da ilha, desencadeando um processo de corrupção que impactou diretamente a Teia, da qual as crianças são âncoras vivas. À medida que as famílias que as acolhiam sucumbiam ao apodrecimento, Celine e Barnabé perceberam que a entidade não almejava apenas a morte física dos Filhos de Lumen, mas a destruição dos fragmentos divinos que eles carregavam, o que representaria o corte definitivo da conexão entre os guardiões e o mundo. Diante da urgência do colapso, Auriel e Luriel comunicaram a Celine a necessidade de um selo protetor através de um sonho compartilhado. Seguindo as instruções precisas de Barnabé, que compreendia profundamente a língua dos feitiços, ela reuniu as oito crianças e realizou o selo que as lançou ao Além, salvaguardando-as do alcance da força material. Esse procedimento, contudo, foi impiedoso, resultando na anulação total das memórias e da identidade daquelas crianças.",
          "O despertar dessas crianças apenas se concretizou quando Apollo, em seus momentos finais como rei, solicitou a Celine que desfizesse o selo. Considerando que os andarilhos ofereciam a proteção necessária e que o povo carecia do símbolo de esperança que aquelas crianças representavam, ela atendeu ao pedido, restaurando-as ao mundo material, ainda que despertassem em um estado de total desamparo e desconhecimento de suas próprias origens.",
          "O que permanece oculto ao entendimento imediato dos andarilhos é a natureza intrínseca dessas vidas. Cada criança foi dotada, no momento de sua criação, com três reservatórios de existência, permitindo-lhes contornar a finitude por duas vezes antes que a terceira morte se torne irreversível. Este fenômeno não configura uma ressurreição, mas um bloqueio na própria Teia que impede a dissipação das almas dos Filhos de Lumen. Contudo, a terceira morte encerra o ciclo, acarretando a dissolução permanente do fragmento do guardião vinculado à criança, uma perda que Auriel e Luriel experimentam como uma agonia desprovida de equivalente na linguagem mortal. É precisamente por essa razão que a urgência dos guardiões em guiar os andarilhos transcende a simples sobrevivência de Luanda; cada criança preservada é, para eles, a garantia de que a conexão entre o divino e o mundo ainda permanece viva, enquanto cada vida perdida marca uma cicatriz indelével em suas próprias essências.",
        ],
      },
    ],
  },
  {
    id: "andarilhos",
    label: "Andarilhos",
    pages: [
      {
        id: "andarilhos",
        title: "Andarilhos",
        paragraphs: [
          "Os \"andarilhos\" de Luanda não pertencem a Lumen; eles são nativos de outros universos, planetas ou realidades. Eles eram pessoas comuns — que levavam vidas perfeitamente ordinária. Não eram heróis escolhidos, soldados treinados ou místicos; a única característica que compartilhavam era o fato de estarem em um momento de vulnerabilidade, recolhidos ao silêncio do sono ou testemunhando um clarão inexplicável no céu noturno em suas realidades natais.",
          "Ao serem tragados pelas fendas desesperadas do Rei Apollo, suas existências foram arrancadas de suas camas e de suas linhas temporais sem qualquer aviso ou direito de escolha. O processo de travessia pelo buraco de minhoca desfez temporariamente suas percepções de carne, gravidade, tempo e fome, deixando-os flutuar em um não-lugar até despertarem abruptamente no solo de Luanda. Desorientados, e jogados em uma civilização à beira do colapso, esses humanos tornaram-se os \"Andarilhos\", ou simplesmente, \"Habitantes\" — estrangeiros cósmicos cuja missão inicial era apenas sobreviver, mas que agora carregam o destino de um mundo e a vida de seus novos filhos eternos nas mãos.",
        ],
      },
    ],
  },
  {
    id: "hierarquia",
    label: "Hierarquia - Azrael",
    pages: [
      {
        id: "hierarquia-azrael",
        title: "Hierarquia - Azrael",
        paragraphs: [
          "Ordem hierárquica do Reino das Almas, do mais baixo para o mais alto posto:",
          "Alma → Comandante → Coronel → General → Rei",
        ],
      },
      {
        id: "dusk",
        title: "Dusk (Comandante)",
        paragraphs: [
          "Nos primeiros séculos do Reino das Almas, quando Azrael ainda aprendia a moldar o vazio segundo sua própria vontade, nasceu Dusk. Não nasceu de uma vida interrompida, não carregou nunca o calor de um corpo nem a lembrança de um céu aberto. Foi tecido a partir da própria substância do Submundo, das correntes metafísicas que sustentam aquele reino, como se fosse um fragmento deliberado do rancor e da ordem que Azrael impôs ao nada.",
          "Por essa razão, Dusk não conhece a resistência que habita tantas outras almas condenadas. Aqueles que chegam ao Reino das Almas trazem consigo memórias de liberdade, e é justamente essa lembrança que as correntes de Azrael precisam sufocar. Dusk jamais teve o que perder. Sua lealdade não nasce de submissão, mas de identidade. Ele não obedece a Azrael como um servo obedece a um senhor; ele concorda com Azrael como uma sombra concorda com a escuridão que a projeta, pois são, em essência, a mesma coisa.",
          "Sua existência inteira transcorreu sob a ausência de luz própria, no silêncio absoluto que precede toda forma, e talvez por isso seu nome tenha sido escolhido com tamanha ironia pelos poucos que ousam pronunciá-lo. Dusk significa o limiar, o instante em que o dia cede lugar à noite, e ainda assim ele jamais testemunhou nem um nem outro. Conhece apenas aquilo que separa as duas coisas, o intervalo vazio onde nenhuma luz alcança e nenhuma escuridão precisa se esconder.",
          "Ascendeu à posição de comandante não por conquista, mas por afinidade natural com os princípios que regem o Submundo. Onde outros generais e comandantes precisam ser lembrados, através de tormento e punição, daquilo que devem sentir por Azrael, Dusk simplesmente sente, sem esforço, sem hesitação, sem a menor fresta de dúvida.",
          "Dusk é a entidade ancorada em Luanda. Ancorar uma entidade em terra exigia algo além de força bruta; exigia um ódio que não vacilasse diante da beleza, um espírito capaz de contemplar a harmonia daquele reino sem ser tocado por ela. Muitas almas condenadas, ao verem a paz que Luanda preservava, sentiriam o eco distante de tudo aquilo que perderam, e esse eco poderia, com o tempo, transformar-se em fraqueza. Dusk não corria esse risco, pois nunca conheceu paz alguma para sentir sua falta.",
          "Assim, ele foi enviado através das rachaduras abertas pelo ritual, guiado pelas runas malditas erguidas na torre da ilha. Ali se ancorou, não como uma alma perdida que encontra caminho de volta, mas como uma extensão deliberada do próprio Reino das Almas, implantada no coração de tudo o que Luanda representava. Onde havia vida, ele trouxe o intervalo sem luz. Onde havia som, o silêncio que precede toda ausência. Onde havia esperança, apenas o limiar frio entre o que ainda existia e o que estava prestes a deixar de existir.",
          "Para os habitantes de Luanda, o mal que os consumia não tinha rosto, não tinha voz, não tinha origem que pudessem nomear. E essa, talvez, seja a natureza mais verdadeira de Dusk: ele não precisa ser sentido para causar ruína, pois é, ele mesmo, a ausência que se instala onde antes havia tudo.",
        ],
      },
      {
        id: "shito",
        title: "Shito (General)",
        paragraphs: [
          "Nas brumas imemoriais que antecederam a derrocada do mundo, quando o alvorecer do Cataclismo começava a macular a sagrada Teia de Lumen com o sangue dos reinos de Altamar e Olímpia, forjou-se a lenda de uma alma insubmissa. Dizem os ecos dos esquecidos que, em meio à voragem dos primeiros embates que fraturaram séculos de paz, um homem tombou não com a aceitação do fim, mas com uma fúria inominável e um desejo insaciável de retaliação. Revolto diante da foice da mortalidade e sedento por vingança, este guerreiro rebelou-se na morte e partiu no encalço daquele que, no mundo encarnado, não passava de um mito sussurrado com pavor: Azrael, o antigo guardião banido que forjou do vazio o pavoroso Reino das Almas.",
          "Movido pelas promessas falaciosas de glória e de um poder incomensurável, o espírito entregou-se ao senhor do Submundo. Contudo, a dádiva de Azrael revelou-se um cálice envenenado; em vez da almejada libertação, a alma vingativa encontrou-se enredada nas inexoráveis correntes metafísicas do Inferno, que aprisionam os espíritos e lhes extinguem o livre-arbítrio. Embora o rei das sombras lhe tenha concedido uma força assombrosa, elevando-o à condição de um dos seus generais mais temíveis, este sente o peso invisível das suas amarras. O seu poder, por mais colossal que seja, palpita nas suas veias espirituais como um dom meramente emprestado por Azrael, uma chama majestosa que o limita e o acorrenta ao abismo.",
          "Hoje, essa entidade milenar e terrível caminha por entre as frestas da realidade apresentando-se sob a alcunha de Shito, tendo o seu verdadeiro nome sido apagado pelas areias do tempo. Ostentando uma natureza cinzenta e profundamente enigmática, ele paira no limiar das lealdades. Não se curva com devoção verdadeira aos desígnios opressores de Azrael, tampouco nutre qualquer centelha de simpatia por Luriel e Auriel, os divinos guardiões associados à lua e ao sol. Shito é um espectro de vontade própria, uma força formidável que, sussurram alguns, possui a capacidade latente de quebrar os seus grilhões e de se erguer como uma entidade absolutamente independente.",
          "Dotado de uma eloquência sedutora e de um intelecto afiado para a manipulação, Shito é um arquiteto da perdição alheia. A sua voz, macia como a seda e letal como a peçonha, é capaz de ludibriar as mentes mais resolutas, guiando incautos por atalhos de trevas e induzindo-os a trilhar caminhos nefastos ou a cometer atrocidades inomináveis. Ele extrai um deleite lúgubre ao atormentar toda a criação e ao semear a discórdia, não se sabendo ao certo qual a causa que verdadeiramente defende. Resta apenas ao mundo a certeza de que a sua força extraordinária, ainda que pareça usurpada das mãos de Azrael, reverbera com a promessa lúgubre de um dia se converter na sua própria e indomável tempestade.",
        ],
      },
      {
        id: "florence-delcroix",
        title: "Florence Del'Croix (General)",
        paragraphs: [
          "Florence nasceu em Altamar num tempo em que já não havia infância fácil para ninguém. O Cataclismo, ainda em seus séculos intermediários, tinha reduzido a cidade a um lugar onde as pessoas discutiam colheitas e mantimentos com a mesma urgência com que outrora discutiam filosofia. Cresceu, portanto, ouvindo disputas sobre terra, sobre comida, sobre quem tinha direito a quê num mundo que já não tinha o suficiente para ninguém. E foi ali, ouvindo essas discussões desde cedo, que nasceu nele uma ideia que jamais o abandonaria: a de que ele próprio era, por natureza, um homem justo.",
          "Não tinha formação alguma. Nunca estudou lei, nunca serviu a tribunal, nunca foi reconhecido por autoridade nenhuma como algo além de um cidadão comum. Ainda assim, gostava de se colocar entre vizinhos em conflito, de mediar pequenas disputas de mercado, de anunciar veredictos que ninguém lhe havia pedido, sempre com a convicção tranquila de quem acredita profundamente na própria integridade. As pessoas o toleravam. Poucas o respeitavam de fato, mas Florence nunca percebeu a diferença entre as duas coisas, porque nunca quis perceber. Era mais confortável acreditar se justo do que examinar, com qualquer honestidade, o que realmente era.",
          "O que realmente era, na prática cotidiana de sua vida, era um homem que vivia sempre à beira da ruína. Não por falta de trabalho ou de oportunidade, mas por um vício que o acompanhava desde a juventude e que nunca conseguiu, ou quis, abandonar: o jogo. Dados, cartas, apostas em qualquer disputa que oferecesse a promessa de sorte. Perdia, quase sempre, o suficiente para nunca sobrar nada, e cada perda era seguida de uma nova aposta, na esperança silenciosa de que a próxima rodada corrigisse a anterior.",
          "Havia, porém, uma exceção. Em algum momento de tédio e necessidade, Florence criou um jogo próprio, um baralho de sua própria invenção, ao qual deu o nome de C'lart. E nesse jogo, ao contrário de todos os outros, ele quase sempre vencia. Não sabia por quê. Nunca soube, de fato, que a estrutura das próprias regras que criara favorecia, por acidente e não por desígnio, a pessoa que distribuía as cartas, posição que ele mesmo ocupava em praticamente toda partida que jogava. Preferiu, como preferia em quase tudo, uma explicação mais confortável do que a verdade: que havia algo abençoando aquelas cartas, e que essa bênção, por algum motivo que nunca questionou, recaía sobre ele. Passou a consultar o próprio baralho antes de decisões importantes, a interpretar vitórias como sinais e derrotas raras como avisos, tratando C'lart menos como entretenimento e mais como uma espécie de divindade doméstica e pessoal, testemunha silenciosa e favorável de sua existência.",
          "Essa mesma fé cega, em si mesmo, na própria sorte, na própria bondade, foi o que o levou à morte. Nos últimos e mais desesperados anos do Cataclismo, quando a fome e o medo já haviam corroído toda esperança racional em Altamar, começaram a surgir pequenos grupos fanáticos que passaram a venerar Azrael não como o tirano banido que de fato era, mas como um salvador ainda por vir, capaz de impor ordem onde os guardiões haviam falhado. Florence, fiel à própria vaidade, não levou esses grupos a sério. Discutia com eles nas praças, convencido de que sua justiça pessoal e sua eloquência de sempre bastariam para desmontar qualquer fanatismo com bons argumentos. Nunca entendeu que a fé, quando já não tem mais nada a perder, não se deixa convencer por palavras.",
          "Foi um erro fatal. Um desses grupos o capturou numa noite sem aviso, arrastando-o para fora da cidade sob a acusação, nunca provada, nunca sequer bem articulada, de que ele era um herege que insultava o nome do Rei que viria salvá-los. Desenharam um pentagrama no chão, com sangue misturado a cinzas rituais, e o queimaram vivo no centro dele, entoando orações a um Azrael que jamais soube, e jamais se importaria, que aquilo estava sendo feito em seu nome. Florence morreu gritando, não apenas de dor, mas de indignação, com a certeza, até o último instante, de que aquilo era profundamente injusto, e de que ele, entre todos os homens, não merecia aquele fim.",
          "Ao morrer daquela forma, em nome de Azrael, dentro de um ritual voltado a ele, Florence foi automaticamente acorrentado ao Reino das Almas, sem julgamento, sem escolha, sem a passagem gradual que outras almas costumam atravessar. Foi arrastado direto às correntes do Rei do Submundo, a única coisa que ele jamais desejou em vida ou em morte.",
          "Foi ali, nos primeiros instantes daquela existência que passaria a odiar para sempre, que tudo mudou. Azrael não precisou de muito tempo com ele. Observou Florence gritar sobre injustiça, sobre merecimento, sobre a fé cega dos homens que o haviam matado, e viu, em segundos, algo que nem o próprio Florence sabia possuir: a capacidade de ler exatamente o que uma pessoa mais teme perder, disfarçada a vida inteira sob a máscara de um homem que se achava justo e sortudo. Azrael reconheceu ali um manipulador nato, que nunca havia precisado de talento consciente para funcionar, porque manipulava a si mesmo havia anos, convencendo-se da própria integridade enquanto vivia de vícios e ilusões.",
          "Não houve promoção. Houve sentença. Azrael o elevou à patente de General nos primeiros dias, sem que Florence passasse por Alma, Comandante ou Coronel, não como honraria, mas como conveniência: um instrumento afiado demais para ser desperdiçado em trabalho braçal. Deu-lhe uma função clara, fechar acordos e manipular vontades em nome do Submundo, e uma condição implícita, nunca dita em voz alta, mas sempre presente: continuar sendo útil, ou deixar de existir.",
          "Florence passou a odiar o Reino das Almas. Passou a odiar Azrael. Odiava, mais do que tudo, ser bom naquilo que fazia, porque cada acordo bem-sucedido era prova viva de que a habilidade sempre estivera nele, escondida atrás da fé cega que sempre teve em si mesmo. Continuou fazendo o trabalho não por lealdade, não por adaptação, mas puramente porque a alternativa, ser apagado da existência, deixar de ser sequer uma memória, era a única coisa que temia mais do que a própria função que passou a desprezar.",
          "Foi então que Florence morreu de fato, pela segunda vez. E Del'Croix nasceu, não como mercador astuto que escolheu esse caminho, mas como prisioneiro do próprio talento, obrigado a repetir para sempre, com outras pessoas, o mesmo erro de confiar demais na própria sorte e na própria bondade.",
          "Sozinho, Del'Croix é quase nada. Não tem força física digna de nota, não maneja a Teia, não possui telecinesia nem qualquer poder que lhe pertença por direito próprio. É, em sua essência mais verdadeira, um espírito vazio, dependente inteiramente daquilo que os outros lhe entregam. Foi essa fraqueza que Azrael explorou ao lhe dar a função de fechar acordos, pois cada pacto aceito livremente por uma pessoa deixa nele um fio da vontade que essa pessoa entregou. Não é poder emprestado por Azrael, é vontade alheia genuína, capturada no exato instante em que alguém diz sim sem ser forçado. Quanto mais pactos ativos ele carrega, mais fios possui, e mais forte, mais pesada, mais difícil de ignorar se torna sua presença.",
          "Mas é apenas no momento da cobrança que sua fraqueza natural se inverte por completo. Ao cobrar o preço de um acordo, Del'Croix não usa força própria, pois não tem nenhuma. Ele canaliza, por um breve instante, a natureza exata daquilo que a pessoa entregou em troca. Se alguém pagou com uma vida inteira de bondade genuína, ele empunha, por aquele momento, o peso equivalente dessa bondade transformada em dívida, e se o preço for grande o suficiente, pode brevemente deter um poder próximo do ilimitado, pois não é ele quem gera essa força. É a soma exata do que foi prometido, descarregada de uma só vez através dele.",
          "E é exatamente por isso que ele nunca revela os preços antes de um acordo se fechar. Chama seu sistema de precificação de Escala de C'lart, em homenagem ao próprio jogo que inventou em vida e que ainda carrega consigo, agora um baralho que não é mais feito de papel, mas de algo mais próximo de sombra condensada. Trata o jogo quase como divindade pessoal, um oráculo cujo veredito ele apenas transmite, nunca escolhe. Antes de qualquer pacto, consulta as cartas em segredo, um pequeno ritual quase supersticioso que ninguém jamais o viu completar até o fim.",
          "A lógica da Escala é simples e cruel. Quanto mais bondade genuína uma pessoa acumulou em vida, quanto mais deu, sacrificou, ajudou sem esperar nada em troca, maior o preço que pagará por um acordo com Del'Croix. Ele insiste, sempre que alguém ousa questionar, que isso não é punição à virtude, mas prova. Só quem tem muito a perder, ao concordar em perdê-lo mesmo assim, demonstra o quanto realmente deseja o que está pedindo. Um homem sem nada a oferecer não prova nada ao entregar o nada que tem. Um homem bom que entrega parte da própria bondade revela o tamanho verdadeiro do próprio desejo.",
          "Del'Croix acredita nisso com uma convicção quase religiosa, a mesma que tinha em vida ao interpretar vitórias no baralho como sinais de uma ordem benevolente cuidando dele. Nunca parou para considerar, ou talvez nunca tenha tido coragem de considerar, que talvez não exista Escala alguma. Que talvez os preços que impõe sejam decisões suas, disfarçadas sob a autoridade confortável de um jogo que ele mesmo inventou, mal desenhado, e que sempre favoreceu quem distribuía as cartas. Revelar o preço antes do sim significaria admitir, a si mesmo antes de qualquer outra pessoa, que talvez seja ele, e não C'lart, quem decide o quanto alguém deve perder. E Florence, mesmo depois de tudo o que viveu e tudo o que se tornou, ainda não consegue viver, nem morrer, sabendo que nunca foi tão justo quanto sempre se achou.",
          "Hoje ninguém no Submundo o chama pelo primeiro nome, nem mesmo Azrael, embora seja o único que saiba de onde ele veio. Del'Croix nunca o pronuncia. Apresenta-se sempre e apenas pelo sobrenome, como se Florence fosse alguém que morreu de fato na fogueira, e não apenas anos depois, diante das correntes de um rei que ele jamais quis servir.",
        ],
      },
    ],
  },
  {
    id: "lendas",
    label: "Lendas / Folclore",
    pages: [
      {
        id: "no-canonical",
        title: "Nota: Não Canonical",
        paragraphs: [
          "As histórias desta categoria são classificadas como \"No Canonical\" (NC) — ou seja, não impactam diretamente na lore principal de Lumen. São contos de folclore transmitidos entre os habitantes do mundo.",
        ],
      },
      {
        id: "meow",
        title: "Meow",
        paragraphs: [
          "Antes de Altamar e Olímpia, antes mesmo da paz que se contaria depois em séculos, Lumen já era velho. E Meow é mais velho que o nome de qualquer reino que já existiu ali. Ninguém sabe dizer ao certo quando ele viveu — se viveu como homem, como fera, ou como algo que ainda não tinha nome para se descrever. O que se sabe é que ele morreu há tanto tempo que os guardiões que hoje velam sobre Lumen, Auriel e Luriel, já eram velhos quando a alma dele ainda cruzava a Teia à procura de um lugar para descansar. E não descansou.",
          "Por que não seguiu adiante, nenhuma lenda explica igual. Alguns dizem que era teimosia. Outros, que ele viu demais do mundo para deixá-lo. O fato é que, em algum momento perdido nas eras, essa alma antiga escolheu — ou foi condenada, ninguém sabe — a forma de um gato preto, e assim atravessa os séculos, reencarnando ou simplesmente persistindo, ninguém tem certeza de qual das duas.",
          "O que restou de tanto tempo vivo é uma língua afiada e paciência zero. Meow fala como quem já viu esse mesmo erro ser cometido mil vezes antes — porque viu. É sarcástico, grosso, debocha de tudo e de todos, trata reis e mendigos com o mesmo desdém. Mas por baixo disso entende a Teia como ninguém mais vivo entende, porque ele estava lá quando ela ainda não tinha nome, quando os primeiros Tecedores ainda tateavam no escuro tentando entender o que sentiam nas pontas dos dedos. Ele não estudou magia. Ele lembra dela.",
          "E apesar de fingir que não se importa com nada, sempre acaba ajudando — corrige um feitiço errado antes que mate alguém, resolve uma maldição que levaria semanas para ser desfeita, aparece bem na hora que alguém precisa e some antes que possam agradecer. Diz que é só para \"não ver o mundo desmoronar de novo por burrice\", mas ninguém acredita muito nisso.",
          "Celine já tentou, por mais de uma vez, arrancar dele quem foi antes de ser Meow. Nunca conseguiu nada além de riso e deboche. Barnabé, mais cauteloso, suspeita que a resposta é simples demais para ser dita em voz alta: Meow não esqueceu quem foi. Só decidiu, há muito tempo, que não interessa mais.",
        ],
      },
    ],
  },
],
}

export function loadData(): SiteData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return structuredClone(defaultData)
    const parsed = JSON.parse(raw)
    // merge simples para garantir que campos novos existam mesmo em dados antigos salvos
    return { ...structuredClone(defaultData), ...parsed }
  } catch {
    return structuredClone(defaultData)
  }
}

export function saveData(data: SiteData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  // avisa outras partes da mesma aba que os dados mudaram
  window.dispatchEvent(new Event("lumen-data-updated"))
}

export function resetData() {
  localStorage.removeItem(STORAGE_KEY)
  window.dispatchEvent(new Event("lumen-data-updated"))
}

// Hook simples para componentes reagirem a mudanças nos dados
import { useEffect, useState } from "react"

export function useSiteData() {
  const [data, setData] = useState<SiteData>(loadData)

  useEffect(() => {
    const handler = () => setData(loadData())
    window.addEventListener("lumen-data-updated", handler)
    window.addEventListener("storage", handler)
    return () => {
      window.removeEventListener("lumen-data-updated", handler)
      window.removeEventListener("storage", handler)
    }
  }, [])

  return data
}

// --- Auth simples do dashboard ---
const AUTH_KEY = "lumen-dashboard-auth"
const AUTH_USER_KEY = "lumen-dashboard-user"

interface AccountDef {
  user: string
  pass: string
  // usuários com permissão para editar a lore
  canEditLore: boolean
}

const ACCOUNTS: AccountDef[] = [
  { user: "admin", pass: "LumenSMP#123", canEditLore: false },
  { user: "Digo", pass: "Eskema19*", canEditLore: true },
]

export function login(user: string, pass: string): boolean {
  const account = ACCOUNTS.find((a) => a.user === user && a.pass === pass)
  if (account) {
    sessionStorage.setItem(AUTH_KEY, "1")
    sessionStorage.setItem(AUTH_USER_KEY, account.user)
    return true
  }
  return false
}

export function isAuthenticated(): boolean {
  return sessionStorage.getItem(AUTH_KEY) === "1"
}

export function getCurrentUser(): string | null {
  return sessionStorage.getItem(AUTH_USER_KEY)
}

export function canEditLore(): boolean {
  const user = getCurrentUser()
  const account = ACCOUNTS.find((a) => a.user === user)
  return account?.canEditLore ?? false
}

export function logout() {
  sessionStorage.removeItem(AUTH_KEY)
  sessionStorage.removeItem(AUTH_USER_KEY)
}
