let iconX = document.querySelector(".input-x")
let iconXPurple = document.querySelector(".input-x-purple")
let sortDowng = document.querySelector(".sort-down-gray")
let sortUpg = document.querySelector(".sort-up-gray")
let sortDownb = document.querySelector(".sort-down-black")
let sortUpb = document.querySelector(".sort-up-black")




iconXPurple.addEventListener("mouseout", () => {
    iconXPurple.style.display = "none"
    iconX.style.display = "inline-block"
})
iconX.addEventListener("mouseover", () => {
    iconX.style.display = "none"
    iconXPurple.style.display = "inline-block"

})





sortDowng.addEventListener("mouseover", () => {
    sortDowng.style.display = "none"
    sortDownb.style.display = "inline-block"
})

sortDownb.addEventListener("mouseout", () => {
    sortDownb.style.display = "none"
    sortDowng.style.display = "inline-block"
})

sortUpg.addEventListener("mouseover", () => {
    sortUpg.style.display = "none"
    sortUpb.style.display = "inline-block"
})

sortUpb.addEventListener("mouseout", () => {
    sortUpb.style.display = "none"
    sortUpg.style.display = "inline-block"
})



sortDownb.addEventListener("click", () => {
    sortDowng.style.display = "none"
    sortDownb.style.display = "none"
    sortUpg.style.display = "inline-block"
})

sortUpb.addEventListener("click", () => {
    sortUpg.style.display = "none"
    sortUpb.style.display = "none"
    sortDowng.style.display = "inline-block"
})