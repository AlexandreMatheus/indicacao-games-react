export default function Titulo (props) {
    return (
        <div className="flex flex-col justify-center items-center ">
            <h1 className="px-5 py-2"> {props.children} </h1>
        </div>
    )
}