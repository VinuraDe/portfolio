import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="fot">
        <h5>
          © {new Date().getFullYear()} Vinura de Silva. All Rights Reserved.
        </h5>
      </div>
    </footer>
  );
}

export default Footer