const list = document.querySelectorAll('.list')
const nav = document.getElementById('navigation')
list.forEach(item => item.addEventListener('click', function (e) {
    list.forEach(li => li.classList.remove('active'))
    console.log(e.currentTarget)
    e.currentTarget.classList.add('active')
}))