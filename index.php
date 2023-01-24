<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Local Wordle</title>
</head>
<body>
    <div class="container">
        <table>
            <tr class='row active-row'>
                <td class='cell empty-cell'></td>
                <td class='cell empty-cell'></td>
                <td class='cell empty-cell'></td>
                <td class='cell empty-cell'></td>
                <td class='cell empty-cell'></td>
            </tr>
            <tr class='row disable-row'>
                <td class='cell empty-cell'></td>
                <td class='cell empty-cell'></td>
                <td class='cell empty-cell'></td>
                <td class='cell empty-cell'></td>
                <td class='cell empty-cell'></td>
            </tr>
            <tr class='row disable-row'>
                <td class='cell empty-cell'></td>
                <td class='cell empty-cell'></td>
                <td class='cell empty-cell'></td>
                <td class='cell empty-cell'></td>
                <td class='cell empty-cell'></td>
            </tr>
            <tr class='row disable-row'>
                <td class='cell empty-cell'></td>
                <td class='cell empty-cell'></td>
                <td class='cell empty-cell'></td>
                <td class='cell empty-cell'></td>
                <td class='cell empty-cell'></td>
            </tr>
            <tr class='row disable-row'>
                <td class='cell empty-cell'></td>
                <td class='cell empty-cell'></td>
                <td class='cell empty-cell'></td>
                <td class='cell empty-cell'></td>
                <td class='cell empty-cell'></td>
            </tr>
            <tr class='row disable-row'>
                <td class='cell empty-cell'></td>
                <td class='cell empty-cell'></td>
                <td class='cell empty-cell'></td>
                <td class='cell empty-cell'></td>
                <td class='cell empty-cell'></td>
            </tr>
        </table>

        <table>
            <tr>
                <td class="letter unselected-letter">A</td>
                <td class="letter unselected-letter">B</td>
                <td class="letter unselected-letter">C</td>
                <td class="letter unselected-letter">D</td>
                <td class="letter unselected-letter">E</td>
            </tr>
            <tr>
                <td class="letter unselected-letter">F</td>
                <td class="letter unselected-letter">G</td>
                <td class="letter unselected-letter">H</td>
                <td class="letter unselected-letter">I</td>
                <td class="letter unselected-letter">J</td>
            </tr>
            <tr>
                <td class="letter unselected-letter">K</td>
                <td class="letter unselected-letter">L</td>
                <td class="letter unselected-letter">M</td>
                <td class="letter unselected-letter">N</td>
                <td class="letter unselected-letter">Ñ</td>
            </tr>
            <tr>
                <td class="letter unselected-letter">O</td>
                <td class="letter unselected-letter">P</td>
                <td class="letter unselected-letter">Q</td>
                <td class="letter unselected-letter">R</td>
                <td class="letter unselected-letter">S</td>
            </tr>
            <tr>
                <td class="letter unselected-letter">T</td>
                <td class="letter unselected-letter">U</td>
                <td class="letter unselected-letter">V</td>
                <td class="letter unselected-letter">W</td>
            </tr>
            <tr>
                <td class="letter unselected-letter">X</td>
                <td class="letter unselected-letter">Y</td>
                <td class="letter unselected-letter">Z</td>
            </tr>
        </table>
    </div>
    <script src="words.js"></script>
    <script src="script.js"></script>
</body>
</html>