
const rates = document.querySelectorAll('[data-number]')
const submit = document.querySelector('.submit')
const card1 = document.querySelector('.card1')
const card2 = document.querySelector('.card2')
const result = document.getElementById('nb')

submit.addEventListener('click', () =>{
    card1.style.display = 'none'
    card2.classList.remove('hidden')
})

rates.forEach((rate) => {
    rate.addEventListener('click', () =>{
        result.innerHTML = rate.innerHTML;
    })
})
