import CardData10 from '../data/CardData10'
import Card from './Card'

import ButtonTreeCategories from "./ButtonTreeCategories";


 const cards10 = CardData10.map(item => {
   
     return (
         <Card
             key={item.id}
             item={item}
         />
        )
 })

function Alternative() {
  return (
    <div>
      
      <h1 className="title2">Rock Alternativo</h1>
      <h4 className="headertext">Escoje tu categoria? ? </h4>
      
      <ButtonTreeCategories/>
      <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
      <img className="indianaut" src="./images/indianaut.png" alt=""/>
            <section className="cards-list">
               {cards10}
            </section>
            
        </div>
  )
}

export default Alternative