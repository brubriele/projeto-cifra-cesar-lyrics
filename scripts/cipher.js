
function getEncode(){
  let mensagem = document.getElementById('msg').value;
  let chave = parseInt(document.getElementById('chave').value);
  let encodeResult = encode(mensagem, chave); document.getElementById('resultado').value = encodeResult;
}

function getDecode(){
  let resultado = document.getElementById('resultado').value;
  let chave = parseInt(document.getElementById('chaveDecode').value);
  let decodeResult = decode(resultado, chave);
  document.getElementById("copyArea").value = decodeResult;
}


function encode(mensagem, chave){
  
  let alfabeto = 26;
  let result = ""

  for (i = 0; i < mensagem.length; i++){
    let getChar = mensagem.charCodeAt(i);
    let encode = (getChar - 97) + chave % alfabeto + 97;
   
    let asc = String.fromCharCode(encode);
    result = result + asc;
    
   
  }
  return result
}


function decode(resultado, chave){

  let alfabeto = 26;
  let result = ""

  for (i = 0; i < resultado.length; i++){
    let getChar = resultado.charCodeAt(i);
    let encode = (getChar - 97) - chave % alfabeto + 97;
    let asc = String.fromCharCode(encode);
     result = result + asc;
    
  }
  return result
}