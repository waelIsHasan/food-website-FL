import './Button.css'
export default function Button({name , width  , isActive=false , onClick}){
    let className = `button-${width}`;
    if(isActive){
        className+=" active";
    }
    return(
        <>
            <button  onClick={onClick} className={className}  >
                {name}
            </button>
        </>

    );

}