$(function () {
  var $player1 = $('<div class="player1 lupid">')
  var $player2 = $('<div class="player2 pig">')
  var currentPlayer = $player1
  var totalStepsTakenByP1 = 1 // track where player is supposed to be at.
  var totalStepsTakenByP2 = 1

  var $circle = $('.circle') // circle img to indicate which player's turn

// Create rollDie Event
  var $dieButton = $('.dieButton')  // Create dice event
  $dieButton.on('click', rollDice)

  // create autoPlay event
  var $autoPlayButton = $('.auto-play')
  $autoPlayButton.on('click', autoPlayButton)
  var clear

  // Create reset event
  var $resetButton = $('.resetButton')
  $resetButton.on('click', resetButton)

  // Create audio event
  var $soundButton = $('.sound')
  $soundButton.on('click', playAudio)

  function playAudio () {
    document.getElementsByClassName('audio')[0].play()
  }

  function startPosition () {
    $('#1').append($player1) // grid 1
    $('#1').append($player2) // grid 1
  }

  function rollDice () {
    var randomDiceResult = 1 + Math.floor(Math.random() * 6)
    var $dieValue = $('.dieValue')
    $dieValue.text(`${randomDiceResult}`)
    playerTurn(randomDiceResult)
  }

  function playerTurn (randomDiceResult) {
    if (currentPlayer === $player1) {
      totalStepsTakenByP1 += randomDiceResult
      $player1.appendTo(`#${totalStepsTakenByP1}`) // move player 1 + dice value
      $circle.css('left', '147px') // indicate player2 turn
      painOrPleasureP1()

      if (randomDiceResult === 6) {
        currentPlayer = $player1 // if dice is 6 go again
        $circle.css('left', '25px')
      } else { currentPlayer = $player2 }
    } else if (currentPlayer === $player2) {
      totalStepsTakenByP2 += randomDiceResult
      $player2.appendTo(`#${totalStepsTakenByP2}`) // move player 1 + dice value
      painOrPleasureP2()
      $circle.css('left', '25px') // indicate player1 turn

      if (randomDiceResult === 6) {
        currentPlayer = $player2
        $circle.css('left', '147px')
      } else { currentPlayer = $player1 }
    }
    gameOver()
  }

  function gameOver () {
    if (totalStepsTakenByP1 >= 100) {
      alert('Player 1 has won!')
      resetButton()
    } else if (totalStepsTakenByP2 >= 100) {
      alert('Player 2 has won!')
      resetButton()
    }
  }

  function resetButton () {
    totalStepsTakenByP1 = 1
    totalStepsTakenByP2 = 1
    currentPlayer = $player1
    $player1.appendTo(`#${totalStepsTakenByP1}`)
    $player2.appendTo(`#${totalStepsTakenByP2}`)
    var $dieValue = $('.dieValue')
    $dieValue.text(0)
    clearInterval(clear)
  }

  function autoPlayButton () {
    clear = setInterval(rollDice, 1500)
  }

  function createTable () {
    var $tbl = $('#tbl')
    var id = 100
    var rowClass = 10
    // nested loop to create rows and columsn
    for (var r = 0; r < 10; r++) {
      var $row = $('<tr>') // create rows
      $row.attr('class', rowClass--) // give rows an individual class

      for (var c = 0; c < 10; c++) {
        var $column = $('<td>') // create column
        $column.css({ 'width': '50px', 'height': '50px'})
        $column.attr('id', id--) // give each individual column a number

        $column.attr('id') % 2 === 0 ? $column.css('backgroundColor', '#ffff00') : $column.css('backgroundColor', 'white') // giving grid bg colors.

        // reverse the numbering for even or odd rows.
        $row.each(function() {
          $(this).attr('class') % 2 === 0 ? $row.append($column) : $row.prepend($column)
        })
        $column.html(id + 1).addClass('cell')
      }
      $tbl.append($row)
    }
  }
  createTable()
  startPosition()

  // Using Array to input Snakes & Ladders
  var painAndPleasureArray = [0, 'ladder0', 0, 'ladder1', 0, 0, 'snake0', 0, 'ladder2', 0, // row 1
    'snake1', 0, 'ladder3', 'ladder1', 0, 0, 'snake0', 'ladder0', 'snake3', 'ladder4', // row 2
    0, 0, 0, 'snake5', 0, 0, 'ladder3', 'ladder5', 'snake1', 0, // row 3
    'ladder2', 0, 0, 'snake2', 0, 0, 0, 'ladder4', 0, 'ladder6', // row 4
    0, 0, 'snake4', 0, 0, 0, 0, 0, 0, 0,  // row 5
    'ladder7', 0, 0, 'snake2', 0, 0, 0, 0, 'ladder6', 0, // row 6
    0, 'snake3', 'ladder8', 'snake4', 0, 0, 'ladder7', 0, 0, 0, // row 7
    'ladder9', 0, 'snake6', 0, 'snake7', 0, 0, 'snake8', 0, 0, // row 8
    'ladder8', 0, 0, 'ladder5', 0, 0, 'snake5', 0, 0, 0, // row 9
    'ladder9', 0, 'snake6', 0, 'snake7', 0, 0, 0, 'snake8', 0] // row 10

// Player 1 Snakes & Ladders
  function painOrPleasureP1 () {
    var currentP1Index = totalStepsTakenByP1 - 1
    painAndPleasureArray.forEach(function (element) {
      // if length equal to 7, search for the next similar ladder word to find index
      if (painAndPleasureArray[currentP1Index] === element && element.length === 7) {
        totalStepsTakenByP1 = (painAndPleasureArray.indexOf(element, painAndPleasureArray.indexOf(element) + 1)) + 1
        $player1.appendTo(`#${totalStepsTakenByP1}`)
        // if length equal to 6, search for the next similar snake word to find index
      } else if (painAndPleasureArray[currentP1Index] === element && element.length === 6) {
        totalStepsTakenByP1 = (painAndPleasureArray.indexOf(element, painAndPleasureArray.indexOf(element) - 1)) + 1
        $player1.appendTo(`#${totalStepsTakenByP1}`)
      } else { return totalStepsTakenByP1 }
    })
  }

// Player 2 Snakes & Ladders
  function painOrPleasureP2 () {
    var currentP2Index = totalStepsTakenByP2 - 1
    painAndPleasureArray.forEach(function (element) {
      if (painAndPleasureArray[currentP2Index] === element && element.length === 7) {
        totalStepsTakenByP2 = (painAndPleasureArray.indexOf(element, painAndPleasureArray.indexOf(element) + 1)) + 1
        $player2.appendTo(`#${totalStepsTakenByP2}`)
      } else if (painAndPleasureArray[currentP2Index] === element && element.length === 6) {
        totalStepsTakenByP2 = (painAndPleasureArray.indexOf(element, painAndPleasureArray.indexOf(element) - 1)) + 1
        $player2.appendTo(`#${totalStepsTakenByP2}`)
      } else { return totalStepsTakenByP2 }
    })
  }
})


function play() {
  var audio = document.getElementById("audio2");
  audio.play();
}