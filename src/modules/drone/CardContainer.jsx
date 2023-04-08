import styled from "styled-components";
import { Menu1, Menu2, Menu3, Menu4, Menu5 } from "./Card.jsx";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  overflow: auto;
`;

const Content = styled.button`
  width: 15rem;
  height: 16rem;
  margin: 1rem 1rem;
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

export function CardContainer({ selectedMenu }) {
  let menu;
  switch (selectedMenu) {
    case "menu1":
      menu = Menu1;
      break;
    case "menu2":
      menu = Menu2;
      break;
    case "menu3":
      menu = Menu3;
      break;
    case "menu4":
      menu = Menu4;
      break;
    case "menu5":
      menu = Menu5;
      break;
    default:
      menu = [];
      break;
  }
  return (
    <Container>
      {menu.map((card) => (
        <Content>
          <CardImg src={card.image} />
          <Text color={"black"}>{card.name}</Text>
          <Text color={"#8B8B8B"}>{card.case}</Text>
        </Content>
      ))}
    </Container>
  );
}
