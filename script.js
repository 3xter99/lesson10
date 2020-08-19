const container = document.querySelector('.books')
const books = document.querySelectorAll('.book')
const adb = document.querySelector('.adv')
const body = document.querySelector('body')
const hyperlink = document.querySelectorAll('a')
const book5 = books[5].querySelectorAll('li')
const book2 = books[0].querySelectorAll('li')
const book6 = books[2].querySelectorAll('li')


books[1].after(books[0])
books[0].after(books[4])
container.append(books[2])

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)'

hyperlink[4].textContent = 'Получится - "Книга 3. this и Прототипы Объектов'

adb.remove()

book5[3].before(book5[9])
book5[4].after(book5[2])
book5[7].after(book5[5])

book2[3].after(book2[6])
book2[4].before(book2[8])
book2[10].before(book2[2])

book6[8].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>')
