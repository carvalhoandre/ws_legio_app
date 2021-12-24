export default class Produto {

    constructor() {
        this.id = 0;
        this.name = '';
        this.checket = false;
        this.ids = [];
        this.arrayLegios = [];
    }

    salvar(id, name) {
        let newLegio = this.lerDados(id, name);
        this.arrayLegios = newLegio;
    }

    cancelar() {
        let newArray = [] 
        this.arrayLegios = newArray 
    }

    lerDados(id, name) {
        let legio = {}

        legio.name = name
        legio.id = id

        return legio
    }

    getCheket() {
        return this.checket
    }

    setCheket() {
        let newChecket = !this.checket
        return this.checket = newChecket
    }

    setId(id) {
        this.id = id;
    }

    setIds(id) {
        this.ids.push(id)
    }

    getIds() {
        return this.ids
    }

    setName(name) {
        this.name = name;
    }

    removeIds(id) {
        var index = this.ids.indexOf(id);
        if (index > -1) {
            this.ids.splice(index, 1);
        }
    }
}