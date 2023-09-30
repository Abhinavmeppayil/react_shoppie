import React from 'react'
import '../Style/Footer.css'

function Footer() {
  return (
    <footer>
        <div>
            <h1>Tech</h1>
            <p>@all rights reserved</p>
        </div>

        <div>
            <h5>Follow Us</h5>
            <div>
                <a href='https://youtu.be/M5905oDA34c' target={"blank"}>Youtube</a>
                <a href='https://www.linkedin.com/feed/' target={"blank"}>LinkedIn</a>
            </div>
        </div>
        <div>
          {/* <a href='https://wa.me/7569428359'>Whatsapp</a> */}

        </div>

    </footer>
  )
}

export default Footer