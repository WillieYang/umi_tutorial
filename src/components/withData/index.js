import React, { Component, useEffect, useState } from "react";
import axios from 'axios';

function Wrapper({ children }) {
    axios.get('http://httpbin.org/ip')
        .then(response => {
            console.log(`Value of Response: ${response.data}`)
            console.log(response.data)
            // setData({ response })
            return children(response.data)
        })
        .catch(error => { console.log(error); return null });
        return 'hhhhhh'
}


const withData = WrappedComponent => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: []
            };
        }
        componentDidMount() {

        }
        render() {
            return <WrappedComponent {...this.props} data={this.state.data} />;
        }
    };
};
export default Wrapper;