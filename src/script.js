// 1. Create divs using only Js in starting grid 16x16

// Get #container selector
let divContainer = document.querySelector("#container")
let inputButton = document.querySelector("#grid-button")

function createDivGrid (grid) {

    for (let div = 1; div <= grid*grid; div++) {
        let gridDiv = document.createElement("div")
        gridDiv.setAttribute("style", `min-width: 10px; min-height: 10px; display: flex; flex: 1 1 ${100/grid}%;`)
        gridDiv.classList.add("grid")
        divContainer.appendChild(gridDiv)
    }

}


// 2. Use flexbox for those divs
// added in style css

// 3. Add hover effect to change divs color when mouse passes over them
// leaving pixelated trial through grid
divContainer.addEventListener("mouseover", function (event) {
    event.target.id === "container" ? null : event.target.style.background = "red"
})

// 4. Add button on top, that triggers popup for user input for square number per side for new grid
// after entering, remove existing grid and generate new grid in the same total space as before
inputButton.addEventListener("click", getInput)

function getInput () {
    let userInput = parseInt(prompt("Please input desired grid size between 1 and 100"))
    // 5. Limit for user input 100
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