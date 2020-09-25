import React,{useState, createContext} from 'react';
import {useHistory} from 'react-router-dom';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const history = useHistory();
  const [user, setUser] = useState(null);

  const setAuthUser = (uid) => {
    setUser(uid);
    return history.push('/'); //con history hacemos que me lleve a la ruta indicada, es /
  }

  return(
    <AuthContext.Provider value={{user, setAuthUser}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;