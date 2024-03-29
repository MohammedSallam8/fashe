import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "./style/carouselSection.scss"

export default function Slider(){
  return(
    <div className="carouselSection">
      <div className="container-fluid">
        <Carousel fade classname="Carousel">
          <Carousel.Item>
            <img
              className="d-block w-100 w500"
              src="m1.webp"
              alt="First slide"
            />
            <Carousel.Caption>
              <h2>BLUE JEANS</h2>
              <span>New Collection 2021</span>
              <a href="#">SHOP NOW</a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 w500"
              src="m2.webp"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h2>Women Collection 2021</h2>
              <span>NEW ARRIVALS</span>
              <a href="#">SHOP NOW</a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 w500"
              src="m3.webp"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h2>LEATHER BAGS</h2>
              <span>New Collection 2021</span>
              <a href="#">SHOP NOW</a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}
