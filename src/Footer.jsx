import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBuilding } from "@fortawesome/free-regular-svg-icons"
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit'

export default function Footer() {
  return (
    <div className='footer pe-5 ps-5 pt-3 pb-3 d-flex justify-content-md-between '>
      <div>
        <h6>Copyright © 2022</h6>
      </div>
      <div>
        <ul className='socials'>
          <li>
            <a href="facebook.com"><MDBIcon fab fixed icon='instagram' href='facebook.com' className='socials-icon' /></a>
          </li>
          <li>
            <a href="facebook.com"><MDBIcon fab icon="facebook-f" className='socials-icon' /></a>
          </li>
          <li>
            <a href='#!'><MDBIcon fab fixed icon="youtube" className='socials-icon' /></a>
          </li>
          <li><a href="#!"><MDBIcon fab fixed icon="linkedin-in" className='socials-icon' /></a></li>
          <li><a href="#!"><MDBIcon fab icon="google-plus-g" className='socials-icon' /></a></li>
          <li><a href="#!"><MDBIcon fab icon="twitter" className='socials-icon' /></a></li>
          {/* <li><FontAwesomeIcon icon={ faBuilding } /></li> */}
        </ul>
      </div>
    </div>
  )
}
