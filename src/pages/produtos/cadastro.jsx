// Hooks do react - estados e renderização
import { useState, useEffect } from 'react'
// css das páginas da pasta produtos
import './produtos.css'
// ferramenta de consumo de rotas, aqui para enviar dados ao servidor
import axios from 'axios'
const CadastroProduto = ()=>{
    // Estado para armazenar (getter e setter) - JSON
    const [dados, setDados] = useState({})
    // componente para montagem do objeto JavaScript
    const montaJson = () => {
        setDados({
            "nome":nome.value,
            "tipo":tipo.value,
            "precoVenda":parseFloat(preco.value),
            "descricao":descricao.value
        })
    }
    // 
    useEffect(()=>{
        axios.post("http://172.19.0.49/pizzariateste/api/v1/produto", 
            dados, {
                mode: 'no-cors',
                headers: {
                    "Accept":"*",
                    "Content-Type":"application/json"
                }
            })
        .then(response=>alert(response.data.status))
        .catch(errors=>console.log(errors))
    }, [dados])
    return (
        <div className="CadastroProduto">

            <input type="text" id="id" placeholder="0" disabled />
            <input type="text" id="nome" className="nome" placeholder="nome do produto"  />
            <input type="text" id="descricao" placeholder="descrição"  />
            <input type="text" id="tipo" placeholder="tipo do produto"  />
            <input type="text" id="preco" placeholder="0.00"  />
            <input type="text" id="categoria_id" value="1" disabled  />

            <input type="button" value={"Cadastrar"} 
                onClick={()=>montaJson()}/>
        </div>
    )
}
export default CadastroProduto