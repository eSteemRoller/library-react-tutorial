
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'


export default function Rating({ rating }) {
  const validRating = typeof rating === 'number' && rating >= 0 ? rating : 0;
  const fullStars = Math.floor(validRating);
  const hasHalfStar = !Number.isInteger(validRating);

  return (
    <div className="book__ratings">
      {Array.from({ length: fullStars }).map((_, index) => (
        <FontAwesomeIcon icon={faStar} key={index} />
      ))}
      {hasHalfStar && <FontAwesomeIcon icon={faStarHalfAlt} />}
    </div>
  );
}


// export default function Rating({ rating }) {
//   return (
//     <div className="book__ratings">
//         {
//             new Array(Math.floor(rating)).fill(0).map((_, index) => 
//                 <FontAwesomeIcon icon={faStar} key={index}/>)
//         }
//         {
//             !Number.isInteger(rating) && 
//                 <FontAwesomeIcon icon={faStarHalfAlt} />
//         }
//     </div>
//   );
// }
