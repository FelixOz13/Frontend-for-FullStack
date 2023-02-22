import CardData6 from '../data/CardData6'
import Card from './Card'
import ButtonTreeCategories from "./ButtonTreeCategories";



const cards6 = CardData6.map(item => {
   
     return (
         <Card
             key={item.id}
             item={item}
         />
        )
 }
    )

function ClassicRock() {
  return (
   <div>
         
          <h1 className="title2">Rock Clasico Americano</h1>
          <h4 className="headertext">Escoje tu categoria? ? </h4>
          
      <ButtonTreeCategories />
         
         <img className="indianaut" src="./images/astronaut.png" alt="" />
          <img className="indianaut2" src="./images/rockguitarist.jpg" alt="" />
          <img className="indianaut" src="./images/moonaut.png" alt="" />
          <img className="indianaut2" src="./images/astronaut.png" alt="" />
           <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
            <section className="cards-list">
               {cards6}
            </section>
            
        </div>
  )
}

export default ClassicRock