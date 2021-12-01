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
    width:250px;
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
const Filter = styled.summary`
text-align: center;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 1rem;
    list-style: none;
    display: flex;
    flex-direction:row;
    justify-content:center;
`
const BotoesMnuVertical = styled.h3`
list-style-type: none;
  color:black;
`
const ImgTela = styled.img`
height: 25px;
margin-top: 25px;
`
const naves = [
  {
    id: 1,
    name: 'Ônibus Espacial Pluto',
    value: 100000,
    imageUrl: <img src='https://istoe.com.br/wp-content/uploads/sites/14/istoeimagens/imagens/mi_1846228370645925.jpg'/>,
    quantidade: 0,
  },
  {
    id: 2,
    name: 'Nave Megalodon',
    value: 1200000,
    imageUrl: <img src='http://astro-rockets.surge.sh/static/media/06_nave_megalodon.2e95d729.jpg' />,
    quantidade: 0,
  },
  {
    id: 3,
    name: 'Nave Classic',
    value: 3500000,
    imageUrl: <img src='http://astro-rockets.surge.sh/static/media/05_nave_classic.e5b4aa75.jpg' />,
    quantidade: 0,
  },
  {
    id: 4,
    name: 'Foguete Junior',
    value: 400000,
    imageUrl: <img src='http://astro-rockets.surge.sh/static/media/03_foguete_junior.d266e8ac.jpg' />,
    quantidade: 0,
  },
  {
    id:5,
    name: 'Foguete Single',
    value: 400000,
    imageUrl: <img src='http://astro-rockets.surge.sh/static/media/01_foguete_single.8f1bf138.jpg' />,
    quantidade: 0,
        },
        {
    id: 6,
    name: 'Foguete Blaster',
    value: 400000,
    imageUrl: <img src='http://astro-rockets.surge.sh/static/media/04_foguete_blaster.45811de2.jpg'/>,
    quantidade: 0,
        },
      ];

export default class App extends React.Component{
  state = {
    carrinho: [],
    precoMinimo: "",
    precoMaximo: Infinity,
    sortingParameter: "crescente",
    order: 1,
    inputBusca: '',
    remover: '',
    itemNovo: '',
  };

    render(){
    
        return(
          <Corpo>
          <Tela>
         <Header></Header>
          <Ordenacao/>
            <Principal>
              <MnuVertical>
              <Filter>
              <ImgTela src="https://pt.seaicons.com/wp-content/uploads/2015/11/filter-icon.png" />
              <BotoesMnuVertical>Filtro</BotoesMnuVertical>
            </Filter>
                <Filtro>
                
                </Filtro>
              </MnuVertical>
    
    
              <PainelProdutos>
    <Card linkImagem={'https://3.bp.blogspot.com/-LiIBwWqp4Ek/U-GeoiNXvyI/AAAAAAAABwo/YCVHpesRkTM/s1600/81J1NrFjYoL._SL1500_.jpg' } tituloNave={'Milano'} preco={50.59}>
    
    </Card>
    <Card linkImagem={'http://astro-rockets.surge.sh/static/media/06_nave_megalodon.2e95d729.jpg'} tituloNave={"Nave Megalodon"} preco={29.99}>
   
    </Card>
    <Card linkImagem={'http://astro-rockets.surge.sh/static/media/05_nave_classic.e5b4aa75.jpg'} tituloNave={"Nave Classic"} preco={29.99}>
   
    </Card>
    <Card linkImagem={'http://astro-rockets.surge.sh/static/media/03_foguete_junior.d266e8ac.jpg'} tituloNave={"Foguete Junior"} preco={29.99} />
    
    <Card linkImagem={'http://astro-rockets.surge.sh/static/media/01_foguete_single.8f1bf138.jpg'} tituloNave={'Foguete Single'} preco={29.99}>

    </Card>
    <Card linkImagem={'http://astro-rockets.surge.sh/static/media/04_foguete_blaster.45811de2.jpg'} tituloNave={"Foguete Blaster"} preco={29.99}>
 
    </Card>
    </PainelProdutos>
                
             
            </Principal>
            <Footer></Footer>
          </Tela>
        </Corpo>
        )
  }
  
  }

