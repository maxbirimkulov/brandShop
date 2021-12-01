import React, {useContext, useEffect, useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from "./componets/Home/Home";
import Cart from "./componets/Cart/Cart";
import NotFound from "./componets/NotFound/NotFound";
import axios from "axios";
import Men from "./componets/Men/Men";
import Women from "./componets/Women/Women";
import Child from "./componets/Child/Child";
import './style/style.scss'
import Layout from "./componets/Layout/Layout";
import ShoeMoreInfo from "./componets/ShoeMoreInfo/ShoeMoreInfo";
import Login from "./componets/Login/Login";
import Register from "./componets/Register/Register";

function App() {
    const [shoes, setShoes] = useState([]);
    useEffect(() => {

        axios('https://v1-sneakers.p.rapidapi.com/v1/sneakers', {
            params: {limit: '50'}, headers: {
                'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
                'x-rapidapi-key': 'ffd3b9a628msh08dbad225f58e26p132143jsn3c0454617813'
            }
        })
            .then(({data}) => setShoes(data.results.map((item)=>{
                if (item.gender === 'men'){
                    return {...item, size: ['38', '39', '40', '41', '42' , '43'], defaultSize: '38' ,  favorite:false}
                }else if (item.gender === 'women'){
                    return {...item, size: ['35', '36', '37', '38', '39' , '40', '41'], defaultSize: '35',  favorite:false }
                } else if (item.gender === 'unisex'){
                    return {...item, size: ['35', '36', '37', '38', '39' , '40', '41', '42', '43'], defaultSize: '35',  favorite:false }
                } else{
                    return  {...item, size: ['30', '31', '32', '33', '34', '35', '36'], defaultSize: '30', favorite:false }
                }
            }).map((item)=>{
                    let favorites = JSON.parse(localStorage.getItem('favorites')).map(item=> item.id);
                    if (favorites.indexOf(item.id) !== -1){
                        return {...item, favorite: !item.favorite}
                    } else {
                        return item
                    }
                })
            ))
            .catch((err) => console.log('Ошибка'))
    }, []);



    return (
        <div className="App">

            <Routes>
                <Route path='/login' element={<Login shoes={shoes} setShoes={setShoes}/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/' element={<Layout/>}>
                    <Route path='' element={<Home shoes={shoes} setShoes={setShoes} />}/>
                    <Route path='shoes/:title' element={<ShoeMoreInfo shoes={shoes} setShoes={setShoes}/>}/>
                    <Route path='men' element={<Men shoes={shoes} setShoes={setShoes}/>}/>
                    <Route path='women' element={<Women shoes={shoes} setShoes={setShoes}/>}/>
                    <Route path='child' element={<Child shoes={shoes} setShoes={setShoes}/>}/>
                    <Route path='cart' element={<Cart/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;


