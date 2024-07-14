import "./Product.css";

function Product({title,price=1,feature,feature2}){
    //console.log(title);
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5>Price:{price}</h5>
            <p>{feature}</p>
            <p>{feature2}</p>
        </div>
    )
}

export default Product;