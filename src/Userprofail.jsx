import React from 'react'
const people = [
    {
        name:"Madhanprasath",
        email:"madhanprasath786@gmail.com",
        roll:"web Developer",
        img:"./img/img1.jpg"
    },
    {
        name:"Madhanprasath",
        email:"madhanprasath786@gmail.com",
        roll:"web Developer",
        img:"./img/img1.jpg"
    },
    {
        name:"Madhanprasath",
        email:"madhanprasath786@gmail.com",
        roll:"web Developer",
        img:"./img/img1.jpg"
    },
    {
        name:"Madhanprasath",
        email:"madhanprasath786@gmail.com",
        roll:"web Developer",
        img:"./img/img1.jpg"
    },
    {
        name:"Madhanprasath",
        email:"madhanprasath786@gmail.com",
        roll:"web Developer",
        img:"./img/img1.jpg"
    },
    {
        name:"Madhanprasath",
        email:"madhanprasath786@gmail.com",
        roll:"web Developer",
        img:"./img/img1.jpg"
    },
    {
        name:"Madhanprasath",
        email:"madhanprasath786@gmail.com",
        roll:"web Developer",
        img:"./img/img1.jpg"
    },
]
function Card (props){
    return <div className='continer'>
        <div className='inner_div'>
        </div>
        <img src={props.img} alt="user" className='img'/>
        <div className="content">
            <h1>{props.name}</h1>
            <h2>{props.email}</h2>
            <h2>{props.roll}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Officia minus corrupti aliquid voluptates labore magni ratione quidem culpa quis explicabo,
            tenetur assumenda ipsam.</p>
        </div>
    </div>
}
export const Userprofail = () => {
  return (
    <div className='holder'>
        {people.map((data,index)=>(
        <Card key={index} name={data.name} email={data.email} roll={data.roll} img={data.img}/>
    ))}
    </div>
  );
};
