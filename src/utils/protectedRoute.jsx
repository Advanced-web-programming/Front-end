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
  console.log(isLogin)

  const SetLogin = () => {
    SetIsOpen(true)
    return (<Navigate to={'/'} />)
  }

  return isLogin.userId !== "" ? children : <SetLogin />;
};

export const PrivateRoute = (props) => {
  const { children } = props;
  const isLogin = useRecoilValue(authSelector);
  console.log(isLogin)
  if (isLogin){
    return children
  }
  return (<Navigate to={'/'} />);
}