import CardData8 from '../data/CardData8'
import Card from './Card'
import ButtonTreeCategories from "./ButtonTreeCategories";


const cards8 = CardData8.map(item => {
   
     return (
         <Card
             key={item.id}
             item={item}
         />
        )
 }
    )

function Clubmusic() {
  
    return (
   <div>
           
            <h1 className="title2">Musica Electronica</h1>
            <h4 className="headertext">Escoje tu categoria? ? </h4>
            
            
         <ButtonTreeCategories/>
             <img className="indianaut" src="./images/electronauts.jpeg" alt="" />
            <img className="indianaut2" src="./images/electronauts.jpeg" alt=""/>
          <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
            <section className="cards-list">
               {cards8}
            </section>
            
        </div>
  )
}

export default Clubmusic