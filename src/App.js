import React from "react";
import styled from 'styled-components';
import Card from './components/Card'
import Header from './components/Header'
import Filtro from './components/Filtro'
import Footer from './components/Footer'
import Ordenacao from './components/Ordenacao'

const Corpo = styled.div`
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
    name: 'Milano',
    value: 100000,
    imageUrl: 'https://3.bp.blogspot.com/-LiIBwWqp4Ek/U-GeoiNXvyI/AAAAAAAABwo/YCVHpesRkTM/s1600/81J1NrFjYoL._SL1500_.jpg',
    quantidade: 0,
  },
  {
    id: 2,
    name: 'Nave Megalodon',
    value: 1200000,
    imageUrl: 'http://astro-rockets.surge.sh/static/media/06_nave_megalodon.2e95d729.jpg',
    quantidade: 0,
  },
  {
    id: 3,
    name: 'Nave Classic',
    value: 3500000,
    imageUrl: 'http://astro-rockets.surge.sh/static/media/05_nave_classic.e5b4aa75.jpg',
    quantidade: 0,
  },
  {
    id: 4,
    name: 'Foguete Junior',
    value: 400000,
    imageUrl: 'http://astro-rockets.surge.sh/static/media/03_foguete_junior.d266e8ac.jpg',
    quantidade: 0,
  },
  {
    id: 5,
    name: 'Foguete Single',
    value: 400000,
    imageUrl: 'http://astro-rockets.surge.sh/static/media/01_foguete_single.8f1bf138.jpg',
    quantidade: 0,
  },
  {
    id: 6,
    name: 'Foguete Blaster',
    value: 400000,
    imageUrl: 'http://astro-rockets.surge.sh/static/media/04_foguete_blaster.45811de2.jpg',
    quantidade: 0,
  },
]

export default class App extends React.Component {
  state={
        query:"" ,
          minPrice: "",
          maxPrice: "", 
      }

buscaNome=(e)=>{
  this.setState({query: e.target.value})
}

updateMinPrice = (ev) => {
  this.setState({
     minPrice: ev.target.value
  })
}

updateMaxPrice = (ev) => {
  this.setState({
     maxPrice: ev.target.value
  })
}

  render() {

    return (
      <Corpo>
        <Tela>
         
          <Header query={this.state.query} buscaNome={this.buscaNome}/>
         
          <Ordenacao />
         
          <Principal>
            <MnuVertical>    
         
            <Filter>
					<ImgTela src="https://pt.seaicons.com/wp-content/uploads/2015/11/filter-icon.png" />
					<BotoesMnuVertical>Filtro</BotoesMnuVertical>

				</Filter>
        
            <Filtro
            updateMinPrice={this.updateMinPrice}
            updateMaxPrice={this.updateMaxPrice}
            minPrice={this.state.minPrice}
            maxPrice={this.state.maxPrice}
                        />
            

            </MnuVertical>

            <PainelProdutos>
              {naves.filter(nave=>{
              return nave.name.toLowerCase().includes(this.state.query.toLowerCase())
              })
            .filter(naves => {
               return this.state.minPrice === "" || naves.value >= this.state.minPrice
            })
            .filter(naves => {
               return this.state.maxPrice === "" || naves.value <= this.state.maxPrice
            })
              .map((nave) =>
                <Card name={nave.name}
                  imageUrl={nave.imageUrl}
                  value={nave.value} />
              )}

            </PainelProdutos>

          </Principal>
          <Footer></Footer>
        </Tela>
      </Corpo>
    )
  }

}

