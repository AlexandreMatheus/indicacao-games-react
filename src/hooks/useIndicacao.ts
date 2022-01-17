import { useEffect, useState } from "react"
import Indicacao from "../core/Indicacao"
import IndicacaoRepositorio from "../backend/IndicacaoRepositorio"
import ColecaoIndicacao from "../backend/db/ColecaoIndicacao"

export default function useIndicacao() {
    const [indicacao, setIndicacao] = useState<Indicacao>(Indicacao.void())
    const repo: IndicacaoRepositorio = new ColecaoIndicacao()

    useEffect(resetDados, [])

    async function salvarIndicacao(indicacao: Indicacao) {
        await repo.salvar(indicacao)
        resetDados()
    }

    function resetDados() {
        setIndicacao(Indicacao.void())
    }

    return {
        indicacao, setIndicacao, salvarIndicacao
    }
}