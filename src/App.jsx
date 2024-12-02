import Student from './Props';

function App() {
  return(
    <>
      {/* Calling the Student component and passing props values */}
      <Student name="John Doe" age={22} isStudent={true} />
    </>
  );
}

export default App
