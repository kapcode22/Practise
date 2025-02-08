import React from 'react'

const Home = () => {
    const details = [
        {
            id: 1,
            title: "Excellent Doctors",
           
        },

        {
        id:2,
        title:"Five star Facility",
        
        },
        {
        id: 3,
        title: "24 hours Available",
        
        },
    ];
return (
    <div className='mainpage'>
        <div className='container'>
            <div className='title'>
                <h1>welcome to LIFE SAVER</h1>
                <p>
                    Empowering clinical research with seamless participant management and real-time trial tracking.<b />
                    Simplify enrollments, monitor progress, and drive medical breakthroughs with ease!"
                </p>
            </div>
            <div className='image'>

            </div>
        </div>
        <div className='details'>
            {details.map((element) => {
                return (
                    <div className='card' key={element.id}>
                        <div className="icon">{element.icon}</div>
                        <div className="content">
                            <p>{element.title}</p>
                            <p>{element.subTitle}</p>
                        </div>
                    </div>
                )

            })}
        </div>
    </div>
)
}

export default Home
