import styled from 'styled-components';
import InformationImg from '../../assets/InformationImg.png'

const Container = styled.div`
  width: 100vw;
  background-color: #FFFFFF;
`
const Content = styled.div`
  padding: 84px 0 64px;
  width: 1430px;
  margin: 0 auto;
`

const TitlePosition = styled.header`
  margin: 0 723px 0 230px;
  height: 157px;
`

const InformationScroll = styled.main`
  margin: 0 0 100px 230px;
  height: 270px;
  overflow-x: scroll;
`
const InformationImgPosition = styled.img`
  margin: 0 230px;
  height: 400px;
  width: max-content;
`

export function Information() {

  return(
    <Container>
      <Content>
        <TitlePosition>

        </TitlePosition>
        <InformationScroll>

        </InformationScroll>
        <InformationImgPosition src={InformationImg} />
      </Content>
    </Container>
  )
}