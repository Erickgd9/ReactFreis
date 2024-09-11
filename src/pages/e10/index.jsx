import { Card } from "../../components/ex10_card/card.jsx";
import { Top } from "../../components/Top/top.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.scss";

export default function E10() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [situacao, setSituacao] = useState("");

  function calcweight() {
    let imc = peso / altura ** 2;

    let situa = "";
    if (imc > 25) {
      situa = "Acima do peso";
    } else if (imc >= 18.5) {
      situa = "Peso normal";
    }
    if (imc < 18.5) {
      situa = "Abaixo do peso";
    }
    const cardss = {
      altura: altura,
      peso: peso,
      situacao: situa,
    };

    let totalcards = situacao.slice();
    totalcards.push(cardss);
    setSituacao(totalcards);
  }
  
  function removecard(i) {
    let totalcards = situacao.slice()
    totalcards.slice(i, 1)

    setSituacao(totalcards)
  }

  return (
    <div className="pagina-e10 pagina">
      <Top />
      <div className="exercicio">
        <div className="titulo">
          <div className="texto">
            <Link to="/">
              <img
                className="voltar"
                src="./assets/images/voltar.png"
                alt="logo"
              />
            </Link>

            <h2>Exercício 10 - Calculo de IMC com histórico</h2>
          </div>
          <hr className="faixa" />
        </div>

        <div className="descricao">
          <p>
            Implemente um programa em Javascript que a partir da altura e do
            peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a
            tabela ao lado. Ao final, <br /> apresente o IMC e a situação
          </p>
        </div>

        <div className="formulario">
          <div className="campos">
            <div className="colum">
              <div className="campo">
                <div className="altura_peso">
                  <label>Altura</label>
                  <input type="text" placeholder="0" />
                </div>

                <div className="altura_peso">
                  <label>Peso</label>
                  <input type="text" placeholder="0" />
                </div>
              </div>
              <button className="executar" onClick={calcweight}>
                {" "}
                Executar{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card-container">
        <Card altura={altura} peso={peso} situa={situacao} />
      </div>
    </div>
  );
}
