import React from 'react';
import styled from 'styled-components';

const Footerh4=styled.h4`
margin-left: 20px;
text-align:center;
color:white`
const Footer=styled.footer`
background: rgb(60, 19, 153);
  color: black;
 position:relative;
  top:60%;
bottom:0;
  width: 98.5%;
  display: flex;
  justify-content:center;
  padding: 0 10px;
 `
export default class App extends React.Component {

	render() {

		return (
			<Footer>
				<Footerh4>Siga as nossas redes sociais!</Footerh4>
				
			</Footer>
		)

	}
}