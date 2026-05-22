import { FolderCode } from 'lucide-react'
export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 px-4 py-4">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FolderCode className="w-4 h-4" />
            <span>Desenvolvido por LegionLabs</span>
          </div>
        </div>
      </div>
    </footer>
  )
}