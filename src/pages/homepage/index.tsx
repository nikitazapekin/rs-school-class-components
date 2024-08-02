import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { fetchUserData } from "../../redux/slices/appSlice";

const Homepage = () => {
  const dispatch = useAppDispatch()
  useEffect(()=> {
  dispatch(fetchUserData({typedValue: "test", offset: 1, limit: 10}))
  }, [])
    return (
        <>
        Homepage
        </>
      );
}
 
export default Homepage;