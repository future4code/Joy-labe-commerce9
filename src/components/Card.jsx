import React from 'react';
import styled from 'styled-components';

const CardProduto =styled.div`
display: grid;
grid-template-rows: 3fr 1fr;
grid-template-columns: 1fr;
border-style: none;
border-radius:4px;
border-width: thin;
align-items: start;
justify-items: center;
box-shadow: rgb(163 163 163) 2px 2px 5px;
`
const PainelProdutosh3=styled.h3`
display: flex;
flex-direction: column;
align-items: center;`

const PainelProdutosh4=styled.h4`
display: flex;
flex-direction: column;
align-items: center;
`
const CardProdutoImg=styled.img`
width: 100%;
height: 200px;
`
const BotaoAdicionarCarrinho=styled.button`
margin-top: 8px;
margin-bottom: 10px;
width: 85%;
padding: 0.5rem 0px;
border-radius: 5px;
border: 1px solid rgb(240, 194, 68);
background-color: rgb(255, 255, 255);
cursor:pointer;
:hover {
  background-color: #f0c244;
}
`
export default class App extends React.Component {

render ()  {

    return(
        <div>
           <CardProduto>
              <CardProdutoImg src={this.props.imageUrl}
                alt={this.props.tituloNave} />
              <PainelProdutosh4>{this.props.name}</PainelProdutosh4>
              <PainelProdutosh3>{this.props.value}</PainelProdutosh3>
              <BotaoAdicionarCarrinho key={this.props.id} onClick={this.props.adicionarProduto}>Adicionar ao Carrinho</BotaoAdicionarCarrinho>
            </CardProduto>

        </div>
    )

}



}


