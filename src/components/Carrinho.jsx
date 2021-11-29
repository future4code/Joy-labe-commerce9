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

            <Card linkImagem={'http://astro-rockets.surge.sh/static/media/03_foguete_junior.d266e8ac.jpg'} tituloDoVideo={"Traje espacial"} preco={29.99}>

            </Card>
            <Card linkImagem={'http://astro-rockets.surge.sh/static/media/06_nave_megalodon.2e95d729.jpg'} tituloDoVideo={"Nave Megalodon"} preco={29.99}>

            </Card>
            <Card linkImagem={'http://astro-rockets.surge.sh/static/media/05_nave_classic.e5b4aa75.jpg'} tituloDoVideo={"Nave Classic"} preco={29.99}>

            </Card>
            <Card linkImagem={'http://astro-rockets.surge.sh/static/media/03_foguete_junior.d266e8ac.jpg'} tituloDoVideo={"Foguete Junior"} preco={29.99} >

            </Card>
            <Card linkImagem={'data:image/jpeg;base64,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'} tituloDoVideo={'Cápsula Mini'} preco={29.99}>

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