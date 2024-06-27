function Students (props) {
return(
    <div>
        <img src={props.picture} alt="Picture" />
        <p>Name : {props.name} </p>
        <p>Age : {props.age} </p>
        <p>Student: {props.student ? "Yes" : "No"} </p>
    </div>
)
}
export default Students;