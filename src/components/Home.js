import React from 'react';
import '../style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import Slots from './Sub_components/Slots';

class Catalog extends React.Component {

  constructor() {
    super();

    this.state = {
      NewCar: []
    };

    this.GetDataHome = this.GetDataHome.bind(this);
  }

  componentDidMount() {
    this.GetDataHome();
  }

  GetDataHome() {
    fetch('http://carmarket.alwaysdata.net/GetDataHome.php')
    .then(res => res.json())
      .then(respons => {
        this.setState({
          NewCar: respons.car,
        });
      });
  }

  render() {
    return (
      <div style={{ position: "relative" }}>
        <img src={"http://phoenix-auto.md/wp-content/uploads/2019/08/banner-content.jpg"} style={{ width: "100%" }} />
        <div className="sdelki-info">
          <div>
            <ThumbUpAltOutlinedIcon />
            <p>120</p>
            <span>ДОВОЛЬНЫХ КЛИЕНТОВ</span>
          </div>
          <div>
            <DriveEtaIcon />
            <p>{this.props.countcar * 12}</p>
            <span>ВСЕГО МАШИН</span>
          </div>
          <div>
            <BusinessCenterIcon />
            <p>23</p>
            <span>ГОТОВЫХ СДЕЛОК</span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around", margin: "10px" }}>
          <img src="https://muizre.ru/_dr/93/71776197.jpg" width="40%" />
          <img src="https://advertunes.ru/_ld/1/83743705.jpg" width="40%" />
        </div>
          <span style={{display: "block", fontSize: "16px", fontWeight: "500", marginLeft: "50px"}}>Новинки: </span>
        <div className="list_car">
          {this.state.NewCar.map((slot, key) => <Slots info={slot} key={key} />)}
        </div>
        <div style={{ display: "flex", justifyContent: "space-around", margin: "10px" }}>
          <img src="https://i.ytimg.com/vi/Y9cfd5dKI0I/maxresdefault.jpg" width="40%" />
          <img src="https://i.ytimg.com/vi/D1fx2WvVg-Q/maxresdefault.jpg" width="40%" />
        </div>
      </div>
    );
  }
}

export default Catalog;
