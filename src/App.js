import axios from 'axios'
import React, { useEffect, useState } from 'react'
import GlobalStyle from './GlobalStyles'
import DashBoard from './components/DashBoard'

const App = () => {
    const [data, setData] = useState([])

    useEffect(() => {

        const fetchItems = async () => {
            const result = await axios.get(`https://api.first.org/data/v1/news`)

            // console.log(result.data.data)
            setData(result.data.data)
        }

        fetchItems()
    }, [])
    return (
        <div>
            <GlobalStyle />
            <DashBoard data={data} setData={setData}/>
        </div>
    )
}

export default App