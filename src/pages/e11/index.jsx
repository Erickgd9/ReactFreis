import { Top } from "../../components/Top/top.jsx"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './index.scss'
 
export default function E11() {
    const [valor, setValor] = useState(0);
    const [tabuadas, setTabuadas] = useState([]);

    function calcularTabuada() {
        let tabuada = []

        for (let i = 0; i <= 10; i++) {
            let resultado = i * valor
            let tabuadaTexto = `${valor} x ${i} = ${resultado}`

            tabuada.push(tabuadaTexto)
        }

        setTabuadas(tabuada)
    }

    return (
        <div className='pagina-e11 pagina'>
            <Top/>
            <div className='exercicio'>
                <div className='titulo'>
                    <div className='texto'>
                    <Link to='/'>
                    <img
              className="voltar"
              src="./assets/images/voltar.png"
              alt="logo"/>
                    </Link>
                        <h2>Exercício 11 - Tabuada</h2>
                    </div>
                    <div className='faixa roxa'/>
                </div>
                <div className='descricao'>
                    <p>Implemente um programa em Javascript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato ”A x B = X”.</p>
                </div>
                <div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Tabuada do:</label>
                            <input 
                                placeholder='0' 
                                onChange={e => setValor(e.target.value)} 
                            />
                        </div>
                        
                        <button 
                            className='executar' 
                            onClick={calcularTabuada}>Executar</button>
                    </div>

                    {
                        tabuadas.map(
                            linha => <p>{linha}</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
