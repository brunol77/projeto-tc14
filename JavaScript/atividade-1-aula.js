
// dados da base
const senha = 'minhasenha'
const email = 'brunol77@gmail.com'
const permissao = true
const id = 1234

// dados do usuario
let senhaUsuario = 'minhasenha'
let emailUsuario = 'brunol7@gmail.com'
let idUsuario = 12345
let permissaousuario = false

if(emailUsuario === email && idUsuario === id) {
    console.log('Deseja mudar a senha?')
} else {
    console.log('Usuario sem permissão!')
};

if(senha === senhaUsuario && email === emailUsuario) {
    console.log('Por favor, insira sua nova senha')
} else {
    console.log('Usuario / Senha incorretos')
};

if(permissao === permissaousuario) {
    console.log('Bem vindo à área de administrador')
} else {
    console.log('Você não pode acessar essa parte do sistema')
};
