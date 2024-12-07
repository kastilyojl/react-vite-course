import Student from './Props';

function App() {
  return(
    <>
      {/* Calling the Student component and passing props values */}
      <Student age={22} isStudent={true} />
    </>
  );
}

export default App
