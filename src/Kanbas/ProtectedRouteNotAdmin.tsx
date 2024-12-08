import { useSelector } from "react-redux";

export default function ProtectedRouteNotAdmin({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser.role != "ADMIN") {
    return children;
  } 
}
