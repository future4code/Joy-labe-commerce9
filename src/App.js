import React from "react";
//import './App.css';
import styled from 'styled-components';

const Header = styled.header`
background-color: rgb(60, 19, 153);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 0;
  padding-top:0;
  padding-bottom:0;
  height: 10%;

`
const Corpo=styled.body`
width: 100%;
padding: 0;
margin: 0;
background-color: black;`
const CardProduto =styled.div`
display: grid;
grid-template-rows: 3fr 1fr;
grid-template-columns: 1fr;
border-style: solid;
border-width: thin;
align-items: start;
justify-items: stretch;
`
const CardProdutoImg=styled.img`
width: 100%;
height: 200px;
`
const Tela = styled.div` height: 100vh;
display: flex;
flex-direction: column;`

const H1Tela=styled.h1`
margin-left: 0;
display: flex;
flex-direction: column;
align-items: center;
`
const ImgTela=styled.img`
height: 35px;
`
const Principal=styled.main`
min-height: 80%;
display: flex;`

const MnuVertical=styled.nav`
flex-basis: 250px;
  border-right-style: solid;
  border-right-width: thin;
  border-radius: 15px;`

const BotoesMnuVertical=styled.h3`
list-style-type: none;
  color:azure;
`

const PainelProdutos=styled.section`
flex-grow: 1;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(4, 1fr);
row-gap: 10px;
column-gap: 10px;
color: azure;`

const PainelProdutosh3=styled.h3`
display: flex;
flex-direction: column;
align-items: center;`

const PainelProdutosh4=styled.h4`
display: flex;
flex-direction: column;
align-items: center;
margin-left: 10px;
`

const Footer=styled.footer`
background: rgb(60, 19, 153);
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: 0 10px;`

const Footerh4=styled.h4`
margin-left: 20px;`

const Inputheader=styled.input`
border-radius:5px;
color:white`

export default function App() {
  const produto1 = "Produto1";
  const produto2 = "Produto2";
  const produto3 = "Produto3";
  const produto4 = "Produto4";
  const produto5 = "Produto5";
  const produto6 = "Produto6";
  const produto7 = "Produto7";
  const produto8 = "Produto8";

  function reproduzMensagem() {
    alert("O produto está adicionado no carrinho");

  }

  return (
    <Corpo>
      <Tela>
        <Header>
          <H1Tela>LabEcommerce</H1Tela>
          <Inputheader type="text" placeholder="Pesquisar" id="campoDeBusca" />
          <ImgTela src="https://cdn-icons-png.flaticon.com/512/126/126510.png"/>
        </Header>

        <Principal>
          <MnuVertical>
           
            <ul>
             <BotoesMnuVertical>Filtro</BotoesMnuVertical>
             <ImgTela src="https://pt.seaicons.com/wp-content/uploads/2015/11/filter-icon.png"/>

              <hr />
            </ul>
          </MnuVertical>
          
          <PainelProdutos>
           
            <CardProduto  onClick={reproduzMensagem}>
              <CardProdutoImg src="https://picsum.photos/100/200?a=2 " alt="" />
              <PainelProdutosh4>{produto2}</PainelProdutosh4>
              <PainelProdutosh3>39,99</PainelProdutosh3>
            </CardProduto>
            <CardProduto  onClick={reproduzMensagem}>
              <CardProdutoImg src="https://picsum.photos/100/200?a=2 " alt="" />
              <PainelProdutosh4>{produto2}</PainelProdutosh4>
              <PainelProdutosh3>39,99</PainelProdutosh3>
            </CardProduto>
            <CardProduto  onClick={reproduzMensagem}>
              <CardProdutoImg src="https://picsum.photos/100/200?a=2 " alt="" />
              <PainelProdutosh4>{produto2}</PainelProdutosh4>
              <PainelProdutosh3>39,99</PainelProdutosh3>
            </CardProduto>
            <CardProduto  onClick={reproduzMensagem}>
              <CardProdutoImg src="https://picsum.photos/100/200?a=2 " alt="" />
              <PainelProdutosh4>{produto2}</PainelProdutosh4>
              <PainelProdutosh3>39,99</PainelProdutosh3>
            </CardProduto>
            <CardProduto  onClick={reproduzMensagem}>
              <CardProdutoImg src="https://picsum.photos/100/200?a=2 " alt="" />
              <PainelProdutosh4>{produto2}</PainelProdutosh4>
              <PainelProdutosh3>39,99</PainelProdutosh3>
            </CardProduto>
            <CardProduto  onClick={reproduzMensagem}>
              <CardProdutoImg src="https://picsum.photos/100/200?a=2 " alt="" />
              <PainelProdutosh4>{produto2}</PainelProdutosh4>
              <PainelProdutosh3>39,99</PainelProdutosh3>
            </CardProduto>
            <CardProduto  onClick={reproduzMensagem}>
              <CardProdutoImg src="https://picsum.photos/100/200?a=2 " alt="" />
              <PainelProdutosh4>{produto2}</PainelProdutosh4>
              <PainelProdutosh3>39,99</PainelProdutosh3>
            </CardProduto>
          </PainelProdutos>
        </Principal>

        <Footer>
          <Footerh4></Footerh4>
        </Footer>
      </Tela>
    </Corpo>
  );
}