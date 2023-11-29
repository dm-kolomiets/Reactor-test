"use strict"

// focus
const inputItems = document.querySelectorAll('.input__item')

inputItems.forEach(function (item) {
    let input = item.querySelector('input')

    input.addEventListener('focus', () => item.classList.add('active'))

    input.addEventListener('blur', function () {
        if (input.value === '') item.classList.remove('active')
    })
})

// validation
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('Form')
    const inputFields = form.querySelectorAll('input')

    inputFields.forEach(function (input) {
        input.addEventListener('focus', () => input.parentNode.classList.remove('invalid'))

        input.addEventListener('blur', () => validateField(input))
    })

    form.addEventListener('submit', function (event) {
        event.preventDefault()
        validateForm()
    })
})

function validateField(input) {
    const value = input.value.trim()
    const label = input.parentNode

    if (value === '' || (input.type === 'email' && !isValidEmail(value))) label.classList.add('invalid')
    else label.classList.remove('invalid')
}

function validateForm() {
    const form = document.getElementById('Form')
    const inputFields = form.querySelectorAll('input')

    inputFields.forEach(input => validateField(input))
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}
