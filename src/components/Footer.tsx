import { Container, Facebook, Twitter, Youtube } from "lucide-react"


const Footer = () => {
  return (
    <div id="Footer">
      <footer className="footer footer-center p-10 bg-gray-900 rounded-xl">
  <aside> 
  <Container className='w-10 h-10'/>
    <p className="font-bold">
            H
            <span className='text-accent'>ajatiana</span>
      <br />
    </p>
    <div className="flex flex-col items-center justify-center">
      <p><span className="text-accent font-bold">Adresse Email :</span> andriamanampyhajatiana.io@gmail.com</p>
      <p><span className="text-accent font-bold">Numéro Téléphone :</span> 0389690760</p>
    </div>
    </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <Twitter className="w-6 h-6 text-current" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <Youtube className="w-6 h-6 text-current" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <Facebook className="w-6 h-6 text-current" />
                    </a>
    </div>
  </nav>
</footer>
    </div>
  )
}

export default Footer
