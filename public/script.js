//berisi player dari game
class Player{
    constructor(name, choosen) {
        this.name=name
        this.choosen=choosen
    }

    setChoosen(choosen) {
        this.choosen = choosen
    }

}

//berisi tampilan card 
const batu = document.getElementById('batu-p1');
batu.addEventListener('click', function onClick(event) {
  event.target.style.backgroundColor = 'rgba(196, 196, 196, 1)';
})

  const kertas = document.getElementById('kertas-p1');
  kertas.addEventListener('click', function onClick(event) {
    event.target.style.backgroundColor = 'rgba(196, 196, 196, 1)';
})

const gunting = document.getElementById('gunting-p1');
  gunting.addEventListener('click', function onClick(event) {
    event.target.style.backgroundColor = 'rgba(196, 196, 196, 1)';
})
const batu2 = document.getElementById('batu-p2');
batu2.addEventListener('click', function onClick(event) {
  event.target.style.backgroundColor = 'rgba(196, 196, 196, 1)';
})

  const kertas2 = document.getElementById('kertas-p2');
  kertas2.addEventListener('click', function onClick(event) {
    event.target.style.backgroundColor = 'rgba(196, 196, 196, 1)';
})

const gunting2 = document.getElementById('gunting-p2');
  gunting2.addEventListener('click', function onClick(event) {
    event.target.style.backgroundColor = 'rgba(196, 196, 196, 1)';
})

//ini untuk game flow
class Game{
    constructor(player1, player2) {
        this.player1 = player1
        this.player2 = player2
    }
    setResult(){
        const resultText = document.getElementById('result')
        console.log(this.player1.choosen, "Pilihan Player 1")
        console.log(this.player2.choosen, "Pilihan Player 2")
        let result = ''
        if (this.player1.choosen === this.player2.choosen){
           result ="Draw"
        } else if (this.player1.choosen ==='gunting' && this.player2.choosen ==='kertas'){
            result = "Player 1 WIN"
        } else if (this.player1.choosen ==='batu' && this.player2.choosen ==='gunting'){
            result = "Player 1 WIN"
        } else if (this.player1.choosen ==='kertas' && this.player2.choosen ==='batu'){
            result = "Player 1 WIN"
        } else{
            result = "Player 2 WIN"
        }
        resultText.innerHTML = result
    }
}

const guntingP1=document.getElementById('gunting-p1')
const batuP1=document.getElementById('batu-p1')
const kertasP1=document.getElementById('kertas-p1')
const guntingP2=document.getElementById('gunting-p2')
const batuP2=document.getElementById('batu-p2')
const kertasP2=document.getElementById('kertas-p2')
const refreshButton = document.getElementById('refresh')
const player = new Player('Player 1', null)
const player2 = new Player('Player 2', null)
const game = new Game(player, player2)

guntingP1.addEventListener('click', () => {
    player.setChoosen('gunting') 
})

batuP1.addEventListener('click', () => {
    player.setChoosen('batu')
})

kertasP1.addEventListener('click', () => {
    player.setChoosen('kertas')
})
guntingP2.addEventListener('click', () => {
    player2.setChoosen('gunting')
    game.setResult()    
})

batuP2.addEventListener('click', () => {
    player2.setChoosen('batu')
    game.setResult()
})

kertasP2.addEventListener('click', () => {
    player2.setChoosen('kertas')
    game.setResult()
})
refreshButton.addEventListener('click', () => {
    window.location.reload()
})