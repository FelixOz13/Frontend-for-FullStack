import ReactStars from "react-rating-stars-component";



function StarRating(props) {
 const randomValue = 3 + Math.random() * 2;

  return (
    <div>
      <ReactStars
        size={35}
        isHalf={true}
        count={5}
        value={randomValue}
      />
    </div>
  );
}

export default StarRating;