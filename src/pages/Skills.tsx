import React from 'react';

function Skills() {
    return (
        <div className="md doc container">
            <h1>Habilidades/conhecimentos</h1>

            <h2>Ferramentas de desenvolvimento</h2>
            <div className="elevation">
                <p>VIM/NeoVIM</p>
                <p>GIT</p>
                <p>Bash</p>
                <p>Linux</p>
                <p>VSCode</p>
            </div>

            <h2>Linguagens de programação</h2>
            <div className="elevation">
                <p>TypeScript</p>
                <p>JavaScript</p>
                <p>C</p>
                <p>Java</p>
                <p>Python</p>
                <p>PHP</p>
            </div>
            
            <h2>Back-end</h2>
            <div className="elevation">
                <p>Node</p>
                <p>Express</p>
                <p>Laravel</p>
            </div>

            <h2>Front-end</h2>
            <div className="elevation">
                <p>HTML, CSS e JQuery</p>
                <p>React e React Native</p>
                <p>Vue</p>
                <p>Angular</p>
            </div>
        </div>
    )
}

export default Skills;