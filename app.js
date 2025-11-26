let iconX=document.querySelector(".input-x")
let iconXPurple=document.querySelector(".input-x-purple")
iconX.addEventListener("mouseover", ()=>{
    iconX.style.display="none"
    iconXPurple.style.display="inline-block"

})
iconXPurple.addEventListener("mouseout",()=>{
    iconXPurple.style.display="none"
    iconX.style.display="inline-block"
})