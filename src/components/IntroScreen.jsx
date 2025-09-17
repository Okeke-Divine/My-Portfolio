// IntroScreen.jsx
import { useEffect, useState } from 'react';
import '../assets/css/introScreen.css';

export default function IntroScreen() {
    const [isVisible, setIsVisible] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Show the intro for 2 seconds
        const introTimer = setTimeout(() => {
            setIsVisible(false);
        }, 3000);

        // After animation completes, remove from DOM
        const removeTimer = setTimeout(() => {
            setShowContent(true);
        }, 3500);

        return () => {
            clearTimeout(introTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (showContent) return null;

    return (
        <div className={`intro-screen ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="intro-content">
                <div className="logo-animation">
                    <svg className="logo-svg" viewBox="0 0 100 100">
                        <polygon
                            points="50,5 87.5,30 87.5,70 50,95 12.5,70 12.5,30"
                            className="logo-hexagon"
                        />
                        <text
                            x="51"
                            y="70"
                            textAnchor="middle"
                            className="logo-d"
                        >
                            D
                        </text>
                    </svg>
                </div>
                <div className="intro-text">
                    <span className="intro-name">Divine-Vessel O.</span>
                    <span className="intro-tagline">Full Stack Software Engineer</span>
                </div>
            </div>
        </div>
    );
}