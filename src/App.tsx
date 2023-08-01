import './App.css';

function App() {
  return (
    <div>
      <form>
        <label>First Name: </label>
        <input type="text" />
        <label>Last Name: </label>
        <input type="text" />
        <label>Email: </label>
        <input type="email" />
        <label>Age: </label>
        <input type="number" />
        <label>Password: </label>
        <input type="password" />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
