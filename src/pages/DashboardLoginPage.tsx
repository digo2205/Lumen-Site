import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Lock } from 'lucide-react'
import { login } from '../lib/store'

export function DashboardLoginPage() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (login(user, pass)) {
      navigate('/dashboard/painel')
    } else {
      setError('Usuário ou senha incorretos.')
    }
  }

  return (
    <div className="max-w-screen-2xl py-16 px-8 flex justify-center">
      <Card className="p-8 w-full max-w-sm border border-border bg-card">
        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
            <Lock className="w-5 h-5 text-muted-foreground" />
          </div>
          <h1 className="text-xl font-bold text-foreground">Dashboard Lumen</h1>
          <p className="text-sm text-muted-foreground">Acesso restrito à administração</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">Usuário</label>
            <Input value={user} onChange={(e) => setUser(e.target.value)} autoFocus />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">Senha</label>
            <Input type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <Button type="submit" className="w-full">Entrar</Button>
        </form>
      </Card>
    </div>
  )
}
