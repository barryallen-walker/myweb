import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import homeImage from './image/image1.jpg';


const image1 = {
  height: '442px',
  width : '100%',
  maxWidth: '100%',
  objectFit: 'cover',
}

export default function Home() {
  return (
    <div>
      <containerFluid>
        <Row className="nav-row">
            <Col xs={12} md={5} className='img-section ps-5 pt-5 pb-5 pe-5'>
                {/* <img className='' src={homeImage} alt="home-image" style={image1} /> */}
                <div className='shadow p-0 mb-1 bg-body '>
                  <img className='home-img' src='image/image1.jpg' alt="home-img" style={image1} />
                </div>
            </Col>
            <Col xs={12} md={7} className='home-details'>
              <div>
              <h1 className='home-name text-start mb-4'>Alan walker</h1>
              <span className='home-line text-start mb-3'></span>
              <h3 className='home-intro mb-4'>
                <span>Hi, I am </span>
                <span>Web Designer</span>
              </h3>
              <button className='home-button'>Get In Touch</button>
              </div>
            </Col>
        </Row>
      </containerFluid>
    </div>
  )
}
