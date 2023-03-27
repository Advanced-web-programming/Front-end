import styled from 'styled-components';
import Modal from 'react-modal';

const LoginPage = styled.div`
  display: flex;
  position: fixed;
  width: 515px;
  height: 733px;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export function LoginModal(props) {
  return (
    <>
      <LoginPage>asdf</LoginPage>
    </>
  );
}
