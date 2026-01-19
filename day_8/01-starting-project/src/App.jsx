import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import  CoreConcept  from "./components/CoreConcepts";
import  TabButton  from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data";

function App() {
//  The set function is the tirggering function for react that pushes react to re-render the component function. 
     const [selectedTopic, setSelectedTopic] = useState(false);

    function handleClick (selectedButton){
        //  selectedButton => "Components", "JSX", "Props", "State" : One OF These Values
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
        // Interesting logging values: Old values are executed, you need to know about the behavior of these useState(), 
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
          {CORE_CONCEPTS.map(concept => <CoreConcept key={concept.title} {...concept}/>)}
         </ul>

      </section>

      <section id="examples">
           <h2>Examples</h2>
           <menu> 
              {/* Used For Creating a List of Buttons */}
              <TabButton isSelected={selectedTopic === 'components' && true} onClick={() => handleClick("components")}>Components</TabButton>
              <TabButton isSelected={selectedTopic === 'jsx' && true} onClick={() => handleClick("jsx")}>JSX</TabButton>
              <TabButton isSelected={selectedTopic === 'props' && true} onClick={() => handleClick("props")}>Props</TabButton>
              <TabButton isSelected={selectedTopic === 'state' && true} onClick={() => handleClick("state")}>State</TabButton>
           </menu>
             <div id="tab-content">
              {selectedTopic 
              &&
              <> 
               <h3>{EXAMPLES[selectedTopic].title}</h3>

               <p>{EXAMPLES[selectedTopic].description}</p>

               <pre>
                 <code>
                  {EXAMPLES[selectedTopic].code}
                 </code>
               </pre>
               </>
               ||
               <p>Please Select A Topic.</p>
}
             </div>
      </section>
      </main>
    </div>
  );
}



export default App;
