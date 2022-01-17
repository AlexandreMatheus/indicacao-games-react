interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray' | 'red'
    className?: string
    children: any
    onClick?: () => void 
}

export default function Botao (props: BotaoProps) {
    const cor = props.cor ?? 'gray'
    
    return (
        <button className={`
            bg-gradient-to-r from-red-500 to-black
            text-white px-4 py-2 rounded-md 
            ${props.className}
        `}
        onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}