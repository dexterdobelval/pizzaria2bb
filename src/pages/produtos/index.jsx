// ferramenta para consumo de rotas ou endpoints do backend
import axios from 'axios'
// Hooks do react para controlar estados e renderização
import { useEffect, useState } from 'react';

const Produtos = () => {
    // estado com lista de pizzas
    const [pizzas, setPizzas] = useState([])
    // controla os efeitos colaterais da página
    useEffect(()=>{
        // axios capturando dados do endpoint
        // GET - busca dados do endpoint
        // then - método assíncrono, espera retorno do get
        // catch - captura e trata erro da requisição realizada
        axios.get("http://172.19.0.49/pizzariateste/api/v1/produto")
        .then(response=>{
            console.log(response.data.data)
            setPizzas(response.data.data)
        })
        .catch(errors=>{console.log(errors)})
    }, [])

    // Mapeamento das pizzas da lista (iteração)
    const listaPizzas = pizzas.map(pizza =>
                    <li key={pizza.id}>{pizza.nome}</li>);
    return(
    <>
        <h3>Listagem de Produtos</h3>
        <ul>
            {listaPizzas}
        </ul>
    </>
    )
}
export default Produtos