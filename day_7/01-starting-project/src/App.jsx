import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import  CoreConcept  from "./components/CoreConcepts";
import  TabButton  from "./components/TabButton";

function App() {
    function handleClick (){
        //  Naming Convention: handle Prefix. 
        console.log("Hello World form Handle Click!");
    }

  return (
    <div>
       <Header/>
      <main>
        <h2>Time to get started!</h2>
      


      <section id="core-concepts">

         <h2>Core Concepts</h2>

         <ul>
          {/*  First Use of Our Prop: the attributes you passed on to a component function is known as prop. */}
          {CORE_CONCEPTS.map(concept => <CoreConcept  title={concept.title} desc={concept.description} img={concept.image}/>)}
         </ul>

      </section>

      <section id="examples">
           <h2>Examples</h2>
           <menu> 
              {/* Used For Creating a List of Buttons */}
              <TabButton onClick={handleClick}>Components</TabButton>
              <TabButton onClick={handleClick}>JSX</TabButton>
              <TabButton onClick={handleClick}>Props</TabButton>
              <TabButton onClick={handleClick}>State</TabButton>

           </menu>
      </section>
      </main>
    </div>
  );
}



export default App;
