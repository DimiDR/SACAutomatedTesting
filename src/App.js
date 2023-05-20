import "./App.css";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      <div>
        <h1>SAC Automated Testing</h1>
        <h2>Input your credentials and URL for SAC</h2>
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
