export default class RemunerationsNotFound extends Error{
    constructor(day:string) {
        super(`Day ${day} doesn't exist`);
    }
}