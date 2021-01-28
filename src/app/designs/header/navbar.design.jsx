import React, { PureComponent } from 'react';
import {Nav, Button, Form, FormControl, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavbarDesign extends PureComponent {
    render() {
        return (            
            <header>
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand className="mr-auto">
                    <Link className='linkHeader' to='/'>
                    <i className="fas fa-store-alt"></i> Tindahan Sa Cebu
                    </Link>
                </Navbar.Brand>
                <Form inline>
                <Button variant="secondary" size='sm' className="mr-sm-2" >Register</Button>
                <Button variant="secondary" size='sm'>Login</Button>
                </Form>
            </Navbar>     
            </header>                
        )
    }
}

export default NavbarDesign
