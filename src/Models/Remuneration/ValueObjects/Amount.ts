export default class Amount{
    readonly value:number;
    constructor(value:number){
        if(value<0){
            throw new Error('The amount must be upper or equal than zero')
        }
        this.value = value;
    }
}