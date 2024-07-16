function handleSubmit(event){
    event.preventDefault();
    console.log("form submit");
console.log(event);
}

export default function Formevent(){
    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="write somethig"/>
            <button>Submit</button>
        </form>
    )
}