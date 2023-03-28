import styled from "styled-components";
import Project from "../../assets/background/Project.png";
import DominoDrone from "../../assets/project/DominoDrone.png";
import DroneAcademy from "../../assets/project/DroneAcademy.png";
import DroneFarm from "../../assets/project/DroneFarm.png";
import DroneShow from "../../assets/project/DroneShow.png";

const Container = styled.div`
  width: 100vw;
  background-color: #f8f8f9;
`;

const Content = styled.div`
  padding: 140px 0 100px 0;
  width: 1430px;
  margin: 0 auto;
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
`;

const Title = styled.header`
  margin: 0 820px 30px 200px;
  height: 104px;
  flex-direction: column;
  align-items: center;
  padding: 0px;
`;

const Main = styled.main`
  margin: 0 180px;
  height: 1105px;
`;

const ProjectContentBox = styled.div`
  width: 510px;
  height: 532px;
  margin: 0 0 35px 0;
  border: 1.5px solid #e4e4e4;
  &:hover {
    border: 1.5px solid #838383;
    transition: 0.7s;
    cursor: pointer;
  }
`;

const PorjectContentText = styled.div`
  width: 490px;
  height: 151px;
  padding: 30px 0 0 20px;
  background-color: #ffffff;
`;

const ProjectContentImg = styled.img`
  width: 510px;
  height: 351px;
`;

const ProjectContentTextTitle = styled.p`
  margin: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 550;
  font-size: 24px;
  color: #000000;
`;
const ProjectContentTextBody = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #595969;
`;

const TitleText1 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #9f9fac;
  line-height: 50%;
`;

const TitleText2 = styled.p`
  font-family: "Orelega One";
  font-style: normal;
  font-weight: 550;
  font-size: 44px;
  color: #0b0b0e;
  line-height: 50%;
`;

export function ProjectTemplate() {
  return (
    <Container>
      <Content bgImg={Project}>
        <Title>
          <TitleText1>OUR PROJECTS</TitleText1>
          <TitleText2>함께한 프로젝트</TitleText2>
        </Title>
        <Main>
          <ProjectContentBox style={{ float: "left" }}>
            <PorjectContentText>
              <ProjectContentTextTitle>
                서울, 도미노 피자 드론 배달
              </ProjectContentTextTitle>
              <ProjectContentTextBody>
                세계 피자 브랜드 점유율 1위인 도미노피자와 협력하여 <br />
                이제 드론을 통해 빠르게 피자를 받게 됩니다. <br />더 큰
                고객만족을 위해 오늘도 하늘을 가릅니다.
              </ProjectContentTextBody>
            </PorjectContentText>
            <ProjectContentImg src={DominoDrone} />
          </ProjectContentBox>

          <ProjectContentBox style={{ float: "right" }}>
            <PorjectContentText>
              <ProjectContentTextTitle>
                부산, 2023 드론쇼 코리아
              </ProjectContentTextTitle>
              <ProjectContentTextBody>
                2023 드론쇼 코리아, 국내 최초 최대의 드론 전문
                <br /> 컨퍼런스, 아시아 최대 규모의 드론전문 전시회와 함께
                <br /> 더 큰 세계를 향해 비행합니다.
              </ProjectContentTextBody>
            </PorjectContentText>
            <ProjectContentImg src={DroneShow} />
          </ProjectContentBox>

          <ProjectContentBox style={{ float: "left" }}>
            <PorjectContentText>
              <ProjectContentTextTitle>
                강원도, 영농 현장에 드론 투입
              </ProjectContentTextTitle>
              <ProjectContentTextBody>
                인력난이 심각한 강원지역 영농 현장에 ‘드론’을 투입하여 방<br />
                제 작업 뿐만 아니라 파종, 퇴비 도포, 살포 등을 진행합니다.
                <br /> 환경을 생각하며 지속가능한 발전을 꿈 꿉니다.
              </ProjectContentTextBody>
            </PorjectContentText>
            <ProjectContentImg src={DroneFarm} />
          </ProjectContentBox>

          <ProjectContentBox style={{ float: "right" }}>
            <PorjectContentText>
              <ProjectContentTextTitle>
                대한민국, 한국드론교육아카데미
              </ProjectContentTextTitle>
              <ProjectContentTextBody>
                한국드론교육아카데미와 협력하여 드론 인재를 양성해 <br />더 높은
                하늘을 향해, 더 넓은 세계를 향해 인류에 대한 <br />더 깊은
                열정으로 새로운 하늘을 개척합니다.
              </ProjectContentTextBody>
            </PorjectContentText>
            <ProjectContentImg src={DroneAcademy} />
          </ProjectContentBox>
        </Main>
      </Content>
    </Container>
  );
}
