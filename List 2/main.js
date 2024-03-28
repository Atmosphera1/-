const shoppingListApp = Vue.createApp({
      data() {
        return {
          header: 'Shopping List App',
          editing:false,
          newItem: '',
          newItemHighPriority: false,
          items:[
            {id: 1, label:'Приготовить завтрак.', purchased: true, highPriority: false},
            {id: 2, label:'Позвонить родителям.', purchased: true, highPriority: false},
            {id: 3, label:'Проверить электронную почту.', purchased: false, highPriority: true},
          ]
        }
      },
      computed:{
        reversedItems(){
          return [...this.items].reverse()
        }
      },
      methods:{
        saveItem(){
          this.items.push({
            id:this.items.length + 1, 
            label: this.newItem,
            highPriority: this.newItemHighPriority
          })
          this.newItem = ""
          this.newItemHighPriority = false
        },
       
        doEdit(editing){
          this.editing = editing
          this.newItem = ""
          this.newItemHighPriority = false
        },
        togglePurchased(item){
          item.purchased = !item.purchased
        },
        deleteItem(item){
            const index = this.items.indexOf(item);
            if (index > -1) {
                this.items.splice(index, 1);
            }
        } 
      }
    }).mount('#shopping-list')