import React  from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss';
import {DiApple , DiAndroid} from "react-icons/di";
import {FaDev , FaDatabase} from "react-icons/fa";



const personalDetails = [
    {
        label: "Name",
        value: "Shabana Noori",
    },
    {
        label: "Age",
        value: "19",
    },
    {
        label: "Address",
        label: "AFghanistan",
    },
    {
        label: "Email",
        label: "shabananoori8877@gmail.com",
    },
    {
        label: "Contact No",
        label: "+93 728703655",
    },
];


const jobSummary = 'Seasoned and indepondent Front End Developer with 2 years of experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through officient website development, proactive feature optimization, and relentless debugging. very passionate about aesthetics and UI design, It is imperative that you provide a thorough and professional approaph to your resume. As a Front End Developer you will be by your abillity to use UX and UI concepts and follow design guidelines. It is about expressing your attention to detail an you can help implement design ideas for your future employer'

const About = () => {
    return(
        <section id="about" className="about">
            <PageHeaderContent
            headerText = "About Me"
            icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about_content">
                <div className="about_content_personalWrapper">
                <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform : "translateX(-900px)",
            }}
            end={{
               transform : "translatex(0px)",
            }}
        >

          <h3>Front End Developer</h3>
          <p>{jobSummary}</p>
          </Animate>
           

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform : "translateX(500px)",
            }}
            end={{
               transform : "translatex(0px)",
            }}
        >
          
          <h3 className="personalinformationHeaderText">Personal Information</h3>
          <ul>
              {
                  personalDetails.map((item,i)=>(
                     <li key={i}>
                         <span className="title">{item.label}</span>
                         <span className="value">{item.value}</span>
                     </li>        
                  ))}
               </ul>
             </Animate>
            </div>
            <div className="about_content_servicesWrapper">
            <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform : "translateX(600px)",
            }}
            end={{
               transform : "translatex(0px)",
            }}
        >
                <div className="about_content_servicesWrapper_innerContent">
                <div>
                    <FaDev size={60}color="var(--yell-theme-main-color)"/>
                </div>
                <div>
                    <DiAndroid size={60}color="var(--yell-theme-main-color)"/> 
                </div>
                <div>
                    <FaDatabase size={60}color="var(--yell-theme-main-color)"/>
                </div>
                <div>
                    <DiApple size={60}color="var(--yell-theme-main-color)"/>
                </div>
                </div>
                </Animate>
            </div>
          </div>
        </section>
    );
};

export default About;