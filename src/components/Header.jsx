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
const Link = styled.a`
color: black;
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
				<Inputheader type="text" placeholder="Pesquisar..." id="campoDeBusca" />
				<Lupa src="http://astro-rockets.surge.sh/static/media/search_black_24dp.03bb87e7.svg"/>
				<ImgTela src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTAgMTkuNWMwIC44MjktLjY3MiAxLjUtMS41IDEuNXMtMS41LS42NzEtMS41LTEuNWMwLS44MjguNjcyLTEuNSAxLjUtMS41czEuNS42NzIgMS41IDEuNXptMy41LTEuNWMtLjgyOCAwLTEuNS42NzEtMS41IDEuNXMuNjcyIDEuNSAxLjUgMS41IDEuNS0uNjcxIDEuNS0xLjVjMC0uODI4LS42NzItMS41LTEuNS0xLjV6bTEuMzM2LTVsMS45NzctN2gtMTYuODEzbDIuOTM4IDdoMTEuODk4em00Ljk2OS0xMGwtMy40MzIgMTJoLTEyLjU5N2wuODM5IDJoMTMuMjM5bDMuNDc0LTEyaDEuOTI5bC43NDMtMmgtNC4xOTV6Ii8+PC9zdmc+" />

			</Header>
		)

	}
}