import PropTypes from 'prop-types';

// props (short for properties)
//     -> passing data from a parent component to a child component. 
//      -> Props are read-only

function Student({ name = 'Guess', age = 18, isStudent = true }) { // Set Default Props Value

    return(
        <>
            <p>FirstName: {name}</p>
            <p>Age: {age}</p>
            <p>isStudent: {isStudent ? "true" : "false"}</p>
        </>
    );
};

// Validate the type of props passed to components
// You will see a warning in the console if the prop type is incorrect
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
};

export default Student