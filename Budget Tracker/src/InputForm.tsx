import './app.css'
import { useState, useEffect } from 'preact/hooks'
import * as ML from "./state"
import type { SItem } from './state'

type InputFormProps = {
  onItemAdded: (item: SItem) => void
}

export function InputForm({onItemAdded}:InputFormProps) {
  const [pr, setPr] = useState('')
  const [sDate, setDate] = useState('')
  const [cat, setCat] = useState('Food')
  const [name, setName] = useState('')

  const handleChooseDate = (event: Event) => {
    const tar=event.target as HTMLInputElement
    setDate(tar.value)
    console.log(`Selected date: ${tar.value}`)
  }

  const handelPriceInput = (event: Event) => {
    const tar = event.target as HTMLInputElement
    setPr(tar.value)
  }

  const handleCatInput = (event: Event) => {
    const tar=event.target as HTMLSelectElement
    setCat(tar.value)
  }

  const handelNameInput = (event: Event) => {
    const tar=event.target as HTMLInputElement
    setName(tar.value)
  }

  const handleAddItem=()=>{
    const pv = Number(pr)
    if (pr=="" || name=="" || sDate=="") {
      alert("Please fill in all details");
      return;
    }
    else if (pv<0) alert("Refund detected");
    const newItem: SItem = {
      name,
      price: pv,
      Cat: cat,
      date: sDate,
    }

    ML.addNewItem(newItem)
    onItemAdded(newItem)
    console.log("New Item recorded");
    setPr('')
    setDate('')
    setCat('Food')
    setName('')
    
  }

  useEffect(()=>{
    console.log("Something updated");
  },[])

  return (
    <div class="bg-gray-900 w-screen m-1 h-fit px-4 py-3 flex items-center gap-3">
      <label for="date-input" class="text-white">Date:</label>
      <input
        id="date-input"
        class="date-input bg-gray-500 text-black px-2 py-1 border
         border-gray-400 hover:bg-gray-300"
        type="date"
        value={sDate}
        onChange={handleChooseDate}
      />
      <label for="price-input" class="text-white">Value:</label>
      <input
        id="price-input"
        class="price-input bg-gray-500 w-fit text-black px-2 py-1 border
         border-gray-400 hover:bg-gray-400"
         type="number"
         value={pr}
         onChange={handelPriceInput}
      />
      <label for="cat-input" class="text-white">Category:</label>
      <select
        id="cat-input"
        class="cat-input bg-gray-500 w-fit text-black px-2 py-1 border
         border-gray-400 hover:bg-gray-400"
        value={cat}
        onChange={handleCatInput}
      >
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Other">Other</option>
      </select>

      <label for="name-input" class="text-white">Name:</label>
      <input
        id="name-input"
        class="name-input bg-gray-500 w-fit text-black px-2 py-1 border
         border-gray-400 hover:bg-gray-400"
         type="text"
         value={name}
         onChange={handelNameInput}
      />
      <button
        class="bg-blue-900 w-fit text-black px-2 py-1 border border-gray-400 hover:bg-blue-400"
        onClick={handleAddItem}
      >
        Submit!!
      </button>
    </div>
  )
}
