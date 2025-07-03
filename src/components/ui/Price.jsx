



export default function Price({ originalPrice, salePrice }) {
  const hasValidOriginal = typeof originalPrice === 'number';
  const hasValidSale = typeof salePrice === 'number';

  return (
    <div className="book__price">
      {hasValidSale ? (
        <>
          {hasValidOriginal && (
            <span className="book__price--normal">
              ${originalPrice.toFixed(2)}
            </span>
          )}
          ${salePrice.toFixed(2)}
        </>
      ) : (
        <>
          {hasValidOriginal ? `$${originalPrice.toFixed(2)}` : 'Price unavailable'}
        </>
      )}
    </div>
  );
}


// export default function Price({ originalPrice, salePrice }) {
//   return (
//     <div className="book__price">
//         {salePrice ? (
//                 <>
//                     <span className="book__price--normal">
//                         ${originalPrice}
//                     </span>
//                     ${salePrice.toFixed(2)}
//                 </>
//             ) : 
//             (
//                 <>${originalPrice.toFixed(2)}</>
//             )
//         }
//     </div>
//   );
// }
