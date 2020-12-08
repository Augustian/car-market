import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Catalog from './components/Catalog';
import Home from './components/Home';
import CarInformation from './components/CarInformation';
import Header from './components/Header';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      CarList: [],
      Count: 0,
      rangePrice: 0,
    };

    this.GetDataPage = this.GetDataPage.bind(this);
  }

  componentDidMount() {
    this.GetDataPage(1, null, null, null, "");
  }

  GetDataPage(page, marka, model, price, year) {
    var form = new FormData();
    form.append('page', page);
    form.append('marka', marka);
    form.append('model', model);
    form.append('price', price);
    form.append('year', year);
    console.log(page, marka, model, price, year)
    fetch('http://carmarket.alwaysdata.net/GetDataCar.php', {
      method: 'POST',
      body: form,
    }).then(res => res.json())
      .then(respons => {
        console.log("respons: ", respons);
        this.setState({
          CarList: respons.car,
          Count: respons.count,
          rangePrice: price,
        });
      });
  }


  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/catalog">
            <Catalog CarList={this.state.CarList} count={this.state.Count} sendData={this.GetDataPage} rangePrice={this.state.rangePrice} />
          </Route>
          <Route exact path="/">
            <Home countcar={this.state.Count}/>
          </Route>
          <Route path={"/car"}>
            <CarInformation />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
