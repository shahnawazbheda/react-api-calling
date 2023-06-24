import axios from 'axios'
import './App.css';
import { useState, useEffect } from 'react'



function App() {
  const [data, setData] = useState([])
  const [URL, setURL] = useState("https://645520dbf803f345763b3578.mockapi.io/Crud-appointment");
  function getData() {
    axios.get(URL)
      .then((res) => {
        //console.log(res.data);
        setData(res.data)

      }).catch((err) => {
        setData(err);
      });
  }

  // const setToLocalStorage = (id, name, email, phone, date, message) => {
  //   localStorage.setItem("id", id);
  //   localStorage.setItem("name", name);
  //   localStorage.setItem("email", email);
  //   localStorage.setItem("phone", phone);
  //   localStorage.setItem("date", date);
  //   localStorage.setItem("message", message);

  // }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <div className='container'>
        <div className='form-group'>
        <input type='text' className='form-control mt-5' value={URL} onChange={(event) => {
          setURL(event.target.value);
        
        }} placeholder='Enter API URL' />
        <button className='btn btn-primary mt-3 mx-5 p-2' onClick={() => {
            getData();
        }} style={{ width: '300px' }}>Show</button>
        </div>
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
     
    </>
  );
}

export default App;
