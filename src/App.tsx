import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    useEffect(() => {
        // Set background color for html and body based on mode, with !important
        const color = mode === 'dark' ? '#000000' : '#f8f9fa';
        document.body.style.backgroundColor = color;
        document.documentElement.style.backgroundColor = color;
        document.body.setAttribute('style', `background-color: ${color} !important;`);
        document.documentElement.setAttribute('style', `background-color: ${color} !important;`);
    }, [mode]);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main parentToChild={{mode}}/>
            <Expertise/>
            <Timeline/>
            {/*<Project/>*/}
            <Contact/>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;