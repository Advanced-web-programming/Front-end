import styled from "styled-components"

const Container = styled.section`
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`
const Text = styled.div`
  color: ${props=>props.color};
  font-size: ${props=>props.size};
  font-weight: ${props=>props.weight};
`

export function Title() {

  return(
    <Container>
      <Text color={"#9F9FAC"} size={"14px"} weight={"500"}>FOR DRONE</Text>
      <Text color={"#0B0B0E"} size={"44px"} weight={"500"}>안전을 최우선으로,</Text>
      <Text color={"#595969"} size={"16px"} weight={"400"}>
        BrokenWeb은 모두 안전을 위해 드론 안전 진단, 드론 비행가능 공역 안내,<br/>
        드론 문화 컨설팅 등 다양한 서비스들을 제공합니다.
      </Text>

    </Container>
  )
}