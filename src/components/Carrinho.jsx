import React from "react";
import styled from 'styled-components';
import Card from './Card'
import Header from './Header'
import Filtro from './Filtro'
import Footer from './Footer'


const Corpo = styled.body`
width: 100%;
padding: 0;
margin: 0;
`
const Tela = styled.div` height: 100vh;
display: flex;
flex-direction: column;`

const Principal = styled.main`
min-height: 80%;
display: flex;`

const MnuVertical = styled.details`

  display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content:space-between;
    border-right-style: solid;
    border-right-width: thin;
    width:150px;
    margin: 0px 10px;
`

const PainelProdutos = styled.section`
flex-grow: 1;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(4, 1fr);
row-gap: 10px;
column-gap: 10px;
color: black;
margin:10px;
`


export default function App() {
 

  return (
    <Corpo>
      <Tela>
        <Header />
        <Principal>
          <MnuVertical>
            <Filtro>
            
            </Filtro>
          </MnuVertical>
          <PainelProdutos>

           

          </PainelProdutos>
        </Principal>

        <Footer></Footer>
      </Tela>
    </Corpo>
  );
}