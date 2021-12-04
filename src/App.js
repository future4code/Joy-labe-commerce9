import React from "react";
import styled from 'styled-components';
import Card from './components/Card'
import Header from './components/Header'
import Filtro from './components/Filtro'
import Footer from './components/Footer'
import Ordenacao from './components/Ordenacao'
import Carrinho from './components/Carrinho/Carrinho'

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
    value: 100,
    imageUrl: 'https://3.bp.blogspot.com/-LiIBwWqp4Ek/U-GeoiNXvyI/AAAAAAAABwo/YCVHpesRkTM/s1600/81J1NrFjYoL._SL1500_.jpg',
    descricao:"A Milano é uma nave Ravager M e a principal espaçonave usada pelos Guardiões da Galáxia para voos interestelares para os mundos."
  },
  {
    id: 2,
    name: 'Nave Megalodon',
    value: 1200,
    imageUrl: 'http://astro-rockets.surge.sh/static/media/06_nave_megalodon.2e95d729.jpg',
    descricao:"Comporta até 5 passageiros em uma viagem extremamente veloz!"
  },
  {
    id: 3,
    name: 'Nave Classic',
    value: 3500,
    imageUrl: 'http://astro-rockets.surge.sh/static/media/05_nave_classic.e5b4aa75.jpg',
    descricao:"Visual clássico, com tecnologia de ponta!"
  },
  {
    id: 4,
    name: 'Foguete Junior',
    value: 200,
    imageUrl: 'http://astro-rockets.surge.sh/static/media/03_foguete_junior.d266e8ac.jpg',
    descricao:"É ideal para o transporte de família com até 4 membros. Econômico e veloz!"
  },
  {
    id: 5,
    name: 'Foguete Single',
    value: 300,
    imageUrl: 'http://astro-rockets.surge.sh/static/media/01_foguete_single.8f1bf138.jpg',
    descricao:"É ideal para o transporte de apenas um passageiro. Econômico e veloz"
  },
  {
    id: 6,
    name: 'Foguete Blaster',
    value: 500,
    imageUrl: 'http://astro-rockets.surge.sh/static/media/04_foguete_blaster.45811de2.jpg',
   descricao:"Comporta até 5 passageiros em uma viagem extremamente veloz!"
  },
]


export default class App extends React.Component {
  state={
        query:"",
        paginaPrincipal:true,
        carrinho:[],
        naves:naves,
      }
      paginaCarrinho = () => {
        this.setState({ paginaPrincipal: !this.state.paginaPrincipal });
      };
      
buscaNome=(e)=>{
  this.setState({query: e.target.value})
}
adicionarProduto = (id) => {
  const itemCarrinho = this.state.carrinho.find(
    (nave) => id === nave.id
  );
  if (itemCarrinho) {
    const novoCarrinho = this.state.carrinho.map((nave) => {
      if (id === nave.id) {
        return {
          ...nave,
          quantidade: nave.quantidade + 1,
        };
      }
      return nave;
    });
    this.setState({ carrinho: novoCarrinho });
  } else {
    const itemParaAdicionar = this.state.naves.find(
      (nave) => id === nave.id
    );
    const carrinhoAtual = [
      ...this.state.carrinho,
      { ...itemParaAdicionar, quantidade: 1 },
    ];
    this.setState({ carrinho: carrinhoAtual });
  }
};

removerProduto = (id) => {
  const retirarItem = [...this.state.carrinho];
  const item = retirarItem.filter((nave) => {
    return nave.id !== id;
  });
  this.setState({ carrinho: item });
};

// Funções para aumentar ou diminuir a quantidade de naves no carrinho
adicionarQuantidade = (item) => {
  const carrinhoAtual = this.state.carrinho.map((nave) => {
    if (item.id === nave.id) {
      return {
        ...item,
        quantidade: nave.quantidade + 1,
      };
    }
    return nave;
  });
  this.setState({ carrinho: carrinhoAtual });
};

diminuirQuantidade = (item) => {
  const carrinhoAtual = this.state.carrinho.map((nave) => {
    if (item.id === nave.id && nave.quantidade > 1) {
      return {
        ...item,
        quantidade: nave.quantidade - 1,
      };
    }
    return nave;
  });
  this.setState({ carrinho: carrinhoAtual });
};

totalItens = () => {
  return this.state.carrinho.reduce(
    (total, item) => total + item.quantidade,
    0
  );
};

limparCarrinho = () => {
  this.setState({ carrinho: [] });
};


  render() {
  
  if(this.state.paginaPrincipal){
    return (
      <Corpo>
        <Tela>
         
          <Header 
          paginaProdutos={this.state.paginaPrincipal}
          paginaCarrinho={this.paginaCarrinho}
          query={this.state.query} 
          buscaNome={this.buscaNome}
          totalItens={this.totalItens}/>   
          <Ordenacao />
         
          <Principal>
            <MnuVertical>    
         
            <Filter>
					<ImgTela src="https://pt.seaicons.com/wp-content/uploads/2015/11/filter-icon.png" />
					<BotoesMnuVertical>Filtro</BotoesMnuVertical>
				</Filter>
           
             <Filtro/>
            
        
            </MnuVertical>

            <PainelProdutos>
              {naves.filter(nave=>{
              return nave.name.toLowerCase().includes(this.state.query.toLowerCase())
              }).map((nave) =>
                <Card name={nave.name}
                    alt={nave.name}
                  imageUrl={nave.imageUrl}
                  value={"R$"+nave.value} 
                  key={nave.id}
                  adicionarProduto={() => this.adicionarProduto(nave.id)}/>
              )}

            </PainelProdutos>

          </Principal>
          <Footer></Footer>
        </Tela>
      </Corpo>
    )
  } else{
    return(
      <div>
        <Header
         paginaProdutos={this.state.paginaPrincipal}
         paginaCarrinho={this.paginaCarrinho}/>
      <Carrinho
       carrinho={this.state.carrinho}
       removerProduto={this.removerProduto}
       adicionarQuantidade={this.adicionarQuantidade}
       diminuirQuantidade={this.diminuirQuantidade}
       limparCarrinho={this.limparCarrinho}
       paginaCarrinho={this.paginaCarrinho}
       totalItens={this.totalItens}/>
       <Footer/>
      </div>
    )
  }
}
 

}

