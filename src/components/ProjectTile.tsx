import React from 'react';
import './ProjectTile.css';

interface ProjectTileProps {
    name: string;
    description: string;
    stack: Array<string>;
}

const ProjectTile: React.FC<ProjectTileProps> = ({ name, description, stack }) => {
    const baseurl = 'https://github.com/seapvnk';

    const colors = {
        "TypeScript": "#2b7489",
        "React": "#88dded",
        "PHP": "#4F5D95",
        "Blade": "#fb503b",
        "Laravel": "#fb503b ",
        "CSS": "#563d7c",
        "JS": "#f1e05a", 
        "Java": "#b07219",
        "C": "#555555", 
    }

    const getColor = (tech: string) => {
        for (let [key, value] of Object.entries(colors)) {
            if (key.toLocaleLowerCase() === tech.toLocaleLowerCase()) {
                return value;
            }
        }
        return "#777";
    }

    return (
        <div className="project-tile">
            <h4>
                <a 
                    href={`${baseurl}/${name}`}
                    target="_blank"
                >
                    { name }

                </a> 
            </h4>
            <p className="description">{ description }</p>
            <div className="stack">
                {stack.map(tech => {
                    const colorTech = getColor(tech);
                    return (
                        <div className="tech">
                            <div style={{ backgroundColor: colorTech}} className="tech-circle"></div>
                            { tech }
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ProjectTile;