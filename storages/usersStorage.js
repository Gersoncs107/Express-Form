// This class lets us simulate interacting with a database

class UsersStorage {
    constructor(){
        this.storage = {},
        this.id = 0
    }

    addUser({firstName, lastName}){
        const id = this.id;
        this.storage[id] = {id, firstName, lastName};
    }
}