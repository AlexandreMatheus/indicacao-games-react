export default class Indicacao {
    #id: string
    #nomeIndicador: string;
    #nomeJogo: string;
    #descricao: string;

    constructor(nomeIndicador:string, nomeJogo:string, descricao: string, id:string = null) {
        this.#id = id
        this.#nomeIndicador = nomeIndicador
        this.#nomeJogo = nomeJogo
        this.#descricao = descricao
    }

    static void() {
        return new Indicacao('', '', '')
    }

    get id() {
        return this.#id
    }

    get nomeIndicador() {
        return this.#nomeIndicador
    }

    get nomeJogo() {
        return this.#nomeJogo
    }

    get descricao() {
        return this.#descricao
    }
}