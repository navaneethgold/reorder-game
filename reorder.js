const b1=document.querySelector(".b1")
const b2=document.querySelector(".b2")
const b3=document.querySelector(".b3")
const b4=document.querySelector(".b4")
const b5=document.querySelector(".b5")
const b6=document.querySelector(".b6")
const b7=document.querySelector(".b7")
const b8=document.querySelector(".b8")
const start =document.querySelector(".start")
const b9=document.querySelector(".b9")
let empty=9
let bx;
// let correct=false
function iscorrect(){
    const body=document.querySelector(".outer")
    let correct=true; // Initialize correct as true
    for(let i=1; i<9; i++){
        console.log(".b"+i)
        const bx = document.querySelector(".b" + i);
        console.log(bx.innerText)
        console.log(i)
        if(parseInt(bx.innerText) !== i){
            correct=false; // If any box is not in correct order, set correct to false
            // break;
        }
    }
    if(correct){
        body.style.fontSize="100px"
        body.style.background="linear-gradient(to bottom,orange,green)"
        body.style.borderRadius="50%"
        body.innerText="You did it"

    }
    // else{
    //     console.log("sorry")
    // }
}

function move(num){
    bx = document.querySelector(".b" + num);
    by = document.querySelector(".b" + empty);
    by.innerText=bx.innerText
    by.style.background="linear-gradient(to bottom,rgb(122, 71, 71),brown)"
    empty=num
    bx.innerText=""
    bx.style.background="black"
    // iscorrect()
    
}
function checkif(num){
    if(empty===1){
        if(num==2 || num==4){
            move(num)
            
        }
    }
    if(empty===2){
        if(num==1 || num==3 || num==5){
            move(num)
            
        }
    }
    if(empty===3){
        if(num==2 || num==6){
            move(num)
            
        }
    }
    if(empty===4){
        if(num==1 || num==5 || num==7){
            move(num)
        
        }
    }
    if(empty===5){
        if(num==2 || num==4 || num==6 || num==8){
            move(num)
            
        }
    }
    if(empty===6){
        if(num==3 || num==5 || num==9){
            move(num)
    
        }
    }
    if(empty===7){
        if(num==4 || num==8){
            move(num)
    
        }
    }
    if(empty===8){
        if(num==7 || num==9 || num==5){
            move(num)
    
        }
    }
    if(empty===9){
        if(num==8 || num==6){
            move(num)
        
        }
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function isSolvable(permutation) {
    let inversions = 0;
    for (let i = 0; i < permutation.length; i++) {
        for (let j = i + 1; j < permutation.length; j++) {
            if (permutation[i] > permutation[j]) {
                inversions++;
            }
        }
    }
    return inversions % 2 === 0;
}
function startgame(){
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let solvable = false;
    while (!solvable) {
        numbers = shuffle(numbers);
        solvable = isSolvable(numbers);
    }
    for (let i = 0; i < numbers.length; i++) {
        const box = document.querySelector(".b" + (i + 1));
        box.innerText = numbers[i];
}
}


start.addEventListener("click",()=>{
    startgame()
})




b1.addEventListener("click",()=>{
    checkif(1)
    iscorrect()
})
b2.addEventListener("click",()=>{
    checkif(2)
    iscorrect()

})
b3.addEventListener("click",()=>{
    checkif(3)
    iscorrect()

})
b4.addEventListener("click",()=>{
    checkif(4)
    iscorrect()

})
b5.addEventListener("click",()=>{
    checkif(5)
    iscorrect()

})
b6.addEventListener("click",()=>{
    checkif(6)
    iscorrect()

})
b7.addEventListener("click",()=>{
    checkif(7)
    iscorrect()

})
b8.addEventListener("click",()=>{
    checkif(8)
    iscorrect()

})
b9.addEventListener("click",()=>{
    checkif(9)
    iscorrect()

})
