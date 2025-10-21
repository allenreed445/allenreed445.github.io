const hours = new Date().getHours() 

const isMorning = hours >= 4 && hours < 12 
const isAfternoon = hours >= 12 && hours < 17 
const isEvening = hours >= 17 || hours < 4 

let welcomeMessage = ''

if (isMorning) {welcomeMessage = 'Good Morning!'}
if (isAfternoon) {welcomeMessage = 'Good Afternoon!'}   
if (isEvening) {welcomeMessage = 'Good Evening!'}

document.querySelector('#welcome').textContent = welcomeMessage 

localStorage.setItem("It's a secret to everybody.", "You gained 5 rupees!")

console.log(localStorage.getItem("It's a secret to everybody."))

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

const prevButton = document.querySelector('#prev')
const nextButton = document.querySelector('#next')  

nextButton.addEventListener('click', () => {
    currentImage++
    showImages()
})

prevButton.addEventListener('click', () => {
    currentImage--
    showImages()
})

setInterval(() => {
    currentImage++
    showImages()
}, 5000)

const todoList = document.querySelector('#todo-list')
const input = document.querySelector('#todo-input')
const addButton = document.querySelector('#add-todo')

const todos = JSON.parse(localStorage.getItem('todo-list')) || []

if (input && (input.value || '').trim() !== '') {
  todos.push({ text: input.value.trim(), completed: false })
  localStorage.setItem('todo-list', JSON.stringify(todos))
}

todoList.innerHTML = ''

const todo = JSON.parse(localStorage.getItem('todo-list')) || []

if (todo && !Array.isArray(todo) && todo.text) {
  const li = document.createElement('li')
  li.textContent = todo.text
  todoList.append(li)
}

const addTodos = () => {
  todoList.innerHTML = ''
  todos.map((todo) => {
    const li = document.createElement('li')
    li.classList.add('todo')           
    li.textContent = todo.text
    todoList.append(li)
  })
}

addButton.addEventListener('click', () => {
  const text = (input.value || '').trim()
  if (text === '') return

  todos.push({ text: text, completed: false })
  localStorage.setItem('todo-list', JSON.stringify(todos))
  input.value = ''
  addTodos()
})

addTodos()