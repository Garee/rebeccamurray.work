import Img from "gatsby-image"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import Swiper from "swiper/bundle"

import "swiper/swiper-bundle.css"
import "./Carousel.css"

export const Carousel = ({ images }) => {
  useEffect(() => {
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    })
  }, [])

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {images.map(image => {
          return (
            <div key={`slide_${image.id}`} className="swiper-slide">
              <Img
                fluid={image.localFile.childImageSharp.fluid}
                alt={image.title}
              />
            </div>
          )
        })}
      </div>
      <div class="swiper-pagination"></div>
    </div>
  )
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Carousel
