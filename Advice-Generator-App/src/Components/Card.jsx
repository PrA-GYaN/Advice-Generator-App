import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './card.css'

function Card() {
    const [advice, setAdvice] = useState({ text:'',number:''});
    const fetchadvice = async() =>
        {
            const response =await axios.get("http://localhost:5000");
            setAdvice(response.data)
            console.log(response.data);
        }
    useEffect(() => {
        fetchadvice();
    },[]);

    return (
        <div className='card-main'>
            <p className="sub">Advice #{advice.number}</p>
            <p className='main'>"{advice.text}"</p>
            <div className="image"></div>   
            <div className="back"><div className="icon" onClick={fetchadvice}></div></div>
        </div>
    );
}

export default Card;