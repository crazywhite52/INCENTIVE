import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import { TextInput } from "grommet";
import { withSnackbar } from "notistack";
import { MDBRow, MDBCol } from "mdbreact";
import {
  MDBIcon,
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput
} from "mdbreact";
import Product from "./product.tsx";
import Datetime1 from "./datetime1.tsx";
//API connect
import ApiService from "../actions/apidata";
export default class Claimdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 0,
      dateselect1: this.getDatenow()
    };
    this.ApiCall = new ApiService();
    this.Updatedata = this.Updatedata.bind(this);
    this.getDatenow = this.getDatenow.bind(this);
  }
  getDatenow() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;
    return today;
  }
  Updatedata(typedate, rows) {
    if (typedate === 1) {
      this.setState(
        {
          dateselect1: rows
        },
        () => {}
      );
    } else if (typedate === 2) {
      this.setState(
        {
          dateselect2: rows
        },
        () => {}
      );
    } else if (typedate === 3) {
      this.setState(
        {
          dateselect3: rows
        },
        () => {}
      );
    } else if (typedate === 4) {
      this.setState(
        {
          dateselect4: rows
        },
        () => {}
      );
    } else if (typedate === 5) {
      this.setState(
        {
          dateselect5: rows
        },
        () => {}
      );
    } else if (typedate === 6) {
      this.setState(
        {
          dateselect6: rows
        },
        () => {}
      );
    }
  }
  render() {
    const { completed } = this.state;
    return (
      <div style={{ fontFamily: "Prompt" }}>
        <Grid container spacing={24}>
          <Grid
            item
            lg={12}
            xl={12}
            xs={12}
            sm={12}
            md={12}
            style={{ padding: 0 }}
          />
          <Grid
            item
            lg={12}
            xl={12}
            xs={12}
            sm={12}
            md={12}
            style={{ padding: 3 }}
          >
            <h5 style={{ color: "green" }}>
              <br />
              <MDBIcon icon="cogs" className="cyan-text pr-3" />
              &nbsp;จำนวนเงินที่ส่งเคลม
            </h5>
          </Grid>
          <Grid
            item
            lg={12}
            xl={12}
            xs={12}
            sm={12}
            md={12}
            style={{ padding: 3 }}
          >
            <LinearProgress
              color="secondary"
              variant="determinate"
              value={completed}
            />
            <hr />
          </Grid>

          <Grid
            item
            lg={10}
            xl={10}
            xs={10}
            sm={10}
            md={10}
            style={{ padding: 3 }}
          >
            <MDBBtn
              color="success"
              onClick={() => {
                // this.setBoxnow();
                // this.toggle();
              }}
            >
              บันทึกข้อมูล <MDBIcon icon="save" className="ml-1" />
            </MDBBtn>
            <MDBBtn
              color="secondary"
              onClick={() => {
                // this.setBoxnow();
                // this.toggle();
              }}
            >
              วางบิล <MDBIcon icon="save" className="ml-1" />
            </MDBBtn>
            <MDBBtn
              color="info"
              onClick={() => {
                // this.setBoxnow();
                // this.toggle();
              }}
            >
              พิมพ์ใบวางบิล <MDBIcon icon="print" className="ml-1" />
            </MDBBtn>
          </Grid>

          <Grid
            item
            lg={2}
            xl={2}
            xs={2}
            sm={2}
            md={2}
            style={{ padding: 3 }}
          ></Grid>
          <Grid
            item
            lg={12}
            xl={12}
            xs={12}
            sm={12}
            md={12}
            style={{ padding: 3 }}
          >
            <MDBRow
              style={{
                color: "#2f2f4a",
                margin: 0,
                marginBottom: 0,
                marginTop: 20
              }}
            >
              <MDBCol
                md="2"
                className="text-right"
                style={{ padding: 0, paddingTop: 5 }}
              >
                <h5 style={{ color: "green", fontSize: 14 }}>
                  วันที่ส่งเอกสาร
                </h5>
              </MDBCol>
              <MDBCol md="2">
                <Datetime1 Updatedata={this.Updatedata} type={1} />
              </MDBCol>
            </MDBRow>
            <MDBRow
              style={{
                color: "#2f2f4a",
                margin: 0,
                marginBottom: 0,
                marginTop: 5
              }}
            >
              <MDBCol
                md="2"
                className="text-right"
                style={{ padding: 0, paddingTop: 10 }}
              >
                <h5 style={{ color: "green", fontSize: 14 }}>บริษัท</h5>
              </MDBCol>
              <MDBCol md="5">
                {" "}
                <input
                  type="text"
                  // id="defaultFormContactNameEx"
                  className="form-control"
                  value={this.state.txt1}
                  onChange={event =>
                    this.setState(
                      { txt1: event.target.value },
                      () => {
                        // this.chkPmtatus();
                      }
                    )
                  }
                />
              </MDBCol>
            </MDBRow>
            <MDBRow
              style={{
                color: "#2f2f4a",
                margin: 0,
                marginBottom: 0,
                marginTop: 5
              }}
            >
              <MDBCol
                md="2"
                className="text-right"
                style={{ padding: 0, paddingTop: 10 }}
              >
                <h5 style={{ color: "green", fontSize: 14 }}>ผู้ติดต่อ</h5>
              </MDBCol>
              <MDBCol md="5">
                {" "}
                <input
                  type="text"
                  // id="defaultFormContactNameEx"
                  className="form-control"
                  value={this.state.txt2}
                  onChange={event =>
                    this.setState(
                      { txt2: event.target.value },
                      () => {
                        // this.chkPmtatus();
                      }
                    )
                  }
                />
              </MDBCol>
            </MDBRow>
            <MDBRow
              style={{
                color: "#2f2f4a",
                margin: 0,
                marginBottom: 0,
                marginTop: 5
              }}
            >
              <MDBCol
                md="2"
                className="text-right"
                style={{ padding: 0, paddingTop: 10 }}
              >
                <h5 style={{ color: "green", fontSize: 14 }}>ยอดเงิน</h5>
              </MDBCol>
              <MDBCol md="2">
                {" "}
                <input
                  type="text"
                  // id="defaultFormContactNameEx"
                  className="form-control"
                  value={this.state.txt3}
                  onChange={event =>
                    this.setState(
                      { txt3: event.target.value },
                      () => {
                        // this.chkPmtatus();
                      }
                    )
                  }
                />
              </MDBCol>
              <MDBCol
                md="1"
                className="text-right"
                style={{ padding: 0, paddingTop: 10 }}
              >
                <h5 style={{ color: "green", fontSize: 14 }}>ยอด Make</h5>
              </MDBCol>
              <MDBCol md="2">
                {" "}
                <input
                  type="text"
                  // id="defaultFormContactNameEx"
                  className="form-control"
                  value={this.state.txt4}
                  onChange={event =>
                    this.setState(
                      { txt4: event.target.value },
                      () => {
                        // this.chkPmtatus();
                      }
                    )
                  }
                />
              </MDBCol>
            </MDBRow>
            <MDBRow
              style={{
                color: "#2f2f4a",
                margin: 0,
                marginBottom: 0,
                marginTop: 5
              }}
            >
              <MDBCol
                md="2"
                className="text-right"
                style={{ padding: 0, paddingTop: 10 }}
              >
                <h5 style={{ color: "green", fontSize: 14 }}>
                  อื่น(ไม่ใช่จำนวนเงิน)
                </h5>
              </MDBCol>
              <MDBCol md="2">
                {" "}
                <input
                  type="text"
                  // id="defaultFormContactNameEx"
                  className="form-control"
                  value={this.state.txt5}
                  onChange={event =>
                    this.setState(
                      { txt5: event.target.value },
                      () => {
                        // this.chkPmtatus();
                      }
                    )
                  }
                />
              </MDBCol>
              <MDBCol
                md="1"
                className="text-right"
                style={{ padding: 0, paddingTop: 10 }}
              >
                <h5 style={{ color: "green", fontSize: 14 }}>รวมทั้งสิ้น</h5>
              </MDBCol>
              <MDBCol md="2">
                {" "}
                <input
                  type="text"
                  // id="defaultFormContactNameEx"
                  className="form-control"
                  value={this.state.txt6}
                  onChange={event =>
                    this.setState(
                      { txt6: event.target.value },
                      () => {
                        // this.chkPmtatus();
                      }
                    )
                  }
                />
              </MDBCol>
            </MDBRow>
            <MDBRow
              style={{
                color: "#2f2f4a",
                margin: 0,
                marginBottom: 0,
                marginTop: 5
              }}
            >
              <MDBCol
                md="2"
                className="text-right"
                style={{ padding: 0, paddingTop: 10 }}
              >
                <h5 style={{ color: "green", fontSize: 14 }}>
                  จำนวนเงินที่คาดว่าจะได้รับ
                </h5>
              </MDBCol>
              <MDBCol md="2">
                {" "}
                <input
                  type="text"
                  // id="defaultFormContactNameEx"
                  className="form-control"
                  value={this.state.txt7}
                  onChange={event =>
                    this.setState(
                      { txt7: event.target.value },
                      () => {
                        // this.chkPmtatus();
                      }
                    )
                  }
                />
              </MDBCol>
            </MDBRow>
            <MDBRow
              style={{
                color: "#2f2f4a",
                margin: 0,
                marginBottom: 0,
                marginTop: 5
              }}
            >
              <MDBCol
                md="2"
                className="text-right"
                style={{ padding: 0, paddingTop: 10 }}
              >
                <h5 style={{ color: "green", fontSize: 14 }}>
                 เลขที่วางบิล
                </h5>
              </MDBCol>
              <MDBCol md="2">
                {" "}
                <input
                  type="text"
                  // id="defaultFormContactNameEx"
                  className="form-control"
                  value={this.state.txt8}
                  onChange={event =>
                    this.setState(
                      { txt8: event.target.value },
                      () => {
                        // this.chkPmtatus();
                      }
                    )
                  }
                />
              </MDBCol>
              <MDBCol
                md="1"
                className="text-right"
                style={{ padding: 0, paddingTop: 10 }}
              >
                <h5 style={{ color: "green", fontSize: 14 }}>เลขที่ Invoice</h5>
              </MDBCol>
              <MDBCol md="2">
                {" "}
                <input
                  type="text"
                  // id="defaultFormContactNameEx"
                  className="form-control"
                  value={this.state.txt9}
                  onChange={event =>
                    this.setState(
                      { txt9: event.target.value },
                      () => {
                        // this.chkPmtatus();
                      }
                    )
                  }
                />
              </MDBCol>
            </MDBRow>
            <MDBRow
              style={{
                color: "#2f2f4a",
                margin: 0,
                marginBottom: 0,
                marginTop: 20
              }}
            >
              <MDBCol
                md="2"
                className="text-right"
                style={{ padding: 0, paddingTop: 5 }}
              >
                <h5 style={{ color: "green", fontSize: 14 }}>
                  วันที่วางบิล
                </h5>
              </MDBCol>
              <MDBCol md="2">
                <Datetime1 Updatedata={this.Updatedata} type={2} />
              </MDBCol>
            </MDBRow>
            <MDBRow
              style={{
                color: "#2f2f4a",
                margin: 0,
                marginBottom: 0,
                marginTop: 5
              }}
            >
              <MDBCol
                md="2"
                className="text-right"
                style={{ padding: 0, paddingTop: 10 }}
              >
                <h5 style={{ color: "green", fontSize: 14 }}>บริษัทที่วางบิล</h5>
              </MDBCol>
              <MDBCol md="5">
                {" "}
                <input
                  type="text"
                  // id="defaultFormContactNameEx"
                  className="form-control"
                  value={this.state.txt10}
                  onChange={event =>
                    this.setState(
                      { txt10: event.target.value },
                      () => {
                        // this.chkPmtatus();
                      }
                    )
                  }
                />
              </MDBCol>
            </MDBRow>
            <MDBRow
              style={{
                color: "#2f2f4a",
                margin: 0,
                marginBottom: 0,
                marginTop: 5
              }}
            >
              <MDBCol
                md="2"
                className="text-right"
                style={{ padding: 0, paddingTop: 10 }}
              >
                <h5 style={{ color: "green", fontSize: 14 }}>Payout ID</h5>
              </MDBCol>
              <MDBCol md="5">
                {" "}
                <input
                  type="text"
                  // id="defaultFormContactNameEx"
                  className="form-control"
                  value={this.state.txt11}
                  onChange={event =>
                    this.setState(
                      { txt11: event.target.value },
                      () => {
                        // this.chkPmtatus();
                      }
                    )
                  }
                />
              </MDBCol>
            </MDBRow>
            <MDBRow
              style={{
                color: "#2f2f4a",
                margin: 0,
                marginBottom: 0,
                marginTop: 5
              }}
            >
              <MDBCol
                md="2"
                className="text-right"
                style={{ padding: 0, paddingTop: 10 }}
              >
                <h5 style={{ color: "green", fontSize: 14 }}>Program Name</h5>
              </MDBCol>
              <MDBCol md="5">
                {" "}
                <input
                  type="text"
                  // id="defaultFormContactNameEx"
                  className="form-control"
                  value={this.state.txt12}
                  onChange={event =>
                    this.setState(
                      { txt12: event.target.value },
                      () => {
                        // this.chkPmtatus();
                      }
                    )
                  }
                />
              </MDBCol>
            </MDBRow>
            <MDBRow
              style={{
                color: "#2f2f4a",
                margin: 0,
                marginBottom: 0,
                marginTop: 5
              }}
            >
              <MDBCol
                md="2"
                className="text-right"
                style={{ padding: 0, paddingTop: 10 }}
              >
                <h5 style={{ color: "green", fontSize: 14 }}>Phone ID</h5>
              </MDBCol>
              <MDBCol md="2">
                {" "}
                <input
                  type="text"
                  // id="defaultFormContactNameEx"
                  className="form-control"
                  value={this.state.txt13}
                  onChange={event =>
                    this.setState(
                      { txt13: event.target.value },
                      () => {
                        // this.chkPmtatus();
                      }
                    )
                  }
                />
              </MDBCol>
              <MDBCol
                md="1"
                className="text-right"
                style={{ padding: 0, paddingTop: 10 }}
              >
                <h5 style={{ color: "green", fontSize: 14 }}>Remark</h5>
              </MDBCol>
              <MDBCol md="2">
                {" "}
                <input
                  type="text"
                  // id="defaultFormContactNameEx"
                  className="form-control"
                  value={this.state.txt14}
                  onChange={event =>
                    this.setState(
                      { txt14: event.target.value },
                      () => {
                        // this.chkPmtatus();
                      }
                    )
                  }
                />
              </MDBCol>
            </MDBRow>
          </Grid>
        </Grid>
      </div>
    );
  }
}
