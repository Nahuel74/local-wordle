const cells = document.querySelectorAll('.cell')

for (let i = 0; i < cells.length; i++) {
    cells[i].tabIndex = i;
}

function validateWord(){
    let activeRow = document.querySelector('.active-row')

    let text = activeRow.textContent.replace(/\s+/g, "")

    if (text.length !=5){
        alert('La palabra debe tener 5 letras')
    }
    
}

function writeCell(key){

    let currentIndex = document.activeElement.tabIndex
    let cell = cells[currentIndex]

    if((key.keyCode >= 65 && key.keyCode <= 90) || key.keyCode ===  192){
        cell.innerHTML = key.key
        if(cell.nextElementSibling){
            cell.nextElementSibling.focus()
        }
    }
    else if (key.keyCode === 8){
        cell.innerHTML = ''

        if (cell.previousElementSibling){
            cell.previousElementSibling.focus()
        }
    }
    else if (key.keyCode === 13){
        validateWord()
    }
}

document.onkeydown = function (key) {
    writeCell(key)
}

