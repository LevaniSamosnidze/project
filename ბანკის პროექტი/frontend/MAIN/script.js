const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
let p = document.getElementById('p');

let number = 0;


btn1.addEventListener('click', function(){
    l1 = Number(prompt('Enter the Amount'))
    if(l1 < 0){
        alert('error')
        return
    }else{
        number = number + l1
        p.textContent = number   
    }

})
btn2.addEventListener('click', function(){
    l2 = Number(prompt('Enter The Amount'))
    if(number < l2 || l2 < 0){
        alert('error')
        return
    }else{
        number = number - l2
        p.textContent = number
    }
})
