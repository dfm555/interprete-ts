/*
/!**
 * Created by duber on 10/11/16.
 *!/
import {Stack} from './Stack';
class ArrayStack<E> implements Stack<E> {

    private data:E[];
    private size:number;

    constructor() {
        this.data = new Array();
        this.size = 0;
    }

    isEmpty():boolean {
        return this.size === 0;
    }

    protected isFull():boolean {
        return this.size === this.data.length;
    }

    peek():E {
        if (this.isEmpty()) {
            throw new Error('Estructura vacia');
        }
        return this.data[this.size - 1];
    }

    pop():E {
        if (this.isEmpty()) {
            throw new Error('Estructura vacia');
        }
        this.size--;
        return this.data[this.size];
    }

    push(target:E) {
        if (this.isFull()) {
            this.stretch();
        }

        this.data[this.size] = target;
        this.size++;
    }

    protected stretch():void {
        let newData:E[] = new Array();

        for (let i = 0; i < this.data.length; i++) {
            newData[i] = this.data[i];
        }

        this.data = newData;
    }

    fix():void {
        if (!this.isFull()) {
            let newData:E[] = new Array();

            for (let i = 0; i < this.size; i++) {
                newData[i] = this.data[i];
            }

            this.data = newData;
        }
    }

    getSize():number {
        return this.size;
    }

    get(index:number):E {
        return this.data[index - 1];
    }

    clear():void {
        this.data = new Array();
        this.size = 0;
    }

    contains(target:E):boolean {
        for (let i = 0; i < this.size; i++) {
            if (target.equals(this.data[i])) {
                return true;
            }
        }

        return false;
    }

}*/
