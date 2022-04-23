import Header from './components/Header';
import Body from './components/Body';
import Comments from './components/Comments'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Body />}/>
        <Route path="/comments" element={<Comments />}/>
      </Routes>
    </div>
  );
}

export default App;

