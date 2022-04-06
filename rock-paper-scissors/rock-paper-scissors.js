// you need to create selectors to update the scores and the moves being displayed
// you also need a selector for your move selection buttons
// you need a random selection function for your computer to pick a move each turn
// you need to update the display area to show your move for each turn
// you need a function for win/loss/tie scenarios
// you need an if/else if/else statement for each case of the game and to invoke the correct functions in each case
const humanScore = document.getElementById('humanScore')
let humanPoints = 0

const compScore = document.getElementById('compScore')
let compPoints = 0

const message = document.getElementById('message')


const playGame = function(playerChoice){
    let num = Math.floor(Math.random()*3)
    let compChoice = ''
    num === 0 ? compChoice = 'rock' : num === 1 ? compChoice =  'paper': compChoice = 'scissors'

    if(playerChoice === 'paper'){
        document.getElementById('humanChoice').className = 'fas fa-hand-paper'
        if(compChoice === 'rock'){
            humanPoints += 1
            message.innerText = 'You\'ve won!'
            humanScore.innerText = 'Human: ' + humanPoints
            document.getElementById('compChoice').className = 'fas fa-hand-rock'
        }else if(compChoice === 'scissors'){
            message.innerText = 'You\'ve lost.'
            compPoints += 1
            compScore.innerText = 'Computer: ' + compPoints
            document.getElementById('compChoice').className = 'fas fa-hand-scissors'
        }else{
            message.innerText = 'It\'s a draw'
            document.getElementById('compChoice').className = 'fas fa-hand-paper'
        }
    }else if(playerChoice === 'scissors'){
        document.getElementById('humanChoice').className = 'fas fa-hand-scissors'
        if(compChoice === 'rock'){
            message.innerText = 'You\'ve lost.'
            compPoints += 1
            compScore.innerText = 'Computer: ' + compPoints
            document.getElementById('compChoice').className = 'fas fa-hand-rock'
        }else if(compChoice === 'paper'){
            message.innerText = 'You\'ve won!'
            humanPoints += 1
            humanScore.innerText = 'Human: ' + humanPoints
            document.getElementById('compChoice').className = 'fas fa-hand-paper'
        }else{
            message.innerText = 'It\'s a draw'
            document.getElementById('compChoice').className = 'fas fa-hand-scissors'
        }
    }else if(playerChoice === 'rock'){
        document.getElementById('humanChoice').className = 'fas fa-hand-rock'
        if(compChoice === 'paper'){
            message.innerText = 'You\'ve lost.'
            compPoints += 1
            compScore.innerText = 'Computer: ' + compPoints
            document.getElementById('compChoice').className = 'fas fa-hand-paper'
        }else if(compChoice === 'scissors'){
            message.innerText = 'You\'ve won!'
            humanPoints += 1
            humanScore.innerText = 'Human: ' + humanPoints
            document.getElementById('compChoice').className = 'fas fa-hand-scissors'
        }else{
            message.innerText = 'It\'s a draw'
            document.getElementById('compChoice').className = 'fas fa-hand-rock'
        }
    }
}

