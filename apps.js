const decreaseBtn = document.getElementById('btn decrease');
const resetBtn = document.getElementById('btn reset');
const incraseBtn = document.getElementById('btn incrase');

const changable = document.querySelector('#number');
let number=0;
decreaseBtn.addEventListener('click',function(){
    number--;
    changable.textContent= number;
    colorPicker();
})
resetBtn.addEventListener('click',function(){
    number=0;
    changable.textContent=number;
    colorPicker();
})
incraseBtn.addEventListener('click',function(){
    number++;
    changable.textContent=number;
    colorPicker();
})
function colorPicker(){
    if (number>0) {
     changable.style.color='green';
    }
    if(number<0) {
     changable.style.color='red';
    }
    if(number===0){
      changable.style.color='black';
    }
}

