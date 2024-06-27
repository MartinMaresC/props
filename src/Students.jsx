import PropTypes from 'prop-types';
import logo from './logo.svg';
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

Students.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    student: PropTypes.bool,
}

Students.defaultProps = {
    name: "Default Name",
    age: 0,
    Student: false,
    picture: logo,
}
export default Students;