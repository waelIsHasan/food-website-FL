import './Button.css'
export default function Button({name , width  , isActive=false}){
    let className = `button-${width}`;
    if(isActive){
        className+=" active";
    }
    return(
        <>
            <button  className={className} type="submit" onSubmit={(e)=>{e.preventDefault()}}>
                {name}
            </button>
        </>

    );

}