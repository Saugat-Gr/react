import { CORE_CONCEPTS } from "./data";

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


      <section id="core-concepts">

         <h2>Core Concepts</h2>

         <ul>
          {/*  First Use of Our Prop: the attributes you passed on to a component function is known as prop. */}
          {CORE_CONCEPTS.map(concept => <CoreConcept title={concept.title} desc={concept.description} img={concept.image}/>)}
         </ul>

      </section>
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


function CoreConcept(props){ 

     return (
       <li>
         <img src={props.img} alt="" />
         <h3>{props.title}</h3>
         <p>{props.desc}</p>
       </li>
     )

}

export default App;
