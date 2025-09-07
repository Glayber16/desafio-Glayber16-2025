class Pessoa {
    constructor(id, brinquedos) {
        this.id = id;
        this.brinquedos = brinquedos;
        this.animaisAdotados =[];
    }

    podeAdotar(animal){
        if (this.animaisAdotados.length >= 3) {
        return false;
        }
        return animal.podeSerAdotadoPor(this);
    } 
    

    adotar(animal){
        if(this.podeAdotar(animal)){
            this.animaisAdotados.push(animal)
            return true
        }
        return false;
    }
}
export { Pessoa as Pessoa };
