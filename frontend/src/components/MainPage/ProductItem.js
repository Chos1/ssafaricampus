const ProductItem = () =>{
  return(
      <div className="card">
            <div className="card-top">
              <img src="{item.img_link}" alt="{item.title}" />
              <h1>{item.title}</h1>
            </div>
            <div className="card-bottom">
              <h3>{item.price}</h3>
              <p>{item.shorttitle}</p>
            </div>
          </div>
  );
}

export default ProductItem;