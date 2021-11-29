import React from 'react';
import styled from 'styled-components';



const Inputfilter = styled.input`
margin-bottom: 20px;
height: 30px;
padding: 4px 8px;
border: 1px solid rgb(206, 206, 206);
border-radius: 4px;
margin-right:10px`

const Corpo = styled.div`
display:flex;
flex-direction:column;
justify-content:start;
align-items:center
width:200px;`
export default class App extends React.Component {

	render() {

		return (
			<Corpo>
				
				<Inputfilter type="number" placeholder="Preço Mínimo" id="campoDeFiltroMinimo" />
				<Inputfilter type="number" placeholder="Preço Máximo" id="campoDeFiltroMaximo" />
				<p>Limpar</p>
			</Corpo>


		)

	}
}