const titulo = document.getElementById('Text')
Writer(titulo)

function Writer(Element){
    const Array = Element.innerHTML.split('')
   Element.innerHTML= '',
   Array.forEach((letra, i)=>{
    setTimeout(function(){
        Element.innerHTML += letra
        
    }, 75 * i)
   })
   
};
