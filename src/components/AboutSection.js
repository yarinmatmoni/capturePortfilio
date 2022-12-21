import React from 'react';
import home1 from "../img/home1.png";
import {About,Description,Hide,Image} from "../Style";
import {motion} from "framer-motion";
import {titleAnim,fade,phtoAnim} from "../animation";
import Wave from "./Wave";

function AboutSection() {
    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    Contect us for any photography or videography ideas that you have.
                    We have professionals with amazing skills.
                </motion.p>
                <motion.button variants={fade}>Contect Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={phtoAnim} src={home1} alt="guy with a camera"></motion.img>
            </Image>
            <Wave/>
        </About>
    )
};

export default AboutSection;
