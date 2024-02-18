/* Passo a passo 
    - criar a function e colocar as variáveis dentro dela
    - após criar, chamar a função no html (ambas com o mesmo nome)
    - para saber a hora do dia, temos que usar duas variáveis
        var data = new Date()
        var hora = data.getHours()
    - para chamar a mensagem, usar a id da mensagem em seguida do inner.html
    - img.src = 'img/ + nome da foto
    
*/


function carregar () {

var msgm = document.getElementById('msgm')
var img = document.getElementById('imagem')
var data = new Date();
//var hora = data.getHours()
var hora = 21


msgm.innerHTML=`Agora são ${hora}h`

if(hora >= 0 && hora < 12){
    img.src = 'img/manhã-fotor-20240216185211.png'
    
} else if (hora >= 12 && hora <= 18) {
    console.log('Boa tarde')
    img.src = 'img/tarde-fotor-20240216185248.png'
} else {
    img.src = 'img/noite-fotor-20240216185038.png'
}


 

}

