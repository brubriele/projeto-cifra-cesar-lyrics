// LÓGICA PRINCIPAL

// Código da letra + Chave do deslocamento % alfabeto

// A B C D E F G H I J K L M 

// N O P Q R S T U V W X Y Z 



// Encriptografa
function encode() {

  
  let mensagem = document.getElementById('mensagem').value;
  let chave = document.getElementById('chave').value;

  // for (i=0; mensagem.length < i; i++){
  //   let encode = 
////////////////////////////////////
  // }


  
  let prepMensagem = mensagem.split("")
  let exibeCod = prepMensagem.map(b => b.charCodeAt() + parseInt(chave))
  document.getElementById("resultadoStr").innerHTML = exibeCod;
  // let exibeCifra= str.fromCharCode(exibeCod)
  // document.getElementById("cripto").innerHTML = "teste" exibeCifra;

}

// Mostra resultado cripografado, alteração

function decode() {

  let alfabeto = 26;
  let palavra = document.getElementById('palavra').value;
  let chave = document.getElementById('chave').value;
  let prepPalavra = palavra.split("")
  let exibeCod = prepPalavra.map(b => b.charCodeAt() + parseInt(chave) % alfabeto)
  document.getElementById("resultadoStr").innerHTML = exibeCod;
  // let exibeCifra= str.fromCharCode(exibeCod)
  // document.getElementById("cripto").innerHTML = "teste" exibeCifra;

}





