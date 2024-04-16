let divContainer = document.querySelector("#container")
let inputButton = document.querySelector("#grid-button")

inputButton.addEventListener("click", getInput)

divContainer.addEventListener("mouseover", function (event) {
    event.target.id === "container" ? null : event.target.style.background.length === 0 ?
    event.target.style.background = generateRandomRGB() : event.target.style.filter = changeBrightness (event.target.style.filter)

})

function createDivGrid (grid) {

    for (let div = 1; div <= grid*grid; div++) {
        let gridDiv = document.createElement("div")
        gridDiv.setAttribute("style", `min-width: 10px; min-height: 10px; display: flex; flex: 1 1 ${100/grid}%;`)
        gridDiv.classList.add("grid")
        divContainer.appendChild(gridDiv)
    }

}

function getInput () {
    let userInput = parseInt(prompt("Please input desired grid size between 1 and 100"))
    userInput > 100 || userInput <= 0 ? alert("Please input value between 1 and 100") : resetGrid(userInput)
}

function removeGridChildren () {
    let divChildren = divContainer.childNodes
    
    while (divChildren.length > 0) {
        divContainer.removeChild(divContainer.firstChild)
    }
}

function resetGrid (input) {
    removeGridChildren()
    createDivGrid(input)
}

function generateRandomRGB () {
    let partRed = Math.floor(Math.random()*257)
    let partGreen = Math.floor(Math.random()*257)
    let partBlue = Math.floor(Math.random()*257)

    return `rgba(${partRed},${partGreen},${partBlue})`
}

function changeBrightness (filterOption) {
    let filterProps = filterOption.length > 0 ? filterOption : "brightness(1)"
    let slicedBrightnessValue = filterProps.slice(filterProps.indexOf("(")+1,filterProps.lastIndexOf(")"))

    return `brightness(${slicedBrightnessValue - 0.1})`
}

createDivGrid(16)