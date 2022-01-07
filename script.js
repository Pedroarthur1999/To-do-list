const entrada = document.querySelector('#nome')
const botao = document.querySelector('.btn')
const lista = document.querySelector('.list')

function criarElemento(){

     const lis = document.createElement('li')
     return lis;

}
// function criarBotao(){
     
//       const botao = document.createElement('button', value="ola")
//       return botao;

// }

function criaTarefa(text){
     
    const lis = criarElemento()    
//    const btn2 = criarBotao()
    lis.innerText = text
    lista.appendChild(lis);
  //  lista.appendChild(btn2)
}


  botao.addEventListener('click', (e)=>{
           entrada.value.length>0?  criaTarefa(entrada.value): alert('tente novamente')  
          
  })
