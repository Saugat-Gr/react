const reactDescription = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max){
    return Math.floor(Math.random() * (max + 1))
}


function App() {
  return (
    <div>
       <Header/>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}


function Header(){

  //  Keep your JS logic outside of the JSX expression i.e outside of the return block....

   return(
    <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescription[getRandomInt(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
   )
}

export default App;
