let number=document.getElementById("number1");
let counter=0;

setInterval(()=>{
    if(counter===80){
        clearInterval();
    }else{
        counter+=1;
        number.innerHTML=counter+"%";
    }
},25)

let number2=document.getElementById("number2");
let counter2=0;

setInterval(()=>{
    if(counter2===50){
        clearInterval();
    }else{
        counter2+=1;
        number2.innerHTML=counter2+"%";
    }
},40)

let number3=document.getElementById("number3");
let counter3=0;

setInterval(()=>{
    if(counter3===65){
        clearInterval();
    }else{
        counter3+=1;
        number3.innerHTML=counter3+"%";
    }
},30)


const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements=document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));


var typed=new Typed(".auto-type",{
    strings:["Web Developer"," Competitive Programmer","Gamer"],
    typeSpeed:120,
    backSpeed:100,
    loop:true
})


var hamburger=document.querySelector(".burger");
hamburger.addEventListener("click",function(){
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
    if(!document.querySelector(".sidebar").classList.contains("sidebarGo") &&(screen.width<440)){
        document.querySelector(".burger").style.marginRight="200px";

        document.querySelector(".burger").style.transition="all 1s ease";
    }
    else if(!document.querySelector(".sidebar").classList.contains("sidebarGo") &&(screen.width<476)){
        document.querySelector(".burger").style.marginRight="250px";

        document.querySelector(".burger").style.transition="all 1s ease";
    }
    else if(!document.querySelector(".sidebar").classList.contains("sidebarGo") ){
        document.querySelector(".burger").style.marginRight="300px";

        document.querySelector(".burger").style.transition="all 1s ease";
    }
    else{
        document.querySelector(".burger").style.marginRight="30px";
    }
});


window.addEventListener("scroll",function(){
    document.querySelector("nav").classList.toggle("sticky",window.scrollY>0);
})