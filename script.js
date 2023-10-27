function createGrid(gridSize){
    const gridContainer = document.querySelector(".gridContainer");

    gridContainer.innerHTML = "";

    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;


    for(let row = 0; row < gridSize; row++){
        for(let col = 0; col < gridSize; col++){
            const gridItem = document.createElement("div");
            gridItem.classList.add("gridItem");
            gridContainer.appendChild(gridItem);

            gridItem.addEventListener("mouseenter", () => {
                gridItem.style.backgroundColor = getRandomColor();
            });
        }
    }
    
    addHoverEffect();
};

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function addHoverEffect(){
    const gridItem = document.querySelectorAll(".gridItem");
    
    gridItem.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            item.classList.add("hovered");
        });
        
        /* item.addEventListener("mouseleave", () => {
            item.classList.remove("hovered");
        }); */
    });
};

const maxGridSize = 50;

function resetGrid() {
    const newSize = prompt(`Enter new grid size up to ${maxGridSize}:`);
    if(newSize){
        const validatedSize = Math.min(parseInt(newSize, 10), maxGridSize);
        createGrid(validatedSize);
    };
};

createGrid(16);

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetGrid);