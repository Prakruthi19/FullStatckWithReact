import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import Spinner from './components/Spinner'
import { apiurl , filterData} from './data'

function App() {
  const [loading, setloading] = useState(true);
  const [courses, setCourses] = useState({});
  const [category, setCategory] = useState(filterData[0].title);
  async function fetchdata() {
    setloading(true);
    try{
      let response = await fetch(apiurl);
      let output = await response.json();
      setCourses(output.data);
    }
    catch(error) {
      console.log("ERROR");

    }
    setloading(false);
  }
  useEffect(() =>{
    fetchdata(); }, []);
  return (
    <>
    <div><NavBar/>
    <Filter
    filterData = {filterData}
    category = {category}
    setCategory = {setCategory}
    />
    <div>
    { loading? <Spinner/> :<Cards courses = {courses} category = {category}></Cards>}
    </div>
    
    </div>
    </>
  )
};

export default App
