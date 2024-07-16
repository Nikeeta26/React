function handleClickOver(event){
    console.log("hello!");
    console.log(event);
}

function handleMouseOver(){
    console.log("Bye!");
}

function handledubbleClickEvent(){
    console.log("dobble click event");
}

export default function Button(){
    return(

        <div>
            <button onClick={handleClickOver}>Click me</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet,
                 consectetur adipisicing elit.
                  Sit adipisci hic veniam repellat commodi officiis iusto reprehenderit enim expedita maxime.
                   Vero sit cum soluta ex consequatur eligendi est nemo facilis.</p>
             <button onDoubleClick={handledubbleClickEvent}>doubble Click me</button>
        </div>
    );
}