import AptState from "./components/AptState";
import Header from "./components/Header";
import Main from "./components/Main";
import Statepractice from "./components/Statepractice";
import Ternary from "./components/Ternary";
import ComplexStateArrays from "./components/ComplexStateArrays";
import ComplexStateObjects from "./components/ComplexStateObjects";
import Form from "./components/Form";
import ConditonsRendering from "./components/ConditonsRendering";
import PadsCard from "./components/PadsCard";


const App = () => {
  return (
    <div className="bg-[#FAFAF8] min-h-screen ">
      <Header />
      <Main />
       {/* <AptState /> */}
      {/* <Statepractice /> */}
     
      {/* <Ternary />
      <ComplexStateArrays />  */}
      {/* <ComplexStateObjects /> */}
      {/* < Form />
      < ConditonsRendering /> */}
      < PadsCard/>
    </div>
  );
};

export default App;
