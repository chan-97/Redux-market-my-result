import React, { useState, useEffect, useRef } from "react";
import "./Main.css";

export default function Main () {
    const [mainImages, setMainImages] = useState([]);
    const refs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef()]);

    useEffect(() => {
        fetch("/data/mainImage.json")
        .then(res => res.json())
        .then(res => setMainImages(res.mainImages));
    }, []);

    const scrollToNextView = (i) => {
        window.scrollTo({
            top: refs.current[i + 1].current.offsetTop,
            behavior: 'smooth'
        })
    };

    const mainViews = mainImages.map((img, i) => {
        const isLast = mainImages.length - 1 === i;
        return (<div className="image-container" ref={refs.current[i]} key={img.id}>
                    <img 
                        className="main-image" 
                        src={img.src} 
                        alt="main-images" 
                    />
                    {isLast ? 
                    <i 
                        onClick={() => window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        })}
                        style={{ transform: 'scaleY(-1)' }}
                        className="fas fa-arrow-down" 
                    /> : 
                    <i
                        onClick={() => scrollToNextView(i)}
                        style={{ filter: 0 === i ? 'invert(0)' : 'invert(1)' }}
                        className="fas fa-arrow-down" 
                    />}
                </div>
                )
    });

    return (
        <div className="main">
            {mainViews}
        </div>
    );
}


