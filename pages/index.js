
import React, { useContext, useEffect, useRef, useState } from 'react';
import Manager from "../encryption";
import UserLogin from "../components/userLogin";



const LoginPage = () => {

    return (
        <div>
            <UserLogin Manager={Manager}/>

        </div>

    );
};

export default LoginPage;
