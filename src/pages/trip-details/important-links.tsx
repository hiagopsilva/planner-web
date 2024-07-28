import { Link2, Plus } from 'lucide-react'
import { Button } from '../../components/button'

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>

      <div className="space-y-5">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">
                Reserva do AirBnb {index + 1}
              </span>

              <a
                href="#"
                className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
              >
                http://localhost:3000/3213213123123123123123213123213213213312321321312
              </a>
            </div>
            <Link2 className="size-5 text-zinc-400 shrink-0" />
          </div>
        ))}
      </div>

      <Button variant="secondary" size="full">
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
    </div>
  )
}
