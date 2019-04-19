import React, { Component, useEffect, useState } from "react";
import axios from 'axios';

// function Wrapper({ children }) {
//     axios.get('http://httpbin.org/ip')
//         .then(response => {
//             console.log(`Value of Response: ${response.data}`)
//             console.log(response.data)
//             // setData({ response })
//             return children(response.data)
//         })
//         .catch(error => { console.log(error); return null });
//     return 'hhhhhh'
// }

const withData = WrappedComponent => {
    class WithData extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: null
            };
        }
        async componentDidMount() {
            // axios.get(this.props.api)
            //     .then(res => {
            //         console.log('data')
            //         console.log(res.data)
            //         this.setState({data: res.data})
            //     })
            //     .catch(e => console.log(e))

            const res = await axios.get(this.props.api);
            // console.log(res.data)
            // console.log(`Res:${res}`)
            // console.log('life')
            // res.then(() => {
            //     console.log('set data')
            //     this.setState({ data: res.data })
            // })
            this.setState({data: res.data.origin})

            // fetch(this.props.api).then(r => r.json()).then(d => {
            //     this.setState({ data: d.origin })
            // })

        }
        render() {
            console.log('withdata render')
            return <WrappedComponent {...this.props} data={this.state.data} />;
        }
    };
    return WithData
};
export default withData;