import React , {useState} from 'react'
import Search from '../components/Search'
import axios from "axios";

function Images() {

  const [search, setSearch] = useState("")
  const [result, setResult] = useState([])

  const handle = (e) =>{
    e.preventDefault()
    axios.get('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',{
      params:{
        q: search, pageNumber: '1', pageSize: '60', autoCorrect: 'true', language: 'tr'
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
      <div className="image-container">
        <ul>
          {result.map((data)=>{
            return (
              <li>
                <img width={500} height={300} src={data.url} alt="" />
              </li>
              
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Images