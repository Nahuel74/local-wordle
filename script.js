const cells = document.querySelectorAll('.cell')
const rows = document.querySelectorAll('.row')

for (let i = 0; i < cells.length; i++) {
    cells[i].tabIndex = i;
}

function changeRow(rows, activeRow){

    for(let i = 0; i < rows.length; i++){
        if (rows[i].className == activeRow.className){
            console.log(i)
            activeRow.className = 'row disabled-row'
            rows[i+1].className = 'row active-row'
            break
        }
    }

}

function checkWord(text, realWord, activeRow, rows){

    text = text.split('')
    realWord = realWord.split('')

    for (let i = 0; i < text.length; i++){
        for (let j = 0; j < realWord.length; j++){
            if (text[i] == realWord[i]){
                activeRow.children[i].style.backgroundColor = 'rgb(45, 104, 45)'
                break
            }
            else if (text[i] == realWord[j] && j != i){
                activeRow.children[i].style.backgroundColor = 'rgb(187 189 48)'
                break
            }
            else {
                activeRow.children[i].style.backgroundColor = 'rgb(77, 77, 77)'
            }
        }
    }
    changeRow(rows, activeRow)
}

function validateWord(realWord, rows){
    let activeRow = document.querySelector('.active-row')

    let text = activeRow.textContent.replace(/\s+/g, "")

    if (text.length !=5){
        alert('La palabra debe tener 5 letras')
        return
    }
    else{
        checkWord(text, realWord, activeRow, rows)
    }
}

function writeCell(cells, key, realWord, rows){

    let currentIndex = document.activeElement.tabIndex
    let cell = cells[currentIndex]

    if(cell.parentElement.className == 'row active-row'){
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
            validateWord(realWord, rows)
        }
    }
}

document.onkeydown = function (key) {
    writeCell(cells, key, realWord, rows)
}

