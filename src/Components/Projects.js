import React from "react"
import Card from "./Card";
import PodcastImage from "./Images/Screenshot 2024-03-23 195905.png";
import EcommerceImage from "./Images/Shopping cart.png";
import YoutubeClone from "./Images/youtube-clone.png";
import blinkitClone from "./Images/blinkit-clone.png";
import portfolioImage from "./Images/Portfolio.png";

const Projects = ()=>{

    let projects = [{
        name:"Podcast App",
        imgsrc:PodcastImage,
        href:"https://react-podcast.netlify.app/",
        desc: "I have developed a comprehensive Podcast application using React for the frontend, firebase for backend, along with HTML, CSS, and JavaScript for the user interface. The app is designed to provide a seamless experience for users who want to engage with podcasts in various ways.Key features of the app includes Podcast Creation, Search Functionality & Listening Experience. Overall, the Podcast app combines modern web technologies and best practices to deliver a user-friendly platform for podcast enthusiasts to explore, create, and enjoy content effortlessly."
        
        
    },{
        name:"E-commerce App",
        imgsrc:EcommerceImage,
        href:"https://necommerceapp.netlify.app/",
        desc: "I developed an E-commerce app using React, HTML, CSS, and JavaScript, integrated with Axios for API calls and Redux for state management. The app features a Home page displaying products fetched from the API, a Checkout page for managing cart items, and seamless checkout functionality with a success message upon completion."
    },{
        name:"My Portfolio",
        imgsrc:portfolioImage,
        href:"#",
        desc: "I have crafted a comprehensive portfolio showcasing my skills in HTML, CSS, JavaScript, and React. Through elegant design and interactive elements, I demonstrate proficiency in frontend development and user experience enhancement. My portfolio encapsulates a diverse range of projects, highlighting my ability to create responsive and dynamic web applications."
    },
    {
        name:"Youtube Clone",
        imgsrc:YoutubeClone,
        href:"https://clonned-yt.netlify.app",
        desc: "I created a YouTube clone using HTML, CSS, and JavaScript, featuring a user-friendly UI resembling YouTube's interface. The app includes a search functionality with API integration, allowing users to search for and play YouTube videos seamlessly."
    },
    {
        name:"Blinkit Clone",
        imgsrc:blinkitClone,
        href:"https://clone-blinkit.netlify.app",
        desc: "I developed a responsive Blinkit clone using vanilla HTML and CSS, mirroring the original website's UI across different screen sizes. The clone replicates Blinkit's interface accurately to match the user experience of the actual Blinkit website."
    }
]



    return(
        <div className="section">
            <h1>Projects</h1>
            {
                projects.map((item)=>(
                    <Card name={item.name} src={item.imgsrc} href={item.href} desc={item.desc}/>
                ))
            }
            
            
        </div>
    )
}

export default Projects;