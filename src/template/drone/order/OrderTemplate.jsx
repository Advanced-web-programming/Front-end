import styled from 'styled-components'
import Background from '../../../assets/background/Main.png'
import Project from '../../../assets/background/Project.png'

import { Order } from '../../../modules/drone/Order'

const BackContainer = styled.div`
	padding: 135px 0 0 0;
	width: 100%;
`

const Container = styled.div`
	background-image: url(${(props) => props.bgImg});
	background-size: 100% auto;
	background-position: center;
	width: 100%;
	height: 750px;
	display: flex;
	justify-content: center;
	align-items: center;
`

export function OrderTemplate() {
	return (
		<BackContainer bgImg={Background}>
			<Container bgImg={Project}>
				<Order />
			</Container>
		</BackContainer>
	)
}

