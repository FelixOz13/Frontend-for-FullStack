import Card from './Card'
import CardData5 from '../data/CardData5'
import ButtonTreeCategories from "./ButtonTreeCategories";


const cards5 = CardData5.map(item => {
   
     return (
         <Card
             key={item.id}
             item={item}
         />
        )
 }
    )
function Reggae() {
  return (
   <div>
     
      <h1 className="title2">Musica Reggae</h1>
      <h4 className="headertext">Escoje tu categoria? ? </h4>
      
          <ButtonTreeCategories />
      
      <img className="indianaut" src="./images/moonaut.png" alt="" />
          <img className="indianaut2" src="./images/moonaut.png" alt="" />
    <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
            <section className="cards-list">
               {cards5}
            </section>
            
        </div>
  )
}

export default Reggae