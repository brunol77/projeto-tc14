// adicionar cores no H2

const h2 = document.querySelector('h2')
h2.style.color = 'blue'
h2.style.fontSize = '30px'

// colocar erro no usuario

// const userName = document.querySelector('input')
// userName.classList.add('error')

// const p = document.querySelectorAll('.error.text')[0]
// p.classList.add('visible')


// colocar erro na senha

const userName = document.querySelector('#login-usuario')
userName.classList.remove('error')

const p = document.querySelectorAll('.error-text')[0]
p.classList.remove('visible')

const userSenha = document.querySelector('#login-senha')
userSenha.classList.add('error')

const erro = document.querySelectorAll('.error-text')[1]
erro.classList.add('visible')

const correct = document.querySelector('#login-usuario')
correct.classList.add('correct')


