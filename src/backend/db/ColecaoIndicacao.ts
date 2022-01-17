import firebase from "../Config";
import Indicacao from "../../core/Indicacao";
import IndicacaoRepositorio from "../IndicacaoRepositorio";

export default class ColecaoIndicacao implements IndicacaoRepositorio {
    #conversor = {
        toFirestore(indicacao: Indicacao) {
            return {
                nomeIndicador: indicacao.nomeIndicador,
                nomeJogo: indicacao.nomeJogo,
                descricao: indicacao.descricao
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions) : Indicacao {

            const dados = snapshot.data()

            return new Indicacao (dados.nomeIndicador, dados.nomeJogo, dados.descricao, snapshot.id) 

        }
    }

    async salvar(indicacao: Indicacao): Promise<Indicacao> {
        if (indicacao?.id) {
            await this.colecao().doc(indicacao.id).set(indicacao)
            return indicacao
        } else {
            const docRef = await this.colecao().add(indicacao)
            const doc = await docRef.get()
            return doc.data()
        }
    }

    
    private colecao() {
        return firebase.firestore().collection('indicacoes').withConverter(this.#conversor)
    }

}