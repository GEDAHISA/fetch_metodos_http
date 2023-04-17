export function InputText(props) {

    console.log(props)

    return(
        <input type="text" name={props.name} id={props.id} placeholder={props.placeholder}/>
    );


}