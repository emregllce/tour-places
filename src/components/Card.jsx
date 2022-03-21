import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 mx-4">
        {props.cards.map((card) =>(
            <div className='col'>

                <div className='myCard bg-dark' >
                    <div className='container'>
                        <h2 style={{fontFamily: "Amatic SC", fontWeight : "600", color:"white", marginBottom:"2rem", paddingTop:"2rem"}}>{card.title}</h2>
                        <img className='image' src={card.image} alt="" />
                        <div className='overlay'>
                            <div className='text'>{card.desc}</div>
                        </div>
                    </div>
                </div>

            </div>
        ))}
    </div>
  );
}

export default Card