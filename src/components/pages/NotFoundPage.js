import React, { Component } from "react";
import ApiService from "../actions/apidata";
export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 0,
      data1: [],
      data2: [],
      data3: []
    };
    this.ApiCall = new ApiService();
  }
  componentDidMount() {
    this.ApiCall.getPrintregister("LGT201906000001")
      .then(res => {
        if (res.status === true) {
          this.setState({
            data1: res.data,
            data2: res.rowdata,
            data3: res.headdata
          });
        } else {
          console.log(res.message);
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }
  render() {
    let test = Array();
    test = this.state.data1;
    function checkvalue(data2, data3) {
      for (var i = 0; i < test.length; i++) {
        if (test[i].branchname == data2 && test[i].loadname == data3) {
          return test[i].countbox;
        }
      }
    }
    const list = this.state.data2.map(data2 => (
      <tr style={{ border: "2px solid black" }}>
        <th>{data2.branchname}</th>
        {this.state.data3.map(function(data3) {
          return (
            <th style={{ border: "1px solid black" }}>
              {checkvalue(data2.branchname, data3.loadname)}
            </th>
          );
        })}
      </tr>
    ));
    const listtitle = this.state.data3.map(data3 => (
      <th style={{ border: "1px solid black" }}>{data3.loadname}</th>
    ));
    return (
      <div className="full">
        <table style={{ border: "1px solid black" }}>
          <tr style={{ border: "1px solid black" }}>
            <th>สาขา</th>
            {listtitle}
          </tr>
          {list}
        </table>
      </div>
    );
  }
}
