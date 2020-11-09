import React from 'react';
import ProjectTile from '../components/ProjectTile';

function Projects() {

    const projects = [
        {
            name: 'Pixie',
            description: 'Editor de pixelart feito com React',
            stack: ['React', 'TypeScript', 'CSS']
        },
        {
            name: 'Yay',
            description: 'Rede social feita com Laravel',
            stack: ['Laravel', 'PHP', 'Blade', 'CSS']
        },
        {
            name: 'Bookmarks',
            description: 'Lista de favoritos em PHP',
            stack: ['PHP', 'JS', 'CSS']
        },
        {
            name: 'chess-cli',
            description: 'Tabuleiro de xadrez em linha de comando',
            stack: ['Java']
        },
        {
            name: 'bd',
            description: 'Interpretador de BF',
            stack: ['C']
        }
    ];

    return (
        <div className="md doc container">
            <h1>Projetos</h1>
            <h2>Alguns projetos Open-Source</h2>
            <p>Clique no nome do projeto para ver seu repositório no github.</p>
            <div className="divider"></div>
            {
                projects.map(project => {
                    return (
                        <ProjectTile
                            key={project.name} 
                            name={project.name}
                            description={project.description}
                            stack={project.stack}
                        />
                    )
                })
            }
        </div>
    )
}

export default Projects;