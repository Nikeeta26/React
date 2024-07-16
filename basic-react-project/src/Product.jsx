import "./Product.css";
import Price from "./Pricedis";
// function Product({ title, price = 1, feature = [], feature2 }) {
//     //const list = feature.map((element) => <li>{element}</li>);
//     //const isDiscount = price > 3000 ? "50%" : "";    // use ternary oprator {price > 3000 ? <p>"Discount 5%"</p> : null}
//     let isDiscount = price>3000;
//     let styles = {backgroundColor : isDiscount ? "pink":""};
//     return (
//         <div className="Product" style={styles}>
//             <h3>{title}</h3>
//             <h5>Price: {price}</h5>
//             <p>{ feature.map((element) => <li>{element}</li>)}</p>
//             <p>{feature2}</p>
//             {isDiscount && <p>Discount 5%</p>}
//         </div>
//     );
// }

function Product({title,idx}){
    let oldPrices = ["345","76895","789","7890"];
    let newPrices = ["678","567","2245","6780"];
    let desscription = [["8,00 DPI","5 Progamming Button"], ["intutive surface","Design for Samsung 10"],["designed for iPad Pro","20% offer"],["Wireless"," 3 year warranty"]];
    return (
 <div className="Product">
   <h2>{title}</h2>
   {/* <p>{desscription[idx].map((element) => <li>{element}</li>)}</p> */}
   <p>{desscription[idx][0]}</p>
   <p>{desscription[idx][1]}</p>
   <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
 </div>
    )
}
export default Product;
