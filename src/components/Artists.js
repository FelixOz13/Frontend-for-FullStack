import SponsorContainer from "./SponsorContainer"
import BandsData from '../data/BandsData'
import ButtonTreeCategories from "./ButtonTreeCategories";
import Card from "./Card"



const cards = BandsData.map(item => {
   
     return (
         <Card
             key={item.id}
             item={item}
         />
        )
 }
    )

function Artists() {
  return (
    <div>
    
      <h4 className="headertext">Escoje tu categoria? ? </h4>
      
      <ButtonTreeCategories />
      <img className="indianaut" src="./images/indianaut.png" alt="" />
      <img className="indianaut2" src="./images/indianaut.png" alt=""/>
      <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
      <section className="cards-list">
               {cards}
        </section>
     <SponsorContainer/>
    </div>
  )
}

export default Artists