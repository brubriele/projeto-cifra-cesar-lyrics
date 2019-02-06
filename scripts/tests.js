function teste(calculado, esperado) {
  if (calculado === esperado) {
    console.log("Passou!");
    return true;
  }else {
    console.log("Deu Erro! " + calculado + " não é igual a " + esperado);
    return false;
  }
}

teste(encode('teste',27),'uftuf')