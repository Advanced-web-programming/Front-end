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
      <Text color={"#9F9FAC"} size={"14px"} weight={"500"}>ORDER</Text>
      <Text color={"#0B0B0E"} size={"44px"} weight={"500"}>함께할 드론</Text>
    </Container>
  )
}