function encode (mensagem, chave){
  
  let alfabeto = 26;
  let result = ""

  for (i = 0; i < mensagem.length; i++){
    let getChar = mensagem.charCodeAt(i);
    let encode = (getChar - 97) + chave % alfabeto + 97;
    let asc = String.fromCharCode(encode);
    let publicar = result += asc;
  }
}

function decode(resultado, chave){
  
  let alfabeto = 26;
  let result = ""

  for (i = 0; i < resultado.length; i++){
    let getChar = resultado.charCodeAt(i);
    let encode = (getChar - 97) - chave % alfabeto + 97;
    let asc = String.fromCharCode(encode);
    let publicar = result += asc;
  }
}



function teste(calculado, esperado) {
  if (calculado === esperado) {
    console.log("Passou!");
    return true;
  }else {
    console.log("Deu Erro! " + calculado + " não é igual a " + esperado);
    return false;
  }
}
