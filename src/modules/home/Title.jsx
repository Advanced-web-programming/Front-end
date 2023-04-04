import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  height: 100%;
  margin: 0;
`

const HeadTitle = styled.div`
  font-size: 50px;
  font-weight: 600;
  colior: #FFFFFF;
  font-style: Orelega One;
`

const SubTitle = styled.div`
  font-size: 18px;
  margin: 12px 0 0 0;
`

export function Title() {

  return(
    <Container>
      <HeadTitle>
        높이 나는 드론, 그 이상의 가치를 띄웁니다.
      </HeadTitle>
      <SubTitle>
        여러 요구사항에 맞춰 드론과 함께 더 높은 하늘을 향해, 더 넓은 세계를 향해 인류에 대한 
      </SubTitle>
      <SubTitle>
        더 깊은 열정으로 새로운 하늘을 개척하며 지속 가능한 발전을 꿈 꿉니다.
      </SubTitle>
    </Container>
  )
}