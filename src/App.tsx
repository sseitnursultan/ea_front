import React, {useEffect, useState} from 'react';
import {Header} from './components/header/Header'
import {Login} from './components/LoginPage/Login'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Register} from "./components/registerPage/Register";
import {Main} from "./components/Main/Main";
import {Subscription} from "./components/subscription/Subscription";


function App() {
    const [user, setUser] = React.useState(true)
    const [name,setName] = useState('')


    useEffect( ()=>{
        (
            async ()=>{
                const response = await  fetch(process.env.REACT_APP_BACK_URL + '/api/user',{
                    headers:{'Content-Type':'application/json'},
                    credentials:'include'
                })
                const content = await response.json()

                setName(content.name)
            }

        )();
    })



    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path={'/'} element={<Main name={name}/>}/>
                    <Route path={'/login/*'} element={<Login/>}/>
                    <Route path={'register/*'} element={<Register/>}/>
                    <Route path={'/subscription*'} element={<Subscription/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
