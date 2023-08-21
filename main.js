const botoesComInsert = document.querySelectorAll(".botoes-com-insert")
const botaoClearAll = document.querySelector("#botao-clearAll")
const botaoReturn = document.querySelector("#botao-return")
const botaoResultado = document.querySelector("#botao-resultado")

const insert = (botao) =>{
    const textoResultado = document.querySelector("#texto-resultado").innerHTML
    document.querySelector("#texto-resultado").innerHTML = textoResultado + botao.innerHTML
}
const clearAll = () => {
    document.querySelector("#texto-resultado").innerHTML = ""
}
const retroceder = () => {
    const textoResultado = document.querySelector("#texto-resultado").innerHTML
    document.querySelector("#texto-resultado").innerHTML = textoResultado.substring(0, textoResultado.length - 1)
}
const resolver = () => {
    const textoResultado = document.querySelector("#texto-resultado").innerHTML
    if(textoResultado){
        try{
            document.querySelector("#texto-resultado").innerHTML = eval(textoResultado).toString()
        }
        catch(ex){
            alert("Uhm...Teve um erro na hora de resolver a expressão. Use a sintaxe usada em calculadoras, coloque todas as operações(não deixe nenhuma oculta).")
        }
    }
}
botoesComInsert.forEach(botao => {
    botao.addEventListener("click", () =>{
        insert(botao)
    })
})
botaoClearAll.onclick = clearAll
botaoReturn.onclick = retroceder
botaoResultado.onclick = resolver

