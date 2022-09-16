import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const image1 = {
  height: '442px',
  width: '100%',
  maxWidth: '100%',
  objectFit: 'cover',
}

export default function Gallery() {
  return (
    <div>
      <containerFluid>
        <Row className="nav-row">
          <Col xs={12} md={4} className='img-section ps-5 pt-5 pb-5 pe-5'>
            {/* <img className='' src={homeImage} alt="home-image" style={image1} /> */}
            <div className='shadow p-0 mb-1 bg-body '>
              <img className='home-img' src='image/image1.jpg' alt="home-img" style={image1} />
            </div>
          </Col>
          <Col xs={12} md={8}>
            <div className='d-flex gallery-wraper mb-3'>
              <h5>CREATIVE GALLERY</h5>
              <span className='gallery-line text-start'></span>
            </div>
            <Row className='image-row'>
              <Col className='image-col'>
                <img src="image/2.jpg" alt="" />
                <img src="image/bg1.jpg" alt="" />
                <img src="image/bg-image.png" alt="" />
                <img src="image/1.jpg" alt="" />
              </Col>
              <Col className='image-col'>
                <img src="image/1.jpg" alt="" />
                {/* <img src="image/bg1.jpg" alt="" /> */}
                <img src="image/2.jpg" alt="" />
                <img src="image/image1.jpg" alt="" />
              </Col>
              <Col className='image-col'>
                <img src="image/bg-image.png" alt="" />
                <img src="image/bg-image.png" alt="" />
                <img src="image/image1.jpg" alt="" />
                <img src="image/bg-image.png" alt="" />
                <img src="image/bg-image.png" alt="" />
              </Col>
              {/* <Col className='image-col'>
                <img src="image/bg-image.png" alt="" />
                <img src="image/bg-image.png" alt="" />
                <img src="image/image1.jpg" alt="" />
                <img src="image/bg-image.png" alt="" />
                <img src="image/bg-image.png" alt="" />
              </Col> */}
            </Row>
          </Col>
        </Row>
      </containerFluid>

    </div>
  )
}
