const entrada = document.querySelector('#nome')
const botao = document.querySelector('.btn')
const lista = document.querySelector('.list')

function criarElemento(){

     const lis = document.createElement('li')
     return lis;

}


function criaTarefa(text){
  
  const lis = criarElemento()    
  lis.innerText = text
  lista.appendChild(lis)
  lis.innerText += ' '
  criaBotao(lis)
  limpaInput()
}
function criaBotao(lis){
   
   const botao = document.createElement('button')
   botao.innerText = "apagar"
   botao.setAttribute('class', 'apagar')
   lis.appendChild(botao)
}

function limpaInput(li){
  entrada.value = ""    
  entrada.focus()
}
  botao.addEventListener('click', (e)=>{
    entrada.value.length>0?  criaTarefa(entrada.value): alert('tente novamente')           
  })
  entrada.addEventListener('keypress', function(e){
    e.keyCode===13?criaTarefa(entrada.value):'';
  })
  
  document.addEventListener('click', function(e) {
    const el = e.target;
  
    if (el.classList.contains('apagar')) {
      el.parentElement.remove();
    }
  });
  