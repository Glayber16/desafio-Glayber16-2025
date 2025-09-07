class Animal {
  constructor(nome, tipo, brinquedosFavoritos) {
    this.nome = nome;                     
    this.tipo = tipo;                     
    this.brinquedosFavoritos = brinquedosFavoritos; 
  }


  podeSerAdotadoPor(pessoa) {
    if (this.nome === "Loco") {
      return pessoa.animaisAdotados.length > 0;
    }    
    let i = 0;
    for (let brinquedo of pessoa.brinquedos){
      if (brinquedo === this.brinquedosFavoritos[i]){
        i++;
        if(i === this.brinquedosFavoritos.length){
          return true;
        }
      }
    }
    return false
  }
}
export { Animal as Animal };