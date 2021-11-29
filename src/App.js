import React from "react";
import styled from 'styled-components';
import Card from './components/Card'
import Header from './components/Header'
import Filtro from './components/Filtro'
import Footer from './components/Footer'
import Ordenacao from './components/Ordenacao'

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
    text-align:center;
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
     <Header/>
      <Ordenacao/>
        <Principal>
          <MnuVertical>
            <Filtro>
            
            </Filtro>
          </MnuVertical>

          <PainelProdutos>

            <Card linkImagem={'https://istoe.com.br/wp-content/uploads/sites/14/istoeimagens/imagens/mi_1846228370645925.jpg'} tituloDoVideo={"Traje espacial"} preco={29.99}>

            </Card>
            <Card linkImagem={'http://astro-rockets.surge.sh/static/media/06_nave_megalodon.2e95d729.jpg'} tituloDoVideo={"Nave Megalodon"} preco={29.99}>

            </Card>
            <Card linkImagem={'http://astro-rockets.surge.sh/static/media/05_nave_classic.e5b4aa75.jpg'} tituloDoVideo={"Nave Classic"} preco={29.99}>

            </Card>
            <Card linkImagem={'http://astro-rockets.surge.sh/static/media/03_foguete_junior.d266e8ac.jpg'} tituloDoVideo={"Foguete Junior"} preco={29.99} >

            </Card>
            <Card linkImagem={'http://astro-rockets.surge.sh/static/media/01_foguete_single.8f1bf138.jpg'} tituloDoVideo={'Foguete Single'} preco={29.99}>

            </Card>
            <Card linkImagem={'http://astro-rockets.surge.sh/static/media/04_foguete_blaster.45811de2.jpg'} tituloDoVideo={"Foguete Blaster"} preco={29.99}>

            </Card>

          </PainelProdutos>
        </Principal>

        <Footer></Footer>
      </Tela>
    </Corpo>
  );
}