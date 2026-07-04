import "./App.css";
import logo from "./assets/react.svg";

export function Card(){
return <>
     <div className="card">
      <div className="card_content">
        <img className="logo" src={logo} alt="react_logo"></img>
      </div>
      <section><h2>What is React?</h2></section>
      <section><ul>
        <li>React is a JavaScript library for building user interfaces (UI).</li>
        <li>Its main purpose is to make it easy to build interactive, reusable, and maintainable web applications.</li>
      </ul></section>
      <section><h2>Why was React created?</h2></section>
      <section> <ol> 
        <p>Imagine building a website like:</p>
         <li>Amazon</li>
         <li>Instagram</li>
         <li>YouTube</li>
         <li>Netflix</li>
        </ol></section>
            </div>
</>
}

function App() {
  return (
    <>
     <Card />
    <h1 >Hello Shanawaj!</h1>
    </>
   
  );
}

export default App;