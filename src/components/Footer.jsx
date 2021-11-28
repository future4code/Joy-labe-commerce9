import React from 'react';
import styled from 'styled-components';

const Footerh4=styled.h4`
margin-left: 20px;`
const Footer=styled.footer`
background: rgb(60, 19, 153);
  color: black;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: 0 10px;`
export default class App extends React.Component {

	render() {

		return (
			<Footer>
				<Footerh4>Siga as nossas redes sociais!</Footerh4>
			</Footer>
		)

	}
}