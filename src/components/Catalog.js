import React from 'react';
import '../style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slots from './Sub_components/Slots.js';
import Right_Component from './Sub_components/Right_Container.js';
import PaginationList from './Sub_components/PaginationList.js';

class Catalog extends React.Component {
    render() {
        return (
            <div className="conteiner">
                <Right_Component
                    sendData={this.props.sendData}
                    MarkaList={this.props.MList}
                    ModelList={this.props.MoList}
                    Marka={this.props.Mark}
                    Model={this.props.Mod}
                    Ranges={this.props.rag}
                    maxRange={this.props.maxr}
                    GetListSort={this.props.listsort} />
                <div className="central_conteiner" xs={9}>
                    <div className="list_car">
                        {this.props.CarList.map((slot, key) => <Slots info={slot} key={key} />)}
                    </div>
                </div>

                <div style={{ marginBottom: "25px" }}>
                    <PaginationList CarList={this.props.CarList} count={this.props.count} sendData={this.props.sendData} />
                </div>
            </div>
        );
    }
}

export default Catalog;
