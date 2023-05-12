
function insereNumeroNoVisor(botao,visor) {
    visor.value += botao.value;

}

const resultadoDasOperacoes = (visor) =>{

    visor.value = eval(visor.value);

}