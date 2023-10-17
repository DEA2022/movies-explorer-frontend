import { useEffect } from "react";
import { mainApi } from "../utils/MainApi";
import getToken from "../utils/getToken";
import { useNavigate } from "react-router-dom";

function useCheckToken(pathname) {
  const navigate = useNavigate();

  useEffect(() => {
    mainApi.getUserInfo(getToken())
      .then(() => {
        navigate(pathname);
      })
      .catch(() => { })
  }, [])
}

export default useCheckToken;