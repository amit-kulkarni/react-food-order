import React from 'react';

export default function Footer() {
  return (
    <footer className="container">
      <div className="row justify-content-center py-2" style={{textAlign: "center"}}>
        <div className="col-12 col-md-3 my-1"> Copyright &copy; None </div>
        <div className="col-12 col-md-3 my-1"><a href="#">Terms and Conditions</a></div>
        <div className="col-12 col-md-3 my-1">Twitter</div>
        <div className="col-12 col-md-3 my-1">Facebook</div>
      </div>
    </footer>
  )
}