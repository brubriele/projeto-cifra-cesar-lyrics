// // window.cipher = {
// //   // ... 
// // };

// // Tentar Get a partir de addEventListener
// const getChar = str.charCodeAt[i]
// // const chave = 500;
// const alfabeto = 26;

// function encode(str, chave) {
//   for (i = 0; i < str.length; i++) {
//     let encode = (getChar - 97) + chave % alfabeto + 97
//     let asc = String.fromCharCode(encode)
//   }
// }

// let resultEncode = encode('Bruna', 5)

// function decode(encode) {
//   let charAsc = asc.charCodeAt(0)
//   let decode = (charAsc - 97) - chave % alfabeto + 97
//   let resultado = String.fromCharCode(decode)

//   for (i = 0; i < str.length; i++) {
//     let charAsc = asc.charCodeAt[i]
//     let decode = (charAsc - 97) - chave % alfabeto + 97
//     let resultado = String.fromCharCode(decode)
//   }
// }

// Acrescentar parâmetros e método para busca em document



function encode (){
  let mensagem = document.getElementById('msg').value;
  let chave = parseInt(document.getElementById('chave').value);
  let alfabeto = 26;
  let result = ""

  for (i = 0; i < mensagem.length; i++){
    let getChar = mensagem.charCodeAt(i);
    let encode = (getChar - 97) + chave % alfabeto + 97;
    let asc = String.fromCharCode(encode);

    
    let publicar = document.getElementById("resultado").innerHTML = result += asc;
    console.log(encode + publicar)
  }
}


// Reconstruir decode






































