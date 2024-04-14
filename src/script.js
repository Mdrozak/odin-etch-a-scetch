let divContainer = document.querySelector("#container")
let inputButton = document.querySelector("#grid-button")

inputButton.addEventListener("click", getInput)

divContainer.addEventListener("mouseover", function (event) {
    event.target.id === "container" ? null : event.target.style.background = "red"
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



// Extra - Add randomize color squares RGB value with each interaction
// Extra - Add progressive darkening effect, where each interaction dakrens the square by 10%,
// achive a completly black square in only ten interactions
// research opacity CSS property

createDivGrid(16)