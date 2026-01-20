let heure = 0;
let minute = 0;
let secondes = 0;
let millisecondes = 0;
let display = document.querySelector("#display");




let on = true;
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
start.addEventListener("click",()=> {
   
  
        
        let chronometre = setInterval(function(){
                
        millisecondes++;
    display.textContent = `${heure}:${secondes}:${millisecondes}`;
    if (millisecondes >= 1000){
        millisecondes = 0;
        secondes += 1;
    }
    if (secondes >= 60){
        secondes = 0;
        minute += 1;
    }
    if (minute >= 60){
        minute = 0;
        heure += 1;
    }
   

   pause.addEventListener("click",()=>{
    clearInterval(chronometre);
   })      

    
},1)




   
    




})

let reinit = document.querySelector("#reinit");
reinit.addEventListener("click",()=>{
    display.textContent= "00:00:00"
    heure = 0;
    minute = 0;
    secondes = 0;
    millisecondes = 0;
});
