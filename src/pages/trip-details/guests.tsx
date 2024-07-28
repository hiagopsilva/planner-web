import { CircleDashed, UserCog } from 'lucide-react'

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>

      <div className="space-y-5">
        {[
          { name: 'Hiago Prates', email: 'hiago@gmail.com' },
          { name: 'Daniella Prates', email: 'daniella@gmail.com' },
        ].map((item, index) => (
          <div key={index} className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">
                {item.name}
              </span>

              <a
                href="#"
                className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
              >
                {item.email}
              </a>
            </div>
            <CircleDashed className="size-5 text-zinc-400 shrink-0" />
          </div>
        ))}
      </div>

      <button className=" bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700">
        <UserCog className="size-5" />
        Gerenciar convidados
      </button>
    </div>
  )
}
