import { Search, Command } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'

export function Header() {
  return (
    <header className="border-b border-gray-800 bg-gray-950 px-4 py-3">
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-3">
          <img 
            src="https://i.imgur.com/8P5yAVy.png"
            alt="Lumen"
            className="w-8 h-8 rounded"
          />
          <span className="font-semibold text-gray-100">LumenSMP</span>
        </div>
      </div>
    </header>
  )
}