const btns = document.querySelectorAll('.btn');
for(const btn of btns){
    btn.addEventListener("mousedown",function(){
        btn.style.transform ='scale(0.9)';
    })
    btn.addEventListener("mouseup",function(){
        btn.style.transform ='scale(1)';
    })
}
const clearBtn =document.getElementById('clear-btn');

const container = document.getElementById('to-do-container');
const submitBtn = document.getElementById('submit-btn');
const inputText = document.getElementById('input');
inputText.addEventListener('keyup', function(event){
    if(event.target.value.trim().length>0){
        submitBtn.removeAttribute('disabled')
    }
    else {
        submitBtn.setAttribute('disabled', true)
    }
});
let number =0;
submitBtn.addEventListener('click', function(){
number += 1;
const p =document.createElement('p');
const p2 = document.createElement('p');
const button = document.createElement('button');
p.innerText = number;
const text = inputText.value;
p2.innerText =text;
button.innerText ='❎'
button.addEventListener('click', function(){
    container.removeChild(p)
    container.removeChild(p2)
    container.removeChild(button)
})
container.append(p, p2, button)
inputText.value = '';
submitBtn.setAttribute('disabled', true);
    if(container.childElementCount > 3){
        clearBtn.removeAttribute('disabled')
    }
    else {
        clearBtn.setAttribute('disabled', true)
    }
});
clearBtn.addEventListener('click', function(){
    container.innerHTML = '';
})
clearBtn.setAttribute('disabled', true)
