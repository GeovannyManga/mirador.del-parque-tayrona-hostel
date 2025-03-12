interface textoProps{
    text1: string
}
const H2Title = ({text1}:textoProps) => {
    return (
      <h2 className="text-4xl md:text-6xl text-white font-black">
        {text1}
      </h2>
    );
  };
  
  export default H2Title;
  