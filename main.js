let  = document.getElementById('container')
let input = document.getElementById('input')
let inputBx = document.getElementById('inputBx')
let button = document.getElementById('btn')
let list = document.getElementById('list')
let total = document.getElementById('total')
let count = 0


button.addEventListener('click', () => {
  if (input.value === '') return
  createDeleteButton(input.value)
  input.value = ''
  updateTotal()
})


function createDeleteButton(value) {
  console.log(value)
  const div = document.createElement("div")
  const btn = document.createElement('button')
  const deleteButton = document.createElement('button')
  const li = document.createElement('li')

  li.className = 'li'
  li.textContent = value

  div.className = "containerBtn"

  btn.className = 'btn'
  btn.textContent = 'done'


  deleteButton.textContent = 'delete'


  btn.addEventListener('click', () => {
    li.classList.toggle('done')
    
  })

  deleteButton.addEventListener('click', () => {
    list.removeChild(li)
    count--
    updateTotal()
  })
  count++
  updateTotal()
  list.appendChild(li)
  div.appendChild(btn)
  div.appendChild(deleteButton)
  li.append(div)
}


  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
      todos.slice(0, 11).forEach(todo => {
        createDeleteButton(todo.title)
      });
    })

  function updateTotal() {
    total.textContent = `${count}`
  }



