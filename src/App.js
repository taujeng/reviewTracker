import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Comments from './components/Comments/Comments'
import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react'

function App() {

  const reviewData = require('./reviews.json')
  const [companyData, setCompanyData] = useState(reviewData)

  const newResponse = (response, ID) => {
    // console.log(response);
    // console.log(ID)

    // setCompanyData(companyData => {
    //   return companyData.forEach((item) => {
    //   if (item.id === ID) {
    //     item.response = response
    //   }
    // })});

    // companyData.forEach((item)=> {
    //   if (item.id === ID) {
    //     console.log('okies')
    
    //   }
    // })
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

