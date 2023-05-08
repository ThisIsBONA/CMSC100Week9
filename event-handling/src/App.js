import Counter from "./Counter";
import { SubjectList } from "./SubjectList";
import TempConverter from "./TempConverter";

const CMSCSubjects = [
  {code: "CMSC 12", desc: "Introduction to Programming"}
];

function App() {
  return (
    <div className="App">
      <p>Hello World!!!</p>
      <Counter value={0}/>  
      <SubjectList list={CMSCSubjects}/>
      <TempConverter/>
    </div>
  );
}

export default App;
