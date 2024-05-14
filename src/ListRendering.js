import React, { Component } from "react";

class ListRendering extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [
                { id: 1, name: 'Web Development', price: '5,000/-' },
                { id: 2, name: 'App Development', price: '10,000/-' },
                { id: 3, name: 'Account Web Development', price: '15,000/-' }
            ]
        }

    }


    render() {
        const { services } = this.state;
        return (

            //     // <ul>
            //     //     <li> Service {this.state.services[0].name} Is For Rs. {this.state.services[0].price} </li>
            //     //     <li> Service {this.state.services[1].name} Is For Rs. {this.state.services[1].price} </li>
            //     //     <li> Service {this.state.services[2].name} Is For Rs. {this.state.services[2].price} </li>

            //     // </ul>

            <ul>
                {services.map((item => {
                    return (
                        <li key={item.id} > Service {item.name} is For Just Rs. {item.price} </li>
                    )
                }))}
            </ul>

        )
    }
}
export default ListRendering