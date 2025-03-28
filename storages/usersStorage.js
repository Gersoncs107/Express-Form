// This class lets us simulate interacting with a database

class UsersStorage {
    constructor(){
        this.storage = {},
        this.id = 0
    }

    addUser({firstName, lastName}){
        const id = this.id;
        this.storage[id] = {id, firstName, lastName};
        this.id++
    }

    getUser(id){
        return Object.values(this.storage[id])
    }

    updateUser(id, {firstName, lastName}){
        this.storage[id] = {id, firstName, lastName}
    }

    deleteUser(id){
        delete this.storage[id]
    }
}

module.exports = new UsersStorage()