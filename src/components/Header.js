import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import {Menu} from '@material-ui/icons';

class Header extends React.Component {

    render() {
        return (
            <div>
                <div className="logo">
                    <img src="https://st2.depositphotos.com/2268879/7526/v/600/depositphotos_75266819-stock-illustration-car-silhouette-modern.jpg" />
                    <h4>Avto_Germes_PRO</h4>
                </div>
                <div className="Header">
                    <div className={"desktop"}>
                        <Link to="/">Главная</Link>
                        <Link to="/catalog">Каталог Автомобилей</Link>
                    </div>

                    <Accordion className={"mobile"}>
                        <div>
                            <Accordion.Toggle variant="link" eventKey="0">
                                <Menu fontSize={"large"}/>
                            </Accordion.Toggle>
                        </div>
                        <Accordion.Collapse eventKey="0">
                            <div className={"mobile-menu"}>
                                <Link to="/">Главная</Link>
                                <Link to="/catalog">Каталог Автомобилей</Link>
                            </div>
                        </Accordion.Collapse>
                    </Accordion>
                </div>
            </div >
        );
    }
}
export default Header;