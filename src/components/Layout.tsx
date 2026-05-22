import { useState } from 'react'
import { Sidebar } from './Sidebar'

export function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen">
      {/* Sidebar desktop */}
      <div className="hidden md:flex md:flex-col md:w-64">
        <Sidebar />
      </div>

      {/* Sidebar mobile */}
      <div
        className={`fixed inset-0 z-50 flex transition-opacity duration-300 ${
          sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setSidebarOpen(false)}
        />

        {/* Sidebar encostada na esquerda */}
        <div className="relative w-60 h-full flex flex-col bg-white left-0">

          {/* Botão Fechar dentro da sidebar */}
          <button
            className="w-full px-4 py-3 bg-gray-200 rounded-r-full shadow-sm hover:bg-gray-300 transition-colors z-50"
            onClick={() => setSidebarOpen(false)}
          >
            Fechar
          </button>
          <Sidebar mobile />
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="flex-1 p-4 md:p-8">
        {/* Botão menu mobile */}
        <button
          className="md:hidden mb-4 px-3 py-2 bg-gray-200 rounded-full shadow-sm hover:bg-gray-300 transition-colors"
          onClick={() => setSidebarOpen(true)}
        >
          Menu
        </button>
        {children}
      </div>
    </div>
  )
}
