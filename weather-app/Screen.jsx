import React, { useEffect, useState } from 'react';
import './weather.css'

const Screen = () => {

    const[city,setCity] =useState('Delhi');

    let myApi = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=143454aa39bbe3442a890cdbf3f9db36`

    const[apiLink,setApi] = useState(myApi);
    const[apiData,setApiData]= useState({
        main:{
            temp:0
        }
    });

    useEffect(() => {
     const getApi = async()=>{
          const response = await fetch(apiLink);
          const result = (await response.json());
             setApiData(()=>({
                ...result
             }))
        }
        getApi();
    },[apiLink])

    const handleCityInput=(e)=>{
        setCity(e.target.value);

    }

    const handleSearch=()=>{
        setApi(myApi);
    }

   
  return (
    <div>
        <div className='container'>
        <h2>Weather Application</h2>
        <br></br>
        <input type='text' placeholder='Enter City Name' onChange={handleCityInput}></input>
        <br></br>
        <button onClick={handleSearch} className='btn'>Search</button>
        <div>
            <h2 style={{display: 'inline'}}>Tempature  : </h2>
            <p style={{display : 'inline', fontSize :'2rem'}}>{apiData.main.temp} (F) </p>
        </div>
        </div>
    </div>
  )
}

export default Screen