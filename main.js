const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')

btn.addEventListener('click', (e) =>{
    //result.innerHTML += `<li>${input.value}</li>`
    if(input.value === '') return
    createDeleteElements(input.value)
})
//добавить и удалить todo
function createDeleteElements(value){
    console.log(value)
    
    const li = document.createElement('li')
    li.className = 'li'
    li.textContent = value
    
    const btn = document.createElement('button')
    btn.className = 'btn'
    btn.textContent = 'Del'
    li.appendChild(btn)
    
    // remove todo
    btn.addEventListener('click', e =>{
        result.removeChild(li)
    })
    
    result.appendChild(li)
    
}