import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import  CoreConcept  from "./components/CoreConcepts";

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







export default App;
