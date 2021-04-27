import React,{ useEffect, useState } from 'react'

const Films = () => {
    const [data,setData] = useState([])
    const getData = () => {
        fetch('http://api.tvmaze.com/search/shows?q=girls')
            .then((apiData) =>{
                return apiData.json()
            })
            .then((items) =>{
                setData(items)
            })
    }
    useEffect(() => {
        getData()
    },[])
    const spawnFilms = () => {
        if(data.length){
            return data.map(({ show }) => show.image !== null ? <img key={show.id} src={show.image.medium}/> : <img key={show.id} src={"/"}/>)
        }
    }
    return (
        <>{spawnFilms()}</>
    )
}

export default Films