
function encode (){
  let mensagem = document.getElementById('msg').value;
  let chave = parseInt(document.getElementById('chave').value);
  let alfabeto = 26;
  let result = ""

  for (i = 0; i < mensagem.length; i++){
    let getChar = mensagem.charCodeAt(i);
    let encode = (getChar - 97) + chave % alfabeto + 97;
    let asc = String.fromCharCode(encode);
    let publicar = document.getElementById('resultado').innerHTML = result += asc;
   
  }
}

function decode(){
  let mensagem = document.getElementById('resultado').value;
  let chave = parseInt(document.getElementById('chaveDecode').value);
  let alfabeto = 26;
  let result = ""

  for (i = 0; i < mensagem.length; i++){
    let getChar = mensagem.charCodeAt(i);
    let encode = (getChar - 97) - chave % alfabeto + 97;
    let asc = String.fromCharCode(encode);
    let publicar = document.getElementById("copyArea").innerHTML = result += asc;
  }
}




































