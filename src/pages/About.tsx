import React from 'react';

function About() {
    const getAge = (d1: Date, d2 = new Date()) => {
        const diff = d2.getTime() - d1.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    }

    const age = getAge(new Date(2002, 9, 1));
    
    return (
        <div className="md doc container">
            <h1>Sobre</h1>
            <h2>Informações</h2>
            <p>✨ Nome: <strong>Pedro Sérgio Rosário de Oliveira</strong></p>
            <p>✨ Idade: <strong>{ age  } anos</strong></p>
            <p>✨ Interesses: <strong>computação, xadrez, música...</strong></p>
            
            <div className="divider"></div>

            <h2>Bio</h2>
            <p>
                Desenvolvedor full-stack de { age } anos, interessado em tecnologias web.
                Em geral, gosto de aprender e resolver problemas visando a abordagem mais
                prática e eficiente.
            </p>
        </div>
    )
}

export default About;