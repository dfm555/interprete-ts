class Variable {
    nombre:string;
    tipo:string;
    valor:any;

    constructor(nombre:string){
        this.nombre = nombre;
        this.tipo = '';
        this.valor = '';
    }

    contains(list:Array<this>):boolean{
       let  i;
        for (i = 0; i < list.length; i++) {
            if (list[i].nombre === this.nombre) {
                return true;
            }
        }

        return false;
    }

    

    toString(): string {
        return "ID => " + "Nombre: " + this.nombre + ", tipo : " + this.tipo + ", valor: " + this.valor; 
    }
}

export {Variable};