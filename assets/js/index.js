const btn=document.getElementById("btn");
const menus=document.querySelector(".menus");
const nav=document.querySelector(".nav");
menus.remove();
btn.addEventListener("click",(e)=>{
    if(e.target.name=="menu"){
           e.target.name="close";
           nav.appendChild(menus);
    }else{
        e.target.name="menu";
        menus.remove();

    }
})