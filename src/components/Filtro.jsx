import React from 'react';
import styled from 'styled-components';

const Filtro=styled.summary`
text-align: center;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 1rem;
    list-style: none;
    display: flex;
`
const BotoesMnuVertical=styled.h3`
list-style-type: none;
  color:black;
`
const ImgTela=styled.img`
height: 35px;
`
export default class App extends React.Component {

	render() {

		return (
			<Filtro>
			<BotoesMnuVertical>Filtro</BotoesMnuVertical>
			<ImgTela src="https://pt.seaicons.com/wp-content/uploads/2015/11/filter-icon.png"/>  
		       </Filtro>   
		)

	}
}