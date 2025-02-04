import Title from "./Title"

import img1 from '../assets/projects/E-commerce-blanc.png'
import img2 from '../assets/projects/Fitness-blanc.png';
import img3 from '../assets/projects/car-rental-noir.png';
import img4 from '../assets/projects/Portfolio.png';
import { Github, Video } from "lucide-react";

const projects = [
    {
        id: 1,
        title: 'Site E-commerce',
        description: 'Ceci est un site vitrine pour les ventes des appareils éléctroniques. Vous-pouvez visiter le site sur "visite site" ou vous pouvez voir le source sur github en cliquant sur le bouton "voir code".',
        technologies: ['React', , 'Typescript','Tailwind CSS'],
        demoLink: 'https://shop-mada.netlify.app/',
        repoLink: 'https://github.com/ANDRIAMANAMPY/E-commerce',
        image: img1,
    },
    {
        id: 2,
        title: 'Fitnees-Gym',
        description: 'On a ici un site vitrine ge gestion de salle de sport. Vous-pouvez visiter le site en cliquant sur le bouton "visite site" ou vous pouvez voir le source sur github en cliquant sur le bouton "voir code".',
        technologies: ['React.js', 'TypeScript', 'Tailwindcss'],
        demoLink: 'https://gym-mada-fitness.netlify.app/',
        repoLink: 'https://github.com/ANDRIAMANAMPY/gym-fitness',
        image: img2,
    },
    {
        id: 3,
        title: 'Vente des voitures',
        description: 'On a ici un site vitrine ge gestion de salle de sport. Vous-pouvez visiter le site en cliquant sur le bouton "visite site" ou vous pouvez voir le source sur github en cliquant sur le bouton "voir code".',
        technologies: ['React', 'Typescript', 'Tailwindcss'],
        demoLink: 'https://shop-voiture-mada.netlify.app/',
        repoLink: 'https://github.com/ANDRIAMANAMPY/Vente-voiture',
        image: img3,
    },
    {
        id: 4,
        title: 'Mon autre Portfolio',
        description: 'Voici mon autre portfolio que j\'ai réalisé. Vous-pouvez visiter le site en cliquant sur le bouton "visite site" ou vous pouvez voir le source sur github en cliquant sur le bouton "voir code".',
        technologies: ['React', 'Typescript', 'Taillwindcss'],
        demoLink: 'https://gasy-codeurs-64d73.web.app/',
        repoLink: 'https://github.com/ANDRIAMANAMPY/Mon_portfolio/tree/master/src',
        image: img4,
    },
];


const Projects = () => {
    return (
        <div className="mt-10" id="Projects">
            <Title title="Mes Projets récents 2025" />
            <div 
            className="grid md:grid-cols-3 gap-4"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            data-aos-delay="100">
                {projects.map((project) => (
                    <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg ">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-xl h-56 object-center"
                        />
                        <div>
                            <h1 className="my-2 font-bold">
                                {project.title}
                            </h1>
                            <p className="text-sm">{project.description}</p>

                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map((tech) => (
                                <span className="badge badge-accent badge-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex">
                            <a className="btn btn-accent w-1/2" href={project.demoLink} target="blank" rel="noopener noreferrer">
                                visite site
                                <Video className="w-4" />
                            </a>

                            <a className="btn btn-neutral w-1/2 ml-2" href={project.repoLink} target="blank" rel="noopener noreferrer">
                                <Github className="w-4" />Voir code
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Projects
