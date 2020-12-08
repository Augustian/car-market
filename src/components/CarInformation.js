import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

class CarInformation extends React.Component {

    constructor() {
        super();
        this.state = {
            Car: {
                Comfort: [],
                DateRelease: '',
                EngineCapacity: '',
                FuelType: '',
                Image: [],
                Marka: '',
                Mileage: '',
                Model: '',
                Name: '',
                Price: '',
                Raiting: '',
                Security: [],
                TransmissionType: '',
                TypeDrive: '',
            }
        }
    }
    componentDidMount() {
        let params = (new URL(document.location)).searchParams;
        var form = new FormData();
        form.append('id', params.get('id'));
        fetch('http://carmarket.alwaysdata.net/DataCar.php', {
            method: 'POST',
            body: form,
        }).then(res => res.json())
            .then(respons => {
                console.log("respons car: ", respons);
                this.setState({
                    Car: respons
                });
            });
    }

    render() {
        let info = this.state.Car;

        return (
            <div className="conteiner" >
                <div className={"Car_Info"}>
                    <h5>{info.Name}</h5>
                    <Carousel className="carousel">
                        {info.Image.map((src, k) =>
                            <Carousel.Item key={k}>
                                <img className="d-block" src={src} />
                            </Carousel.Item>)}
                    </Carousel>

                    <div className={"content-list"}>
                        <ol style={{ listStyle: "none" }}>
                            <li><h6>Марка:<span>{info.Marka}</span></h6></li>
                            <li><h6>Модель:<span>{info.Model}</span></h6></li>
                            <li><h6>Привод:<span>{info.TypeDrive}</span></h6></li>
                            <li><h6>Трансмиссия:<span>{info.TransmissionType}</span></h6></li>
                            <li><h6>Пробег:<span>{info.Mileage}</span></h6></li>
                            {info.Raiting != '' && <li><h6>Состояние:<span>{info.Raiting}</span></h6></li>}
                        </ol>
                    </div>

                    <div className={"features_machine"}>
                        <ol>
                            <h4>Комфорт:</h4>
                            {this.state.Car.Comfort.map((comfort, key) =>
                                <li key={key}>{comfort}</li>
                            )}
                        </ol>
                        <ol>
                            <h4>Безопасность:</h4>
                            {this.state.Car.Security.map((security, key) =>
                                <li key={key}>{security}</li>
                            )}
                        </ol>
                    </div>
                </div>
            </div >
        );
    }
}
export default CarInformation;