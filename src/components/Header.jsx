import React from 'react';
import styled from 'styled-components';

const Inputheader = styled.input`
	width: 30rem;
	    height: 2rem;
	    border-radius: 20px;
	    background-color: rgb(255, 255, 255);
	    border: none;
	    padding: 0px 2rem;`

const H1Tela = styled.h1`
margin-left: 0;
display: flex;
flex-direction: column;
align-items: center;
cursor:pointer;
color:white;
`
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
const ImgTela = styled.img`
height: 35px;

`
const Lupa=styled.img`
position: relative;
right: 170px;
top: 1px;
width: 2%;`

export default class App extends React.Component {
	
	render() {

		return (
			<Header>
				<H1Tela>LabEcommerce</H1Tela>
				<Inputheader type="text" placeholder="Pesquisar..." value={this.props.query} onChange={this.props.buscaNome}  id="campoDeBusca" />
				<Lupa src="http://astro-rockets.surge.sh/static/media/search_black_24dp.03bb87e7.svg"/>
				<ImgTela alt="Carrinho" src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Font_Awesome_5_solid_shopping-cart.svg" />

			</Header>
		)

	}
}