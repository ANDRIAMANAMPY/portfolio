import Title from "./Title";

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgPRISMA from "../assets/techno/prisma.webp";
import imgFigma from "../assets/techno/iconfig.jpeg";



import google from "../assets/companies/Iz-e center.png";


const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Node.js", image: imgNODE },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "TypeScript", image: imgTYPE },
    { id: 8, name: "Next.js", image: imgNEXT },
    { id: 9, name: "Prisma", image: imgPRISMA },
    { id: 10, name: "Figma", image: imgFigma },
];

 
const experiences = [
    {
        id: 1,
        role: "Développement d'une application web pour l'analyse des ventes dans un restaurant avec les Techologies : vue.js pour le frontend, express.js pour le backend et mongo.db pour les bases de données",
        company: "au sein d'IZ-E Center",
        period: "Juillet 2023 - Décenmbre 2023",
        description: [
            "Stage de 5 mois pour l'obtention de maste II en Informatique (ENI).",
        ],
        image: google,
    },
    {
        id: 2,
        role: "Développement d'une application ChatBox message avec les Technologies React.js et Node.js",
        company: "au sein de la Trésorerie Générale d'Antaninarenina (TGA) Antananrivo ",
        period: "Novambre 2020 - Mars 2021",
        description: [

            "stage de 4 mois pour l'obtention de Licence en Informatique (ENI).",
        ],
        image: google,
    },
    {
        id: 3,
        role: "développement d'une application des ressources Humaines ",
        company: "Direction Régionale du Budget et du Finances",
        period: "Octobre 2019 - Janvier 2020",
        description: [
            "stage de 2 mois pour la fin d'année en L2 en Informatique (ENI).",
        ],
        image: google,
    },
   
    
];

const Experiences = () => {
    return (
        <div id='Experiences'>
            <Title title="Expériences et Téchnologies" />
                <div className="flex flex-col-reverse md:flex-row justify-center items-center">
                    <div className="flex flex-wrap gap-4 justify-center 
                    items-center ">
                    {skills.map((skill) => (
                        <div key={skill.id} className=" flex justify-center items-center flex-col">
                            <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                                <img src={skill.image} alt={skill.name}
                                className="object-cover rounded-full h-full w-full"
                                />
                            </div>
                            <span className="mt-2 text-sm">{skill.name}</span>
                        </div>
                    ))}
                    </div>
                
                    <div className="md:ml-4 flex flex-col space-y-4">
                {experiences.map((experience) => (
                            <div
                                key={experience.id}
                                className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg"
                            >
                                <div className="flex items-center">
                                    <img
                                        src={experience.image}
                                        alt={experience.company}
                                        className="object-cover h-7 w-7 rounded-full mb-10"
                                    />
                                    <div className="ml-4">
                                        <h1 className="text-xl text-secondary font-serif">
                                            {experience.role} , <span className="text-white">{experience.company}</span>
                                        </h1>
                                        <span className="text-sm "><span className="underline font-bold">stage</span> : {experience.period}</span>
                                    </div>
                                </div>
                                <ul className="list-disc ml-16 mt-2">
                                    {experience.description.map((desc, index) => (
                                        <li key={index}>
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>    
        </div>
                           
                        
    
    )
}

export default Experiences
