import React from 'react';
import styled from 'styled-components';

const Filtro=styled.summary`
text-align: center;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 1rem;
    list-style: none;
    display: flex;
    flex-direction:column;
`
const BotoesMnuVertical=styled.h3`
list-style-type: none;
  color:black;
`
const ImgTela=styled.img`
height: 35px;
margin-left: 5px;
margin-top: 15px;
`
const Inputfilter = styled.input`
margin-bottom: 20px;
height: 30px;
padding: 4px 8px;
border: 1px solid rgb(206, 206, 206);
border-radius: 4px;`
export default class App extends React.Component {

	render() {

		return (
			
			<Filtro>
			<div><ImgTela src="https://pt.seaicons.com/wp-content/uploads/2015/11/filter-icon.png"/> 
			<BotoesMnuVertical>Filtro</BotoesMnuVertical>
			</div>
			<Inputfilter type="number" placeholder="Preço Mínimo" id="campoDeFiltroMinimo" />
			<Inputfilter type="number" placeholder="Preço Máximo" id="campoDeFiltroMaximo" />	
				<p>Limpar</p>
				
		       </Filtro>   
		       
		)

	}
}