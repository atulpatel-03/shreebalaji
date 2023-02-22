import React from 'react'
import b1 from "../asserts/images/a1.png"
import b2 from "../asserts/images/a2.png"
import b3 from "../asserts/images/a3.png"
import "../asserts/scss/Carousell.scss"

const Carousell = () => {
  return (
    <div className='container carousel-img'>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" interval= "1000">
        <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img className='d-block w-100 abt-img' src={b1} alt="First slide" />
      
    </div>
    <div class="carousel-item">
    <img className='d-block w-100 abt-img' src={b2} alt="Second slide" />
    </div>
    <div class="carousel-item">
    <img className='d-block w-100 abt-img' src={b3} alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>
  )
}

export default Carousell;