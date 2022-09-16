// 커스텀 훅은 접두어에 use를 붙이는 것이 관례
import axios from "axios";
import { FC, useState, useContext } from "react";
import { LoginContext, LoginDispatchContext, useLoginState, useLoginStateDispatch } from "../provider/AppProvider";
import { UserEntity } from "./api/UserEntity";


// 모든 유저 일람을 취득하는 커스텀 훅
export const useLogin = () => {
    const context = useLoginState();
    const dispatch = useLoginStateDispatch();
    const [userEntity, setUserEntity] = useState<UserEntity>();
    const env = "http://localhost:8080";
    const setLoginInfo = (param:boolean) => dispatch({type: 0, isLogin: param});


    // 로그인
    const goLogin = (props: UserEntity) => {
      setLoginInfo(true);
      console.log(context?.isLogin);

      // post
      axios.post<UserEntity>(`${env}/login`, {
          id: props.id,
          pass: props.pass
      }, {
        headers: {
            'Content-Type': 'application/json'
        }
      })
      // 로그인 OK
      .then((response) => {
        const res :UserEntity = {
          id: response.data.id,
          pass: response.data.pass
        };
        setUserEntity(res);
        //setIsLogin(true);
      })
      // 에러가 발생할 경우
      .catch((error)=>{
        console.log(error);
        //setIsLogin(false);
      })
    }

    // 회원가입
    const addUser = (param :UserEntity) :void => {
      const formData = new FormData();
      formData.append('id', param.id)
      formData.append('pass', param.pass)

      axios.post<UserEntity>(`${env}/signup`, formData, {
        headers: {
            //'Content-Type': 'application/json'
            "Content-Type": "multipart/form-data"
        }
      })
      .then((response) => {
        console.log(response);
      })
      // 에러가 발생할 경우
      .catch((error)=>{
        console.log(error);
      })
    }

    // 다른 곳에서 사용할 수 있도록 반환
    return {
      userEntity, goLogin, addUser//, isLogin
    };
};