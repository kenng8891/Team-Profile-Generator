//create employee 
class employee {
    constructor(name, id, email) {
    this.name = name
    this.id = id
    this.email = email
}
getName() {
    return this.Name
}
getId () {
    return this.id
}
getEmail() {
    return this.email
}
getRole() {
    return "Employee"
}
}

module.exports = employee