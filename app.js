let input = document.querySelector("input")
let add = document.querySelector(".add")
let iconX = document.querySelector(".input-x")
let iconXPurple = document.querySelector(".input-x-purple")
let sortDowng = document.querySelector(".sort-down-gray")
let sortUpg = document.querySelector(".sort-up-gray")
let sortDownb = document.querySelector(".sort-down-black")
let sortUpb = document.querySelector(".sort-up-black")
let list = document.querySelector(".list")
let inputContainer = document.querySelector(".input-container")
let plus = document.querySelector(".plus")
let sorts = document.querySelector(".sorts")

// --- X İKONU V
iconXPurple.addEventListener("mouseout", () => {
    iconXPurple.style.display = "none"
    iconX.style.display = "block"
})

iconX.addEventListener("mouseover", () => {
    iconX.style.display = "none"
    iconXPurple.style.display = "block"
})

iconXPurple.addEventListener("click", () => {
    input.value = ''
})

// --- SORT İKONU 
let sort = false // false = Artan (default), true = Azalan

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

// --- NÖMRƏLƏMƏNİ YENİLƏYƏN FUNKSİYA ---
function updateNumbers() {
    const tasks = list.querySelectorAll(".area");
    tasks.forEach((task, i) => {
        const numberSpan = task.querySelector(".number");
        if (numberSpan) {
            
            numberSpan.textContent = `${i + 1}. `; 
        }
    });
    
    if (tasks.length === 0) {
        sorts.style.display = "none";
    }
}


sortDownb.addEventListener("click", () => {
    sort = true
    sortDowng.style.display = "none"
    sortDownb.style.display = "none"
    sortUpg.style.display = "block" 
    sortUpb.style.display = "none"

    let tasks = list.querySelectorAll(".area")
    let taskArray = [...tasks]

    taskArray.sort((a, b) => {
        let textA = a.querySelector(".content").textContent.trim()
        let textB = b.querySelector(".content").textContent.trim()

        
        let newTextA = textA.split(".")
        let newA = newTextA.length > 1 ? newTextA[1].trim() : textA;

        
        let newTextB = textB.split(".")
        let newB = newTextB.length > 1 ? newTextB[1].trim() : textB;

        let numA = parseFloat(newA)
        let numB = parseFloat(newB)

        if (!isNaN(numA) && !isNaN(numB)) {
            // Azalan rəqəm sıralaması
            return numB - numA;
        } else {
            // Azalan mətn sıralaması
            return newB.localeCompare(newA);
        }

    })

    list.innerHTML = "";
    taskArray.forEach(task => list.appendChild(task))
    updateNumbers()
})


sortUpb.addEventListener("click", () => {
    sort = false
    sortUpg.style.display = "none"
    sortUpb.style.display = "none"
    sortDowng.style.display = "inline-block" 
    sortDownb.style.display = "none"

    let tasks = list.querySelectorAll(".area")
    let taskArray = [...tasks]

    taskArray.sort((a, b) => {
        let textA = a.querySelector(".content").textContent.trim()
        let textB = b.querySelector(".content").textContent.trim()

        
        let newTextA = textA.split(".")
        let newA = newTextA.length > 1 ? newTextA[1].trim() : textA;
        
        
        let newTextB = textB.split(".")
        let newB = newTextB.length > 1 ? newTextB[1].trim() : textB;

        let numA = parseFloat(newA)
        let numB = parseFloat(newB)

        if (!isNaN(numA) && !isNaN(numB)) {
            // Artan rəqəm sıralaması
            return numA - numB;
        } else {
            // Artan mətn sıralaması
            return newA.localeCompare(newB);
        }
    })

    list.innerHTML = "";
    taskArray.forEach(task => list.appendChild(task));
    updateNumbers()
});


add.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        let text = input.value.trim()

        inputContainer.style.display = "none"
        sorts.style.display = "block"
        input.value = ""

        
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
        
       
        let number = document.createElement("span")
        number.className = "number"
        p.prepend(number) 

        div.append(p)
        div.append(icon)
        div.append(iconPurple)
        area.append(div)
        list.append(area)

        list.style.display = "block"
        
       
        updateNumbers() 

        
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

            updateNumbers() 
            
            if (list.children.length == 0) {
                list.style.display = "none"
                inputContainer.style.display = "block"
            }
        })
    }
})


plus.addEventListener("click", () => {
    inputContainer.style.display = "block"
})