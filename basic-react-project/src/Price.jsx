 function Price({oldPrice, newPrice}){
    let oldStyles = {
        textDecorationLine: 'line-through',
        }
        let newStyle = { 
            fontWeight:"bold",
        }
    let styles = {
        backgroundColor:"#e0c367",
        height:"30px",
        borderBottomLeftRadius:"20px",
        borderBottomRightRadius:"20px",
    }   
    
  return (
      <div style={styles}>
        <span style={oldStyles}>{oldPrice}</span>
        &nbsp;&nbsp;&nbsp;
        <span style={newStyle}>{newPrice}</span>
      </div>
  );
}

export default Price;