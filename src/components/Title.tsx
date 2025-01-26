interface TitleProps {
    title : string
}
const Title = ({title} : TitleProps) => {
  return (
      <h1 className="uppercase font-bold mb-5 md:mb-10  text-center text-3xl text-accent">
        {title} 
      </h1>
  )
}

export default Title
