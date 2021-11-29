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
const ImgTela=styled.img`
height: 35px;
`
export default class App extends React.Component {

	render() {

		return (
			<Header>
				<H1Tela>LabEcommerce</H1Tela>
				<Inputheader type="text" placeholder="Pesquisar" id="campoDeBusca" />
				<ImgTela src="https://cdn-icons-png.flaticon.com/512/126/126510.png" />
			</Header>
		)

	}
}