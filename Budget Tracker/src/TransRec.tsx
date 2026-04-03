import './app.css'
import type { SItem } from './state'

type TransRecProps = {
  records: SItem[]
}

export function TransRec({ records }: TransRecProps) {

  return (
    <div class="bg-gray-900 m-1 w-screen px-4 py-3">
      <p class="text-white">There are {records.length} record(s)</p>
      <div class="mt-2 text-white text-sm space-y-1">
        {records.map((item, index) => (
          <p key={`${item.date}-${item.name}-${index}`}>
            {index+1}.  {item.date} | {item.name} | {item.Cat} | ${item.price}
          </p>
        ))}
      </div>
    </div>
  )
}
