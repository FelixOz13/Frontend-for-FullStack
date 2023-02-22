import CardData3 from '../data/CardData3'
import Card from '../components/Card'
import ButtonTreeCategories from "./ButtonTreeCategories";



  const cards3 = CardData3.map(item => {
   
     return (
         <Card
             key={item.id}
             item={item}
         />
        )
 }
    )
function RapTrap() {
  return (
    <div>
      
      <h1 className="title2">Rap  Trap y Hip-Hop</h1>
      <h4 className="headertext">Escoje tu categoria? ? </h4>
      
      <ButtonTreeCategories />
      
      <img className="indianaut" src="./images/indianaut.png" alt="" />
      <img className="indianaut2" src="./images/rap.jpeg" alt="" />
      <img className="indianaut2" src="./images/astronaut.png" alt="" />
      <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
            <section className="cards-list">
               {cards3}
            </section>
            
        </div>
  )
}

export default RapTrap