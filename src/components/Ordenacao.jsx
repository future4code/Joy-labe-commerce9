import React from 'react';
import styled from 'styled-components';

const Order = styled.div`

  display: flex;
  justify-content: end;
  margin: 6px 36px 0px;
  height: 10%;
`
const Select=styled.select`
height: 30px;
padding: 4px 8px;
border: 1px solid rgb(206, 206, 206);
border-radius: 4px;`
const Span=styled.span`
margin: 5px;`
export default class App extends React.Component {

	render() {

		return (
			<Order>
				<Span>Ordenar:</Span>
				<Select>
					<option>Preço - Decrescente</option>
					<option>Preço - Crescente</option>
					<option>Populares</option>
				</Select>

			</Order>
		)

	}
}