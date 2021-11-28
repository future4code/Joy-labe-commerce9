import React from "react";
//import './App.css';
import styled from 'styled-components';
import Card from './components/Card'

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

`


const Tela = styled.div` height: 100vh;
display: flex;
flex-direction: column;`

const H1Tela=styled.h1`
margin-left: 0;
display: flex;
flex-direction: column;
align-items: center;
cursor:pointer;
`
const ImgTela=styled.img`
height: 35px;
`
const Principal=styled.main`
min-height: 80%;
display: flex;`

const MnuVertical=styled.details`

  display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content:space-between;
    border-right-style: solid;
    border-right-width: thin;
    width:150px;
    margin: 0px 10px;
`

const BotoesMnuVertical=styled.h3`
list-style-type: none;
  color:black;
`

const PainelProdutos=styled.section`
flex-grow: 1;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(4, 1fr);
row-gap: 10px;
column-gap: 10px;
color: black;
margin:10px;
`

const Footer=styled.footer`
background: rgb(60, 19, 153);
  color: black;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: 0 10px;`

const Footerh4=styled.h4`
margin-left: 20px;`

const Inputheader=styled.input`
width: 30rem;
    height: 2rem;
    border-radius: 20px;
    background-color: rgb(255, 255, 255);
    border: none;
    padding: 0px 2rem;`

const Filtro=styled.summary`
text-align: center;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 1rem;
    list-style: none;
    display: flex;
`

export default function App() {

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
           
            <Filtro>
             <BotoesMnuVertical>Filtro</BotoesMnuVertical>
             <ImgTela src="https://pt.seaicons.com/wp-content/uploads/2015/11/filter-icon.png"/>

             
            </Filtro>
            
          </MnuVertical>
          
          <PainelProdutos>
           
            <Card onClick={reproduzMensagem} numeroDaImagem={5} tituloDoVideo={"Vídeo da Torre"} preco={29.99}>
              
            </Card>
            <Card onClick={reproduzMensagem} numeroDaImagem={1} tituloDoVideo={"Vídeo da Torre"} preco={29.99}>
              
            </Card>
            <Card onClick={reproduzMensagem} numeroDaImagem={7} tituloDoVideo={"Vídeo da Torre"} preco={29.99}>
              
            </Card>
            <Card onClick={reproduzMensagem} numeroDaImagem={8} tituloDoVideo={"Vídeo da Torre"} preco={29.99} >
              
            </Card>
            <Card onClick={reproduzMensagem} numeroDaImagem={3} tituloDoVideo={"Vídeo da Torre"} preco={29.99}>
              
            </Card>
            <Card onClick={reproduzMensagem} numeroDaImagem={2} tituloDoVideo={"Vídeo da Torre"} preco={29.99}>
              
            </Card>
           
          </PainelProdutos>
        </Principal>

        <Footer>
          <Footerh4></Footerh4>
        </Footer>
      </Tela>
    </Corpo>
  );
}