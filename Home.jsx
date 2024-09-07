import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import './App.scss';

const apikey="44e58b0935b4172e54603bb5a802a87c";
const url="https://api.themoviedb.org/3";
const imgurl="https://image.tmdb.org/t/p/original";
const Card=({img})=>(
    <img className='img' src={img} alt="" />
)
const Row=({title,arr=[]})=>(
    <div className="show">
    <h2>{title}</h2>
    <div className="cards">
    {
        arr.map((item,index)=>(
            <Card key={index} img={`${imgurl}/${item.poster_path}`}/>
        ))
    }
    </div>
    </div>
)
let Home=()=>{
    let[upcoming,setupcoming]=useState(["upcoming"])
    let[playing,setplaying]=useState(["now_playing"])
    let[popular,setpopular]=useState(["popular"])
    let[rated,setrated]=useState(["top_rated"])
    let[genre,setgenre]=useState([]);
    useEffect(()=>{
        const fetchdata = async()=>{
            let {data}=await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}`);
            setupcoming(data.results);
        };
        const fetch = async()=>{
            let {data}=await axios.get(`${url}/movie/${playing}?api_key=${apikey}`);
            setplaying(data.results);
        };
        const fetchd = async()=>{
            let {data}=await axios.get(`${url}/movie/${popular}?api_key=${apikey}`);
            setpopular(data.results);
        };
        const fetchda = async()=>{
            let {data}=await axios.get(`${url}/movie/${rated}?api_key=${apikey}`);
            setrated(data.results);
        };
        const getgenre = async()=>{
            let {data} = await axios.get(`${url}/genre/movie/list?api_key=${apikey}`);
            setgenre(data.genres);
        }
        fetch();
        fetchda();
        fetchd();
        fetchdata();
        getgenre();
    },[]);
    let val = "/qZPLK5ktRKa3CL4sKRZtj8UlPYc.jpg";
  return (
    <>
    <div className='section'>
        <div className="banner" style={{backgroundImage: `url(${`${imgurl}/${val}`})`
    }}>
        <div className="button">
            <div className="title">Under Paris</div>
            <div className="buttons">
        <button>Watch Now</button>
        <button>Subscription</button>
        </div>
        </div>
        </div>
        <Row title={"Upcoming"} arr={upcoming}/>
        <Row title={"Now Playing"} arr={playing}/>
        <Row title={"Popular"} arr={popular}/>
        <Row title={"Top Rated"} arr={rated}/>
        <div className="genres">
        {
            genre.map((item)=>(
            <Link to={`/genre/${item.id}`}>{item.name}</Link>
            ))
        }
        </div>
    </div>
    </>
  )
}

export default Home