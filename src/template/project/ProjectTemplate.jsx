import styled from "styled-components"
import Project from '../../assets/background/Project.png'

const Container = styled.div`
  width: 100vw;
  background-color: #F8F8F9;
`

const Content = styled.div`
  padding: 140px 0 100px 0;
  width: 1430px;
  margin: 0 auto;
  background-image: url(${props=>props.bgImg});
  background-size: cover;
`

const Title = styled.header`
  margin: 0 885px 0 260px;
  height: 104px;
`

const Main = styled.main`
  margin: 0 230px;
  height: 1105px;
`

export function ProjectTemplate() {

  return(
    <Container >
      <Content bgImg={Project}>
        <Title>

        </Title>
        <Main>

        </Main>
      </Content>
    </Container>
  )
}