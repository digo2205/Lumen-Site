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
const ADMIN_USER = "admin"
const ADMIN_PASS = "LumenSMP#123"

export function login(user: string, pass: string): boolean {
  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    sessionStorage.setItem(AUTH_KEY, "1")
    return true
  }
  return false
}

export function isAuthenticated(): boolean {
  return sessionStorage.getItem(AUTH_KEY) === "1"
}

export function logout() {
  sessionStorage.removeItem(AUTH_KEY)
}
