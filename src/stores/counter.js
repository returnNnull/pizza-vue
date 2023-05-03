import {ref, computed, reactive} from 'vue'
import { defineStore } from 'pinia'

export const basket = defineStore('basket', () => {

  const products_list = reactive(new Set(JSON.parse(window.localStorage.getItem('basket-items')) || []))
  const size = ref(products_list.size)
  const summary = ref(parseInt(window.localStorage.getItem('sum')) || 0)


  function addItem(item, additives){
    products_list.add({
      item: item,
      additives: additives
    })
    this.size++
    summary.value += item.price + _calcAdditivesSum(additives)
    _saveLocal()
  }
  function remove(item){
    for (let i = 0; i < products_list.size; i++) {
      if(products_list[i].item.id === item.id){
        summary.value -= products_list[i].item.price + _calcAdditivesSum(products_list[i].additives)
        products_list.delete(products_list[i])
        this.size --;
        _saveLocal()
      }
    }
  }

  function _calcAdditivesSum(additives){
    let result = 0;
    for (let i = 0; i < additives.length; i++) {
      result += additives[i].price
    }
    return result
  }

  function clear(){
    products_list.clear()
    summary.value = 0
    size.value = 0
    _saveLocal()
  }

  function deleteAdditive(id, index){
    const values = products_list[index].additives

    for (let i = 0; i < values.length; i++) {
      if (values[i].id === id){
        products_list[index].additives = values.splice(i, 1)
        _saveLocal()
      }
    }

  }

  function _saveLocal(){
    window.localStorage.setItem("basket-items", JSON.stringify(Array.from(products_list)))
    window.localStorage.setItem("sum", JSON.stringify(summary.value))
  }

  return {list: products_list, size, addItem, remove, summary, clear, deleteAdditive}
})

