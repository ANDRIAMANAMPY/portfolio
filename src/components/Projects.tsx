import Title from "./Title"

import img1 from '../assets/projects/E-commerce-blanc.png'
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';
import img4 from '../assets/projects/4.png';
import img5 from '../assets/projects/5.png';
import img6 from '../assets/projects/6.png';
import { Github, Video } from "lucide-react";

const projects = [
    {
        id: 1,
        title: 'Site E-commerce',
        description: 'Ceci est un site vitrine pour les ventes des appareils éléctroniques dans un magasin. Vous-pouvez visiter le site en cliquant sur le bouton "visite site ou vous pouvez voir le source sur github en cliquant sur le bouton voir code".',
        technologies: ['React', 'Tailwind CSS'],
        demoLink: 'https://shop-mada.netlify.app/',
        repoLink: 'https://github.com/ANDRIAMANAMPY/E-commerce',
        image: img1,
    },
    {
        id: 2,
        title: 'Fitnees-Gym',
        description: 'On a ici un site vitrine ge gestion de salle de sport. Vous-pouvez visiter le site en cliquant sur le bouton "visite site ou vous pouvez voir le source sur github en cliquant sur le bouton voir code".',
        technologies: ['React.js', 'TypeScript', 'Tailwindcss'],
        demoLink: 'https://gym-mada-fitness.netlify.app/',
        repoLink: '#',
        image: img2,
    },
    {
        id: 3,
        title: 'Portfolio interactif',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        demoLink: '#',
        repoLink: '#',
        image: img3,
    },
    {
        id: 4,
        title: 'Application de Chat en temps réel',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['React', 'Socket.io', 'Express.js'],
        demoLink: '#',
        repoLink: '#',
        image: img4,
    },
    {
        id: 5,
        title: 'Système de réservation de salles',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['Next.js', 'MongoDB', 'Chakra UI'],
        demoLink: '#',
        repoLink: '#',
        image: img5,
    },
    {
        id: 6,
        title: 'Analyseur de sentiment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['Python', 'Flask', 'NLTK'],
        demoLink: '#',
        repoLink: '#',
        image: img6,
    },
];


const Projects = () => {
    return (
        <div className="mt-10" id="Projects">
            <Title title="Mes Projets" />
            <div className="grid md:grid-cols-3 gap-4">
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
