import styled from 'styled-components';
import Background from '../../assets/background/Main.png'
import TitleImg from '../../assets/TitleImg.png'

const Container = styled.div`
  background-image: url(${props=>props.bgImg});
  background-size: cover;
  padding: 135px 0 80px;
  color: white;
  width: 1430px;
  margin: 0 auto;
`

const TitlePosition = styled.div`
  width: 60rem;
  height: 124px;
  margin: 125px 0 0 217px;
  border: 1px solid white;
`

const SubButtonPosition = styled.div`
  margin: 32px 0 0 217px;
  width: 12.5rem;
  height: 60px;
  border: 1px solid white;
`
const TitleImgPosition = styled.img`
  height: 400px;
  margin: 30px 217px 0 217px;
  border: 1px solid white;
`

export function HomeTemplate() {
  

  return(
    <Container bgImg={Background}>
      <TitlePosition>
        
      </TitlePosition>
      <SubButtonPosition>

      </SubButtonPosition>
      <TitleImgPosition src={TitleImg}/>
    </Container>
  )
}