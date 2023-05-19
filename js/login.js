/*
let usuario1 = {
    nomeCompleto : "Flavio of the pneu", 
    nomeUsuario : "Flavio",
    senhaUsuario : "123456",
    ccuUsuario : "sc"
}

let usuario2 = {
    nomeCompleto : "Carlox Ruix", 
    nomeUsuario : "Carlin",
    senhaUsuario : "123456789",
    ccuUsuario : "rj"
}

usuario1 = usuario2;

console.log("NOME DO USUARIO : " + usuario1.nomeCompleto);

usuario1.nomeCompleto = "Carlinhos";
console.log("NOME DO USUARIO : " + usuario1.nomeCompleto);

usuario1["cpf"] = "12345678900";
console.log("CPF DO USUARIO :" + usuario1.cpf);
*/

/* LISTA DE USUÁRIOS 
let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);
*/
let  = {
    nomeCompleto : "Flavio of the pneu", 
    nomeUsuario : "Flavio",
    senhaUsuario : "123456",
    ccuUsuario : "sc"
}

{
    nomeCompleto : "Marquito", 
    nomeUsuario : "Lil mark",
    senhaUsuario : "12345",
    ccuUsuario : "rj"
}
{
    nomeCompleto : "Bolnossauro", 
    nomeUsuario : "Bonoro",
    senhaUsuario : "222222",
    ccuUsuario : "sc"
}

{
    nomeCompleto : "Luiz Yi Nacio", 
    nomeUsuario : "Lulinha",
    senhaUsuario : "131313",
    ccuUsuario : "sp"
    }
];




const msgStatus = document.querySelector("#msg");
const formlogin = document.querySelector("#form[name='frm01']");

const botaoSubmit = document.querySelector("#btnSubmit");
botaoSubmit.addEventListener

botaoSubmit.addEventListener("click", validaFormularioCompleto);


function validaFormularioCompleto() {

    const inputUser = document.querySelector("idNm");
    const inputPass = document.querySelector("idPass");
    const selCentroCusto = document.querySelector("idCusto");



    console.log(inputUser);
    console.log(inputPass);
    console.log(selCentroCusto);

    const usuarioLogado = {
        nomeUsuarioLogado : inputUser.value,
        senhaUsuarioLogado : inputPass.value,
        ccuUsuarioLogado : selCentroCusto.value
    }

    let usuarioValidado = {};


    if(inputUser.value != "" && inputPass.value != "" && selCentroCusto.value != "0"){
        
        for (let x = 0; x < listaDeUsuarios.length; x++) {

            if(usuarioLogado.nomeUsuarioLogado == listaDeUsuarios[x].nomeUsuario && 
            usuarioLogado.senhaUsuarioLogado == listaDeUsuarios[x].usuario.senhaUsuario && 
            ccuUsuarioLogado == listaDeUsuarios[x].usuario.ccuUsuario){
                usuarioValidado = listaDeUsuarios[x];
                
                msgStatus.setAttribute("style","color:#00ff00");
                msgStatus.innerHTML = `<span><strong>0 usuário ${usuarioValidado.nomeCompleto} fez o login com SUCESSO </strong></span>`;


            /*}else{
               msgStatus.setAttribute("style","color:#ff0000");
                msgStatus.innerHTML = `<span><strong>0 usuário ${usuarioValidado.nomeCompleto} Nome de usuário ou senha inválidos... </strong></span>`;
              */  
    
            }          
        }

    }else{
        console.log("EXISTE ALGUM CAMPO SEM PREENCHIMENTO!")
    }


// const form1 = document.querySelector("form[name='frm01']");
// // console.log(form1);

// form1.addEventListener("submit", ()=>{
    const inputUser = document.querySelector("#idNm");
    const inputPass = document.querySelector("#idPass");
    const selectCusto = document.querySelector("#idCusto");

    const labelUser = document.querySelector("label[for='idNm']");
    const labelPass = document.querySelector("label[for='idPass']");

    inputUser.addEventListener("keyup" ,()=>{

        if(inputUser.value.length < 5){
            labelUser.setAttribute("style","color:#ff0000;");
        }else{
            labelUser.setAttribute("style","color:#00ff00;");
        }
    });

    inputPass.addEventListener("keyup" ,()=>{

        if(inputPass.value.length < 5){
            labelPass.setAttribute("style","color:#ff0000;");
        }else{
            labelPass.setAttribute("style","color:#00ff00;");
        }
    });