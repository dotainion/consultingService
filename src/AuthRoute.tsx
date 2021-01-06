import React from 'react';
import { Redirect, Route, useHistory } from 'react-router';
import Administrator from './admin/admin';
import { auth } from './auth/authenticate';
import { globalVar } from './global/globalVar';

const AuthRouter = () =>{
    const history = useHistory();
    return(
        <Route render={()=>{
            if (auth.isLogin()){
                return(
                    <Administrator/>
                )
            }else{
                return(
                    <Redirect to={{
                        pathname: globalVar.route.AdminLogin,
                        state: {
                            from: history.location.pathname
                        }
                    }}/>
                )
            }
        }}/>
    )
}

export default AuthRouter;