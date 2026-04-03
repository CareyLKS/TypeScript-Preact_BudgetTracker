import './app.css'

type TopProps = {
  total: number
}

export function Top({ total }: TopProps) {

  return (
    <div class="bg-gray-700 w-screen px-4 py-3 flex items-center justify-between">
      <p class="text-2xl font-bold text-white">Budget Tracker</p>
      <div class="flex gap-4">
        <button class="w-fit p-1 border-2 bg-gray-500 hover:bg-gray-400">Input Form</button>
        <button class="w-fit p-1 border-2 bg-gray-500 hover:bg-gray-400">Review List</button>
        <p class="text-white text-2xl">Current Spending: {total} </p>
      </div>
    </div>
  )
}
