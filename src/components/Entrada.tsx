interface EntradaProps {
    texto: string
    valor: any
    valorMudou?: (valor: any) => void
    className: string
    required: boolean
    typeInput: 'input' | 'textArea'
}

export default function Entrada (props: EntradaProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-4">{props.texto + (props.required ? '*' : '') + ':'}</label>
            {props.typeInput === 'input' ? (<input 
                type={'text'}
                value={props.valor}
                onChange={e => props.valorMudou?.(e.target.value)}
                required={props.required}
                className={`border border-black rounded-lg focus:outline-none bg-gray-10 px-4 py-2 ` }
            />) : (
                <textarea 
                maxLength={500}
                value={props.valor}
                onChange={e => props.valorMudou?.(e.target.value)}
                required={props.required}
                className={`border border-black rounded-lg focus:outline-none bg-gray-10 px-4 py-2`} />
            )}
            
        </div>
    )
}