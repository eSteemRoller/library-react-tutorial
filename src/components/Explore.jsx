
import React from 'react'
import { Link } from 'react-router-dom'

export default function Explore() {
  return (
    <section id='explore'>
        <div className="container">
            <div className="row row__column">
                <h2>
                    Explore More <span className="purple">Books</span>
                </h2>
                <Link to="/books" className="href">
                    <button className='btn'>Explore All Books</button>
                </Link>
            </div>
        </div>
    </section>
  )
}
