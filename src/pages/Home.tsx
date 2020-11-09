import React from 'react';
import './Home.css';

function Home() {
    const getAge = (d1: Date, d2 = new Date()) => {
        const diff = d2.getTime() - d1.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    }

    const age = getAge(new Date(2002, 9, 1));
    
    return (
        <div className="home container">
            <img 
                src="https://avatars3.githubusercontent.com/u/36551559?v=4" 
                alt=""
            />
            <h1>Pedro Sérgio</h1>
            <h2>~ desenvolvedor full-stack ☕💻</h2>
            
            <div className="description md">
                <p>✨ idade: <div className="value">{ age } anos</div></p>
                <p>✨ e-mail: <div className="value">www.psro@gmail.com</div></p>
                <p>✨ localização: <div className="value">Fortaleza, Ceará</div></p>
            </div>
            
        </div>
    )
}

export default Home;