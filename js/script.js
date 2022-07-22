let x = document.querySelector(".x")
let o = document.querySelector(".o")
let boxes = document.querySelectorAll(".box")
let buttons = document.querySelectorAll("#buttons-container button")
let messageContainer = document.querySelector('#message')
let messageText = document.querySelector("#message p")
let secondPlayer;

//Contador de jogadas
let player1 = 0
let player2 = 0


//Adicionando o evento de click aos boxes
for(let i =0; 1<boxes.length; i++){

//Quando alguem clica na caixa
    boxes[i].addEventListener("click", function(){

        let el = checkEl(player1, player2)

        //Verifica se já tem x ou o 
        if(this.childNodes.length==0){
            let cloneEl = el.cloneNode(true)
            this.appendChild(cloneEl)
    
            //Computar jogada
            if(player1 == player2){
            player1 ++
            }else{
                player2++
            }
        }
    })
}

//Define qual é o jogador
function checkEl(player1, player2) {
    if(player1==player2){
        //x
        el=x
    }else{
        el=o
        //o
    }
    return el
}

