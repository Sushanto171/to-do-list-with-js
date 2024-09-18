const btns = document.getElementsByClassName('btn');
for(const btn of btns){
    btn.addEventListener('mousedown',function(){
        btn.style.scale ='90%'
    })
    btn.addEventListener('mouseup',function(){
        btn.style.scale ='100%'
    })
};
let inputText = document.getElementById('input');
const container = document.getElementById('to-do-container');
inputText.addEventListener('keyup', function(event){
    if(event.target.value.length > 0){
        document.getElementById('submit-btn').removeAttribute('disabled')
    }
    else{
        document.getElementById('submit-btn').removeAttributeAttribute('disabled', )
    }
});
let number = 0;
document.getElementById('submit-btn').addEventListener('click', function(){  
    number +=1;
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const deleteBtn = document.createElement('button');
    const text = inputText.value;
    p.innerText = number
    p2.innerText = text
    deleteBtn.innerText = '❎'
    deleteBtn.addEventListener('click',function(){
        container.removeChild('p')
        container.removeChild('deleteBtn')
        container.removeChild('p2')
    });
   container.append(p, p2, deleteBtn)
   inputText.value = '';
   document.getElementById('submit-btn').setAttribute('disabled', true);
});
const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', function(){
    container.innerHTML= '';
})