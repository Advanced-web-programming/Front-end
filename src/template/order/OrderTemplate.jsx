import styled from "styled-components"
import { OrderContents } from "../../modules/order/OrderContents";
import { Modal } from "../../modules/order/Modal";
import { Title } from "../../modules/order/Title";

import { orderRefAtom } from "../../atoms/utilAtom";
import { useRecoilValue, useRecoilState } from "recoil";
import { orderModalOpen } from "../../atoms/orderAtom";
import { useResetRecoilState } from "recoil";

import { useEffect, useRef } from "react";

const Container = styled.div`
  width: max(100vw, 1440px);
  background-color: #ffffff;
  padding: 40px 0;
`;

const Content = styled.div`
  width: 1430px;
  margin: 0 auto;
`;

const TitlePosition = styled.header`
  margin: 0 0 40px 240px;
  height: 80px;
`;

export function OrderTemplate() {
  const [isOpen, setIsOpen] = useRecoilState(orderModalOpen);
  const [orderRef, setOrderRef] = useRecoilState(orderRefAtom)
  const ref = useRef();
  const handleButtonClick = () => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(()=>{
    setOrderRef({
      ref: ref.current,
      refEvent: handleButtonClick,
    });
  }, [setOrderRef])

  return(
    <Container ref={ref}>
      <Content >
        <TitlePosition>
          <Title />
        </TitlePosition>
        <OrderContents />
      </Content>
      {isOpen && <Modal />} 
    </Container>
  )
}