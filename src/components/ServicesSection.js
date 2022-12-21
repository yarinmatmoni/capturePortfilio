import React from 'react';
//Import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
//Import image
import home2 from "../img/home2.png";
//Import Style
import {About,Description,Image} from "../Style";
import styled from 'styled-components';
import { motion } from 'framer-motion';
//Import Animation
import {fade} from "../animation";
import { useScroll } from './useScroll';

function ServicesSection() {
    const [element,controls] = useScroll();

    return (
        <Services variants={fade} ref={element} animate={controls} initial="hidden">
            <Description>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock-icon" ></img>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum doler sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork-icon" ></img>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum doler sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm-icon" ></img>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum doler sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money}  alt="money-icon" ></img>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum doler sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="camera" ></img>
            </Image>
        </Services>
    )
};

const Services = styled(About)`

    h2{
        padding-bottom: 5rem;
    }

    p{
        padding: 2rem 0rem 4rem 0rem;
        width: 70%;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (max-width:1300px){
        justify-content: center;
    }
`;

const Card = styled.div`
    flex-basis: flex;
    
    .icon{
        display: flex;
        align-items: center;

        h3{
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`;

export default ServicesSection;
