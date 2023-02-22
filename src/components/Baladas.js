import CardData4 from '../data/CardData4'
import Card from './Card'
import ButtonTreeCategories from "./ButtonTreeCategories";


 const cards4 = CardData4.map(item => {
   
     return (
         <Card
             key={item.id}
             item={item}
         />
        )
 })

function Baladas() {
  return (
    <div>
      
      <h4 className="headertext">Escoje tu categoria? ? </h4>
      
      <ButtonTreeCategories/>
      
      <img className="indianaut" src="./images/indianaut.png" alt="" />
      <img className="indianaut2" src="./images/indianaut.png" alt=""/>
      <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
            <section className="cards-list">
               {cards4}
            </section>
            
        </div>
  )
}

export default Baladas