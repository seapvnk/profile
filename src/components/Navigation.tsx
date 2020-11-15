import React, { useState } from 'react';

import { RiMenuFill, RiCloseLine, RiSunCloudyFill, RiMoonClearFill } from 'react-icons/ri';
import { BsChevronRight, BsChevronDown, BsSun, BsMoon } from 'react-icons/bs';

import './Navigation.css';
import { Link } from 'react-router-dom';

interface NavigationProps {
    toggleDarkMode: Function;
    inDarkMode:  boolean;
}

const Navigation: React.FC<NavigationProps> = ({ toggleDarkMode, inDarkMode }) => {
    const [open, setOpen] = useState(window.innerWidth > 895);

    const [folderSkillsOpen, setFolderSkillsOpen] = useState(false);
    const [folderAboutOpen, setFolderAboutOpen] = useState(false);

    const toggle = () => setOpen(!open);
    
    const toggleSkillsFolder = () => setFolderSkillsOpen(!folderSkillsOpen);
    const toggleAboutFolder = () => setFolderAboutOpen(!folderAboutOpen);

    const toggleIfNavigateOnMobile = () => !(window.innerWidth > 895) && setOpen(!open);

    function toggleTheme() {
        toggleDarkMode(!inDarkMode)
    }

    return (
     <aside className={`navigation ${open? '' : 'closed'}`}>
        <div className="icon" onClick={toggle}>
            { open? <RiCloseLine /> : <RiMenuFill /> }
        </div>
        <div className="icon-2" onClick={toggleTheme}>
            { inDarkMode? <RiMoonClearFill /> : <RiSunCloudyFill /> }
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
            <Link to="/blog"> blog</Link>
        </div>
     </aside>   
    )
}

export default Navigation;