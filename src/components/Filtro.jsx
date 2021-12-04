import React from 'react';
import styled from 'styled-components';

const Filtro = styled.summary`
text-align: center;
    font-size: 1.2rem;
    cursor: pointer;
    list-style: none;
    display: flex;
    flex-direction:row;
`
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
				<Filtro>
					
				</Filtro>
				<Inputfilter type="number" placeholder="Preço Mínimo" id="campoDeFiltroMinimo" value={this.props.minPrice} onChange={this.props.precoMinimo}/>
				<Inputfilter type="number" placeholder="Preço Máximo" id="campoDeFiltroMaximo"  value={this.props.maxPrice} onChange={this.props.precoMaximo}/>
				<p>Limpar</p>
			</Corpo>


		)

	}
}