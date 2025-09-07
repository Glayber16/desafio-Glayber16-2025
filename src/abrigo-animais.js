import { Pessoa } from "./pessoa.js";
import { Animal } from "./animal.js";
class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const pessoa1 = new Pessoa(1, brinquedosPessoa1.split(","));
    const pessoa2 = new Pessoa(2, brinquedosPessoa2.split(","));
    const animais = [
      new Animal("Rex", "cão", ["RATO", "BOLA"]),
      new Animal("Mimi", "gato", ["BOLA", "LASER"]),
      new Animal("Fofo", "gato", ["BOLA", "RATO", "LASER"]),
      new Animal("Zero", "gato", ["RATO", "BOLA"]),
      new Animal("Bola", "cão", ["CAIXA", "NOVELO"]),
      new Animal("Bebe", "cão", ["LASER", "RATO", "BOLA"]),
      new Animal("Loco", "jabuti", ["SKATE", "RATO"])
    ];

    const resultado = []

    for(let nomeAnimal of ordemAnimais.split(",")){
      const animal = animais.find(a=> a.nome === nomeAnimal.trim())
      if(!animal){
        return {
          erro:"Animal inválido"
        }
      }
      const adotado1 = pessoa1.podeAdotar(animal);
      const adotado2 = pessoa2.podeAdotar(animal);

      if(adotado1 && !adotado2){
        pessoa1.adotar(animal);
        resultado.push(`${animal.nome} - pessoa 1`)
      }
      else if(!adotado1 && adotado2){
        pessoa2.adotar(animal);
        resultado.push(`${animal.nome} - pessoa 2`)
      }
      else{
        resultado.push(`${animal.nome} - abrigo`)
      }
    }
     resultado.sort()

    return { 
      lista: resultado 
    }
  }

  
}

export { AbrigoAnimais as AbrigoAnimais };
