import './app.css'
import { useState } from 'preact/hooks'
import { Top } from './Top'
import { InputForm } from './InputForm'
import { TransRec } from './TransRec'
import type { SItem } from './state'

export function App() {
  const [total, setTotal] = useState(0)
  const [records, setRecords] = useState<SItem[]>([])

  const handleItemAdded = (item: SItem) => {
    setTotal((prev) => prev + item.price)
    setRecords((prev) => [...prev, item])
  }

  return (
    <div class="bg-blue-950 w-screen h-screen">
      <Top total={total} />
      <InputForm onItemAdded={handleItemAdded} />
      <TransRec records={records} />
    </div>
  )
}
