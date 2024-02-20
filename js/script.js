let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
    let curentTime =new Date();
    hrs.innerHTML = (curentTime.getHours()<10?"0":"")+ curentTime.getHours(); 
    sec.innerHTML = (curentTime.getMinutes()<10?"0":"")+curentTime.getMinutes();  
    sec.innerHTML = (curentTime.getSeconds()<10?"0":"")+curentTime.getSeconds();  
    // hrs.innerHTML = curentTime.getHours(); 
    // min.innerHTML = curentTime.getMinutes(); 
}, 1000);
// console.log(curentTime.getMinutes());
// console.log(hrs)

