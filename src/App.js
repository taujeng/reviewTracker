import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Comments from './components/Comments/Comments'
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react'

function App() {

  // Take JSON data and transform it into JS object. Store in state
  const reviewData = require('./reviews.json')
  const [companyData, setCompanyData] = useState(reviewData)

  // Update companyData with formatted dates
  const months = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
  };

  // useEffect(() => {
  //   const oldDate = details['published_at'].slice(4, 15).replaceAll(' ', '/');
  //   for (const [key, value] of Object.entries(months)) {
  //     if (oldDate.includes(key)) {
  //       const newDate = oldDate.replace(key, value);
  //       setUpdateDate(newDate);
  //     }
  //   }
  // }, []);


  companyData.map((item) => {
    const oldDate = item['published_at'].slice(4, 15).replaceAll(' ', '/');
    for (const [key, value] of Object.entries(months)) {
      if (oldDate.includes(key)) {
        const newDate = oldDate.replace(key, value);
        item['new_date'] = newDate
      }
    }
  })











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

