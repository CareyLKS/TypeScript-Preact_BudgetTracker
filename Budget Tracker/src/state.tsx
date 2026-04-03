import './app.css'

export type SItem={
  name: string,
  price: number,
  Cat: string,
  date: string,
}
export const ItemL:SItem[]=[]
export let total = 0

export function addNewItem(item: SItem) {
  ItemL.push(item);
  total += item.price
}
