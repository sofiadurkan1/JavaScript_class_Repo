function test(){
    console.log('on double click');

}

function test2(){
    console.log('on click');

}

function test3(){
    console.log("third function");
}

function test4(){
    console.log("fourth function");
}

function test5(){
    console.log("fifth function");
}




// const btnSecondUO = document.getElementById('btnSecond');
// let btnSecond2 = document.getElementById('btnSecond');


// console.log(btnSecondUO);
// console.log(btnSecond2);
// btnSecondUO.onclick = test;
// btnSecondUO.ondblclick = test2;


// let btnEventListener = document.getElementById('btnEventListener');
// console.log(btnEventListener);

// btnEventListener.addEventListener('click',test3);
// btnEventListener.addEventListener('click',test4);
// btnEventListener.addEventListener('click',test5);


// btnEventListener.removeEventListener('click',test4);
// btnEventListener.addEventListener('click',test4);

function changeDivColor(){
    const colorR= Math.floor(Math.random()*255)
    const colorG= Math.floor(Math.random()*255)
    const colorB= Math.floor(Math.random()*255)



    myDiv.style.backgroundColor =`rgb($(colorR),$(colorG),$(colorB))`
}

let myDiv = document.getElementById('myDiv')
// console.log(myDiv);

const btnChangeColor = document.getElementById('btnChangeColor')

btnChangeColor.addEventListener("click", changeDivColor)

myDiv.addEventListener('mouseover',() => (myDiv.textContent='mouse is on me!'));
myDiv.addEventListener('mouseout',() => (myDiv.textContent=''));

