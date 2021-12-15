document.querySelector("#columns-container").addEventListener("click", (event) => {
    if (event.target.classList.contains("priority-tag")) {
        if (event.target.style.backgroundColor === "gray") {
            event.target.innerHTML = "Low";
            event.target.style.backgroundColor = "forestgreen";
        } else if (event.target.style.backgroundColor === "forestgreen") {
            event.target.innerHTML = "Medium";
            event.target.style.backgroundColor = "goldenrod";
        } else if (event.target.style.backgroundColor === "goldenrod") {
            event.target.innerHTML = "High";
            event.target.style.backgroundColor = "firebrick";
        } else {
            event.target.innerHTML = "Low";
            event.target.style.backgroundColor = "forestgreen";
        }
    }

    if (event.target.classList.contains("delete-button")) {
        const currentElement = event.target.closest(".card");
        currentElement.remove();
    }

    if (event.target.classList.contains("new-card-button")) {
        const newCardTemplate = `
            <div class="card-content">
                <textarea class="card-name" maxlength="20"></textarea>
                <div class="priority-container">
                    <div class="priority-label">Priority Level:
                    </div>
                <button class="priority-tag">Click to Set</button>
                </div>
            </div>
            <textarea class="card-description"></textarea>
            <button class="delete-button">Delete</button>
        `;

        const newCardElement = document.createElement("div");
        newCardElement.classList.add("card");
        newCardElement.innerHTML = newCardTemplate;
        newCardElement.setAttribute("draggable", true);
        const column = event.target.closest(".card-column");
        column.appendChild(newCardElement);

        const allCards = document.querySelectorAll(".card");
        const dropHere = document.querySelectorAll(".card-column");
        
        allCards.forEach(draggedCard => {
            draggedCard.addEventListener("dragstart", (event) => {
                event.target.classList.add("currentDraggedCard");
                event.target.style.opacity = ".6";
            });

            draggedCard.addEventListener("dragend", (event) => {
                event.target.style.opacity = "1";
                event.target.classList.remove("currentDraggedCard");
            });
        })

        dropHere.forEach(cardColumn => {
            cardColumn.addEventListener("dragover", () => {
                cardColumn.appendChild(document.querySelector(".currentDraggedCard"));
            });

            cardColumn.addEventListener("drop", () => {
                
            });  
        })
    }
})