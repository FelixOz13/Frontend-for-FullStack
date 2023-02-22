import React from 'react'
import ButtonTreeCategories from "./ButtonTreeCategories";
import CardData12 from '../data/CardData12'
import Card from './Card'


function Norteño() {
   const cards12 = CardData12.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
                
                
                           
                        
            />
        )
    })  
  return (
    <div>
          
          <h1 className="title2">Musica Norteña</h1>
      <h4 className="headertext">Escoje tu categoria? ? </h4> 
      
           <ButtonTreeCategories/>
      
      <img className="indianaut" src="./images/aguiladorada.jpeg" alt="" />
          <img className="indianaut2" src="./images/aguiladorada.jpeg" alt="" />
          <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
            <div>
            <section className="cards-list">
               {cards12}
            </section>
            </div>
        </div>
  )
}

export default Norteño