import React, {Fragment} from 'react';
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function NavAdmin() {
  return (
    <Fragment>
      <Nav.Link><Link to='/admin/dashboard'>Admin</Link></Nav.Link>
      {/* todos los Link que yo necesite */}
    </Fragment>
  )
}
