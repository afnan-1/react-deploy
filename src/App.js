import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [results, setResults] = useState([])
  useEffect(() => {
    fetchUsers()
  }, [])
  const fetchUsers = async () => {
    const response = await axios.get('https://api.flockshop.co/api/test/')
    if (response.status === 200) {
      // console.log(response.data)
      setResults([...response.data])
    }
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>API TESTING</h2>
        {results.map(v => (
          <h3>{v.username}</h3>
        ))}
      </header>
    </div>
  )
}

export default App
