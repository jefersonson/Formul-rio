function validaFormulario(){
    const nome=document.getElementById("nome").value;
const email= document.querySelector("#email").value;
const senha= document.getElementById("senha").value;
console.log(senha)

//validção de campos vazios
if(nome == ``|| email ==``|| senha == ``){
alert("por favor preencha o campo vazio!")
}
//verificação do campo de email
const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
if(emailRegex.test){
alert("Digite um e-mail válido!")
}
}
if(senha.length > 8){
alert ("A senha excedeu os limites de caracteres")
}
alert ("Cadastro foi realiado com sucesso!")