import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import useIndicacao from "../hooks/useIndicacao";


export default function Inicio () {

  const {salvarIndicacao, indicacao} = useIndicacao()

  return (
    <div className= {`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-red-500 to-black-200
      text-white
    `}>
      <Layout titulo="Indicação de games para live!!">
        <Formulario indicacao={indicacao} indicacaoCompleta={salvarIndicacao}/>
      </Layout>
    </div>
  )
}

