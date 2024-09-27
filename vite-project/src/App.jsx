import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Filter from './components/Filter'
import { apiurl , filteredData} from './data'

function App() {
  const [courses, setCourses] = useState(null);
  const [category, setCategory] = useState(filteredData[0].title);
  async function fetchdata() {
    try{
      let response = await fetch(apiurl);
      let output = await response.json();
      console.log(output);
      setCourses(output);
    }
    catch(error) {
      console.log("ERROR");

    }
  }
  useEffect(() =>{
    fetchdata()}, []);
  return (
    <>
    <div><NavBar/>
    <Filter
    filteredData = {filteredData}
    category = {category}
    setCategory = {setCategory}
    // {/* <Cards courses = {courses} category = {category}></Cards> */}
    />
    </div>
    </>
  )
};

export default App
