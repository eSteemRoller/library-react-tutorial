
import React from 'react'

export default function Explore() {
  return (
    <section id='explore'>
        <div className="container">
            <div className="row row__column">
                <h2>
                    Explore More <span className="purple">Books</span>
                </h2>
                <a href="/books" className="href">
                    <button className='btn'>Explore All Books</button>
                </a>
            </div>
        </div>
    </section>
  )
}
