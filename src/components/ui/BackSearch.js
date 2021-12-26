import React from 'react'
import '../../../src/index.css';
import image from '../../assets/backgroundImg.png';
import Searcher from '../ui/Searcher'


export const BackSearch = () => {
    return (
        <div className="container">
            <img id="img-searcher" src={image} alt=""></img>
            <div id="text-on">
                <Searcher/>
            </div>
        </div>

    )
}


