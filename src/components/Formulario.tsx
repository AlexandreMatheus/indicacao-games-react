import { useState } from "react";
import Indicacao from "../core/Indicacao";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    indicacao: Indicacao
    indicacaoCompleta?: (indicacao: Indicacao) => void
}

export default function Formulario (props: FormularioProps) {
    const [nomeIndicador, setNomeIndicador] = useState(props.indicacao?.nomeIndicador ?? '')
    const [nomeJogo, setNomeJogo] = useState(props.indicacao?.nomeJogo ?? '')
    const [descricao, setDescricao] = useState(props.indicacao?.descricao ?? '')

    function enviarDados() {
        props.indicacaoCompleta?.(new Indicacao(nomeIndicador, nomeJogo, descricao))

        setNomeIndicador('')
        setNomeJogo('')
        setDescricao('')
    }

    return (
        <div>
            <Entrada valor={nomeIndicador} typeInput="input" texto="Seu Nome" required={false} valorMudou={setNomeIndicador} className="mb-4"/>
            <Entrada valor={nomeJogo} typeInput="input" texto="Nome do jogo" required={true} valorMudou={setNomeJogo} className="mb-4"/>
            <Entrada valor={descricao} typeInput="textArea" texto="Descrição" required={true} valorMudou={setDescricao} className="mb-4"/>
            <div className="flex mt-7 justify-center ">
                <Botao cor="red" className="mr-2" onClick={() => enviarDados()}> Enviar</Botao>
            </div>
        </div>

        
    )
}