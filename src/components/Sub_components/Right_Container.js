import React from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

class Right extends React.Component {

  constructor() {
    super();

    this.state = {
      MarkaList: [],
      ModelList: [],
      YearList: [],
      Marka: '',
      Model: '',
      Year: '',
      maxRange: 0,
      Ranges: [],
    };

    this.GetListSort = this.GetListSort.bind(this);
  }

  async GetListSort(marka, model, year) {
    var form = new FormData();
    form.append('marka', marka);
    form.append('model', model);
    form.append('year', year);
    await fetch('http://carmarket.alwaysdata.net/GetListSort.php', {
      method: 'POST',
      body: form,
    }).then(res => res.json())
      .then(respons => {
        console.log("respons list: ", respons);
        this.setState({
          MarkaList: respons.marka,
          ModelList: respons.model,
          YearList: respons.years,
          maxRange: respons.maxPrice,
          Ranges: [0, respons.maxPrice],
        });
      });
  }

  componentDidMount() {
    this.GetListSort("", "", "");
  }

  render() {
    return (
      <div className="right_conteiner">
        <h5>ПОИСК АВТОМОБИЛЯ</h5>
        <div style={{ padding: "15px" }}>
          <label>Марка</label>
          <select onChange={(e) => {
            this.setState({ Marka: e.target.value });
            this.setState({ Model: "" });
            this.GetListSort(e.target.value, "", "");
          }}
            value={this.state.Marka}>
            <option value="">Все</option>
            {this.state.MarkaList.map((item, k) => <option key={k} value={item}>{item}</option>)}
          </select>

          <label>Модель</label>
          <select onChange={(e) => {
            this.setState({ Model: e.target.value });
            this.GetListSort(this.state.Marka, e.target.value, "");
          }}
            value={this.state.Model}>
            <option value="">Все</option>
            {this.state.ModelList.map((item, k) => <option key={k} value={item}>{item}</option>)}
          </select>

          <label>Год Выпуска</label>
          <select onChange={(e) => {
            this.setState({ Year: e.target.value });
            this.GetListSort(this.state.Marka, e.target.value, e.target.value);
          }}
            value={this.state.Year}>
            <option value="">Все</option>
            {this.state.YearList.map((item, k) => <option key={k} value={item}>{item}</option>)}
          </select>

          <label>Цена</label>
          <p style={{ fontSize: "13px", textAlign: "center", padding: 0, margin: 0 }}>от {this.state.Ranges[0]}, до {this.state.Ranges[1]} руб.</p>
          <Range
            min={0}
            max={this.state.maxRange}
            onChange={(e) => this.setState({ Ranges: e })} />

          <button type="submit" onClick={() =>
            this.props.sendData(
              1,
              this.state.Marka,
              this.state.Model,
              this.state.Ranges,
              this.state.Year)
          }>Поиск</button>
        </div>
      </div>
    );
  }
}
export default Right;