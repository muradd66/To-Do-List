let input = document.querySelector("input")
let add = document.querySelector(".adder")
let iconX = document.querySelector(".input-x")
let iconXPurple = document.querySelector(".input-x-purple")
let sortDowng = document.querySelector(".sort-down-gray")
let sortUpg = document.querySelector(".sort-up-gray")
let sortDownb = document.querySelector(".sort-down-black")
let sortUpb = document.querySelector(".sort-up-black")
let list = document.querySelector(".list")
let inputContainer = document.querySelector(".input-container")
let plus = document.querySelector(".plus")
let sorts=document.querySelector(".sorts")

//x icon

iconXPurple.addEventListener("mouseout", () => {
    iconXPurple.style.display = "none"
    iconX.style.display = "block"
})

iconX.addEventListener("mouseover", () => {
    iconX.style.display = "none"
    iconXPurple.style.display = "block"
})

// sort icon
let sort = false

sortDowng.addEventListener("mouseover", () => {
    sortDowng.style.display = "none"
    sortDownb.style.display = "block"
})

sortDownb.addEventListener("mouseout", () => {
    sortDownb.style.display = "none"
    if (sort == false) {
        sortDowng.style.display = "block"
    }

})

sortUpg.addEventListener("mouseover", () => {
    sortUpg.style.display = "none"
    sortUpb.style.display = "block"
})

sortUpb.addEventListener("mouseout", () => {
    sortUpb.style.display = "none"
    if (sort == true) {
        sortUpg.style.display = "block"
    }
})

sortDownb.addEventListener("click", () => {
    sort = true
    sortDowng.style.display = "none"
    sortDownb.style.display = "none"
    sortUpg.style.display = "block"
    sortUpb.style.display = "none"
})

sortUpb.addEventListener("click", () => {
    sort = false
    sortUpg.style.display = "none"
    sortUpb.style.display = "none"
    sortDowng.style.display = "block"
    sortDownb.style.display = "none"
})





iconXPurple.addEventListener("click", () => {
    input.value = ''
})

let index=0
add.addEventListener("click", () => {

    let text = input.value
    if (text != "") {
        inputContainer.style.display = "none"
        sorts.style.display="block"
        input.value = ""

        index=index+1

        let icon = document.createElement("img")
        icon.src = "./x-icon.svg"
        icon.style.display = "inline"
        icon.className = "delete"

        let iconPurple = document.createElement("img")
        iconPurple.src = "./x-icon-purple.svg"
        iconPurple.className = "delete-purple"

        let area = document.createElement("div")
        area.className = "area"
        let div = document.createElement("div")
        div.className = "area-content"

        let p = document.createElement("p")
        p.textContent = text
        p.className = "content"

        let number=document.createElement("span")
        number.className="number"
        number.textContent=`${index}. `

        p.prepend(number)
 
        div.append(p)
        div.append(icon)
        div.append(iconPurple)
        area.append(div)
        list.append(area)

        list.style.display = "block"

        iconPurple.addEventListener("mouseout", () => {
            icon.style.display = "inline-block"
            iconPurple.style.display = "none"
        })

        icon.addEventListener("mouseover", () => {
            icon.style.display = "none"
            iconPurple.style.display = "inline-block"
        })


        iconPurple.addEventListener("click", () => {
            area.remove()
            if (list.children.length== 0) {
                list.style.display="none"
                inputContainer.style.display = "block"
                
            }


        })
    }

})

plus.addEventListener("click", () => {
    inputContainer.style.display = "block"
})



