import Indicacao from "../core/Indicacao";

export default interface IndicacaoRepositorio {
    salvar(indicacao: Indicacao) : Promise<Indicacao>
}