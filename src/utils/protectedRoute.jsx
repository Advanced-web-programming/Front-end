import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../atoms/userAtom"; 
import { authSelector } from "../atoms/authAtom";
import { useRecoilState } from "recoil";
import { showLogin } from "../atoms/utilAtom";
import { Navigate, useNavigate} from "react-router-dom";

export const ProtectedRoute = (props) => {
  const { children } = props;
  const [isOpen, SetIsOpen] = useRecoilState(showLogin);
  const isLogin = useRecoilValue(userInfoAtom);

  const SetLogin = () => {
    SetIsOpen(true)
    return (<Navigate to={'/Front-end'} />)
  }

  return isLogin.userId !== "" ? children : <SetLogin />;
};

export const PrivateRoute = (props) => {
  const { children } = props;
  const isLogin = useRecoilValue(authSelector);
  if (isLogin){
    return children
  }
  return (<Navigate to={'/Front-end'} />);
}