import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Layout } from './components/Layout'
import { WelcomePage } from './pages/WelcomePage'
import { HistoriaPage } from './pages/HistoriaPage'
import { DiretrizesPage } from './pages/DiretrizesPage'
import { FAQPage } from './pages/FAQPage'
import { ItensBanidosPage } from './pages/ItensBanidosPage'
import { RedesSociaisPage } from './pages/RedesSociaisPage'
import { CriacaoPersonagemPage } from './pages/CriacaoPersonagemPage'
import { FormulariosPage } from './pages/FormulariosPage'
import { DefinicoesPage } from './pages/DefinicoesPage'
import { DownloadModpackPage } from './pages/DownloadPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/principal/lore" element={<HistoriaPage />} />
            <Route path="/principal/diretrizes" element={<DiretrizesPage />} />
            <Route path="/principal/faq" element={<FAQPage />} />
            <Route path="/principal/definicoes" element={<DefinicoesPage />} />
            <Route path="/principal/itens-banidos" element={<ItensBanidosPage />} />
            <Route path="/principal/redes-sociais" element={<RedesSociaisPage />} />
            <Route path="/principal/criacao-de-personagem" element={<CriacaoPersonagemPage />} />
            <Route path="/inscricao/formularios" element={<FormulariosPage />} />
            <Route path="/modpack/download" element={<DownloadModpackPage />} />
          </Routes>
        </Layout>
        <Footer />
      </div>
    </Router>
  )
}

export default App
