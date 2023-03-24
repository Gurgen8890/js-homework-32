
document.body.style.background = "red";

setInterval(() => document.body.style.background = "yellow", 1000);
setInterval(() => document.body.style.background = "blue", 2000);
setInterval(() => document.body.style.background = "green", 3000);

// setInterval(()=>document.body.firstElementChild.childNodes[1].style.background="red",1100);
// setInterval(()=>document.body.firstElementChild.childNodes[3].style.background="blue",2200);
//setInterval(()=>document.body.firstElementChild.childNodes[5].style.background="blue",2500);


let array =["red","blue","yellow","green","lime","aqua","pink"]
for (let i = 1;i <document.body.firstElementChild.childNodes.length;i +=2){
    setInterval(()=>document.body.firstElementChild.childNodes[i].style.background=array[Math.floor(Math.random()*array.length)],1100);
    setInterval(()=>document.body.firstElementChild.childNodes[i].style.background=array[Math.floor(Math.random()*array.length)],800);
    setInterval(()=>document.body.firstElementChild.childNodes[i].style.background=array[Math.floor(Math.random()*array.length)],2200);
}







