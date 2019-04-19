import React from 'react';

class DataTable extends React.Component {
    componentDidUpdate() {
        console.log(this.props)
        console.log(`Props in DataTable: ${this.props}`)
    }
    // isEmpty(obj) {
    //     let index = 0
    //     for(let o in obj) {
    //         index += 1
    //     }
    //     return !index
    // }
    render() {
        console.log('datatable', this.props)
        return (
            <div className="datatable">
                {/* <h1>{this.isEmpty(this.props.data) ? '' : `${this.props.data}-wwwwwwww`}</h1> */}
                <h1>{this.props.data || 'loading'}</h1>
                <h2>{this.props.api}</h2>
                {/* <h3>{this.props.data}</h3> */}
                {/* <table>
                {this.props.data.map(row => {
                  return (
                    <tr>
                      <td>{row.name}</td>
                    </tr>
                  );
                })}
              </table> */}
            </div>
        );
    }
}

export default DataTable