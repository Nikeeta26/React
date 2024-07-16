import Product from "./Product";


function ProductTab(){
   let styles = {
     display:"flex",
     flexWrap:"wrap",
     justifyContent:"center",
     alignItems:"center",
   };
   //let option =[<li>"hi-tect"</li>,<li>"durable"</li>,<li>"fast"</li>];
   //let option2 ={a:"hi-tect" ,b:"durable", c:"fast"};
   return(
    <div style={styles}>
   {/* <Product title="phone" price={3000} feature={["hi-tech","durable","fast"]} />
    <Product title="laptop" price={3200} feature={["nikeeta","sakshi"]} />
    <Product title="pen" price={2300} />
    <Activity userName="nikeeta" textColor="red"/> */}
   
    <Product title="Logitech MX Master" idx={0}/>
    <Product title="Apple Pencil" idx={1}/>
    <Product title="Amazone card" idx={2}/>
    <Product title="Cloths" idx={3}/>
    </div>
   )
}

export default ProductTab;