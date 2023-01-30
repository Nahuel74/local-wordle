const cells = document.querySelectorAll('.cell')
const rows = document.querySelectorAll('.row')
const letters = document.querySelectorAll('.letter')

cells.forEach((cell, i) => cell.tabIndex = i);

function updateLetter(letters, text, i, status){
    for (let j = 0; j < letters.length; j++){
        if (letters[j].innerHTML.toLowerCase() == text[i].toLowerCase()){
            if (status == 'correct'){ 
                letters[j].style.backgroundColor = 'rgb(45, 104, 45)'
            }
            else if (status == 'semi-correct' && letters[j].style.backgroundColor != 'rgb(45, 104, 45)'){
                letters[j].style.backgroundColor = 'rgb(187 189 48)'
            }
            else if (status == 'wrong'){
                letters[j].style.backgroundColor = 'rgb(255 0 0)'
            }
        }
    }
}

function changeRow(rows, activeRow){

    for(let i = 0; i < rows.length; i++){
        if (rows[i].className == activeRow.className){
            if(rows[i+1]) {
                activeRow.className = 'row disabled-row'
                rows[i+1].className = 'row active-row'
                rows[i+1].children[0].focus()
            }
            break
        }
    }
}

function checkWord(text, realWord, activeRow, rows, letters){

    text = text.split('')
    realWord = realWord.split('')

    for (let i = 0; i < text.length; i++){
        for (let j = 0; j < text.length; j++){
            if (text[i] === realWord[i]){
                let status = 'correct'
                activeRow.children[i].style.backgroundColor = 'rgb(45, 104, 45)'
                updateLetter(letters, text, i, status)
                break
            }
            else if (text[i] == realWord[j] && j != i){
                let status = 'semi-correct'
                activeRow.children[i].style.backgroundColor = 'rgb(187 189 48)'
                updateLetter(letters, text, i, status)
                break
            }
            else {
                let status = 'wrong'
                activeRow.children[i].style.backgroundColor = 'rgb(77, 77, 77)'
                updateLetter(letters, text, i, status)
            }
        }
    }
    changeRow(rows, activeRow)
}

function validateWord(realWord, rows, letters){
    let activeRow = document.querySelector('.active-row')

    let text = activeRow.textContent.replace(/\s+/g, "")

    if (text.length !=5){
        alert('La palabra debe tener 5 letras')
        return
    }
    else{
        checkWord(text, realWord, activeRow, rows, letters)
    }
    if (text == realWord){
        if(confirm(`¡Correcto! \n La palabra era ${realWord} \n ¿Volver a jugar?`)){
            location.reload();
        }
    }
    else if (!activeRow.nextElementSibling && text != realWord){
        if(confirm(`La palabra era ${realWord} \n ¿Volver a jugar?`)){
            location.reload();
        }
    }
}

function writeCell(cells, key, realWord, rows, letters){

    let currentIndex = document.activeElement.tabIndex
    let cell = cells[currentIndex]

    if(cell.parentElement.className == 'row active-row'){
        if((key.keyCode >= 65 && key.keyCode <= 90) || key.keyCode ===  192){
            cell.innerHTML = key.key
            if(cell.nextElementSibling){
                cell.nextElementSibling.focus()
            }
        }
        else if (key.keyCode === 8 && cell.innerHTML != ''){
            cell.innerHTML = ''
        }
        else if (key.keyCode === 8 && cell.innerHTML == '' && cell.previousElementSibling){
            cell.previousElementSibling.focus()
        }
        else if (key.keyCode === 13){
            validateWord(realWord, rows, letters)
        }
    }
}

document.onkeydown = function (key) {
    writeCell(cells, key, realWord, rows, letters)
}

