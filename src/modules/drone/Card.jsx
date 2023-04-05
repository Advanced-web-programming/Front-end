import styled from "styled-components";

import image1 from "../../assets/drones/아리온.png";
import image2 from "../../assets/drones/스위드.png";
import image3 from "../../assets/drones/앤트윙.png";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
`;

const Content = styled.button`
  width: 43%;
  height: 45%;
  margin: 0 1rem;
  background-color: #f8f8f9;
  border-radius: 20px;
  border: 1px solid #d8d8d8;
`;

const CardImg = styled.img`
  padding 20px;
  width: 80%;
  height: 40%;
`;

const Text = styled.div`
  color: ${(props) => props.color};
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin: 10px;
`;

export function Card({ selectedMenu }) {
  if (selectedMenu === "menu1") {
    return (
      <Container>
        <Content>
          <CardImg src={image1} />
          <Text color={"black"}>아리온 스콜피온</Text>
          <Text color={"#8B8B8B"}>멀티콥터</Text>
        </Content>
        <Content>
          <CardImg src={image2} />
          <Text color={"black"}>스위드</Text>
          <Text color={"#8B8B8B"}>멀티콥터</Text>
        </Content>
        <Content>
          <CardImg src={image3} />
          <Text color={"black"}>앤트윙</Text>
          <Text color={"#8B8B8B"}>멀티콥터</Text>
        </Content>
      </Container>
    );
  }
}
