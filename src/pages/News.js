import React, {useState} from 'react'
import Search from '../components/Search'
import axios from "axios";

function News() {

  const [search, setSearch] = useState("")
  const [result, setResult] = useState([])

  const handle = (e) =>{
    e.preventDefault()
    axios.get('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',{
      params:{
        q: search, 
        pageNumber: '1', 
        pageSize: '10', 
        autoCorrect: 'true', 
        fromPublishedDate: 'null', 
        toPublishedDate: 'null'
      },
      headers: {'X-RapidAPI-Key': 'f44702b336msh820676f18984605p1220e5jsnee98a9d8e4ac'},
    })
    .then(function (response) {
      setResult(response.data.value);
      console.log(response.data.value);
      console.log(result);
    }).catch(function (error) {
      console.error(error);
    });

    
  }

  return (
    <div>
      <Search value={search} setValue={setSearch} />
      <button onClick={handle} >Search</button>
      <div className="web-container">
        <ul>
          {result.map((data)=>{
            return (
              <li>
                <a href={data.url}>{data.title}</a>
                <p>{data.description}</p>
              </li>
              
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default News