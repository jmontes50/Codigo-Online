import React, {Fragment} from 'react';
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function NavAdmin({logout}) {
  return (
    <Fragment>
      <Nav.Link><Link to='/admin/dashboard'>Admin</Link></Nav.Link>
      <Nav.Link><span onClick={()=>{logout()}}>Salir</span></Nav.Link>
      {/* todos los Link que yo necesite */}
    </Fragment>
  )
}
