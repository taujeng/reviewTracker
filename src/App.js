import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Comments from './components/Comments/Comments'
import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react'

function App() {

  // Take JSON data and transform it into JS object. Store in state
  const reviewData = require('./reviews.json')
  const [companyData, setCompanyData] = useState(reviewData)

  // After saving a comment, add the comment to the appropriate entry in the stored data
  const newResponse = (response, ID) => {
    const newList = []
    for (let item of companyData) {
      if (item.id === ID) {
        item.response = response
        newList.push(item);
      } else {
        newList.push(item);
      }
    }
    setCompanyData(newList);
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Body data={companyData}/>}/>
        <Route path="/comments" element={<Comments response={newResponse}/>}/>
      </Routes>
    </div>
  );
}

export default App;

