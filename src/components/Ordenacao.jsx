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
				<Select
				name="order"
				value={this.props.order}
				onChange={this.props.updateOrder}
			
				>
					<option value={-1}>Preço - Decrescente</option>
					<option value={1}>Preço - Crescente</option>
					
					
				</Select>

			</Order>
		)

	}
}