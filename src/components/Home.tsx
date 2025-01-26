import { Mail } from "lucide-react"
import img from '../assets/Haja.jpg'
const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10" id="Home">
      <div className="flex flex-col">
            <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                Bonjour , <br /> je m'appelle <br />
                <span className="text-accent">ANDRIAMANAMPY <br /> Hajatiana</span>
            </h1>
            <p className="my-4 text-md text-center md:text-left">
                Je suis un Développeur Fullsatck Next.js avec 5 ans <br /> 
                d'exprériences en utilisant React comme front-end <br /> 
                et Node.js  pour le backend avec des Api routes et plusieurs <br />  autres Technologies comme Taillwindcss,clerk, pisma, ...<br />
                Contactez-moi si vous avez besoin de mes services
            </p>
            <a href="#" className="btn btn-accent hover:btn-success md:w-fit">
                <Mail className="w-5 h-5"/>
                Contactez-moi
            </a>
      </div>
      <div className="md:ml-65">
            <img src={img} alt="" className="w-96 h-96 object-right-top border-8 border-accent shadow-xl"
            style={{
                borderRadius: "50% 50% 50% 50% / 0% 100% 0% 100%"
                }}
                /> 
      </div>
    </div>
  )
}

export default Home
