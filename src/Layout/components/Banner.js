import React from 'react'
import "./style/Banner.scss"

export default function Banner() {
  return(
    <div className="banner">
      <div className="container">
        <div className="row">

          <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="imgc">
              <img src="ba1.webp"></img>
              <a href="#">DRESSES</a>
            </div>

            <div className="imgc">
              <img src="ba4.webp"></img>
              <a href="#">SUNGLASSES</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-8 col-sm-10">
          <div className="imgc">
              <img src="ba2.webp"></img>
              <a href="#">WATCHES</a>
            </div>

            <div className="imgc">
              <img src="ba5.webp"></img>
              <a href="#">FOTERWEAR</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-8 col-sm-10">
          <div className="imgc">
              <img src="ba3.webp"></img>
              <a href="#">BAGS</a>
            </div>

            <div className="imgc">
              <img src="ba7.webp"></img>
              <div className="imgt">
                <h4>
                  Sign up & get <br/>20% off
                </h4>
                <p>
                  Be the frist to know about the latest fashion news and get exclu-sive offers
                </p>
                <a className="btn" href="#">SIGN UP</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}