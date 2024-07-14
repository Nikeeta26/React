import Product from "./Product";

function ProductTab(){
   let option =["hi-tect","durable","fast"];
   let option2 ={a:"hi-tect" ,b:"durable", c:"fast"};
   return(
    <>
    <Product title="phone" price={30000} feature={["hi-tech","durable","fast"]} feature2={option2.a}/>
    <Product title="laptop" price={32000}/>
    <Product title="pen" price={23000}/>
    </>
   )
}

export default ProductTab;