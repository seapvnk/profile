import React, { useState } from 'react';

import { RiMenuFill, RiCloseLine, RiFolder2Fill } from 'react-icons/ri';
import { BsChevronRight, BsChevronDown } from 'react-icons/bs';
import { DiMarkdown } from 'react-icons/di';

import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
    const [open, setOpen] = useState(window.innerWidth > 895);

    const [folderSkillsOpen, setFolderSkillsOpen] = useState(true);
    const [folderAboutOpen, setFolderAboutOpen] = useState(true);

    const toggle = () => setOpen(!open);
    
    const toggleSkillsFolder = () => setFolderSkillsOpen(!folderSkillsOpen);
    const toggleAboutFolder = () => setFolderAboutOpen(!folderAboutOpen);

    const toggleIfNavigateOnMobile = () => !(window.innerWidth > 895) && setOpen(!open);

    return (
     <aside className={`navigation ${open? '' : 'closed'}`}>
        <div className="icon" onClick={toggle}>
            { open? <RiCloseLine /> : <RiMenuFill /> }
        </div>
        <div className={`content ${open? '' : 'hidden'}`}>
            <Link onClick={toggleIfNavigateOnMobile} to="/"> home</Link>
            <a onClick={toggleAboutFolder}>
                { folderAboutOpen? <BsChevronDown /> : <BsChevronRight /> }
                sobre
            </a>
            <div className={`folder ${folderAboutOpen? '' : 'hidden'}`}>
                <Link onClick={toggleIfNavigateOnMobile} to="about"> quem sou</Link>
                <Link onClick={toggleIfNavigateOnMobile} to="contact"> contato</Link>
            </div>
            <a onClick={toggleSkillsFolder}>
                { folderSkillsOpen? <BsChevronDown /> : <BsChevronRight /> }
                trabalhos
            </a>
            <div className={`folder ${folderSkillsOpen? '' : 'hidden'}`}>
                <Link onClick={toggleIfNavigateOnMobile} to="skills"> habilidades</Link>
                <Link onClick={toggleIfNavigateOnMobile} to="projects"> projetos</Link>
            </div>
        </div>
     </aside>   
    )
}

export default Navigation;