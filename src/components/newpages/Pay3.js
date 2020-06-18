import React, { Component } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
  MDBIcon,
  MDBInput,
  MDBBtnGroup,
  MDBDropdown,
  MDBBtn,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader
} from "mdbreact";
import Select from "react-select";
import AntSwitch from "@material-ui/core/Switch";
import ApiService from "../actions/apidataCreate";
import Datetime1 from "./datetime1.tsx";
import Pay3Table from "./table_pay/pay3.tsx";

export default class Pay3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pay1_money: "",
      pay1_remark: "",
      pay1_date: "",
      pay1_contact: "",
      supplier_select: "",
      supplier: []
    };
    this.ApiCall = new ApiService();
    this.searchSup = this.searchSup.bind(this);
    this.onChangeDDlsup = this.onChangeDDlsup.bind(this);
  }
  searchSup() {
    this.ApiCall.getSup()
      .then(res => {
        if (res.success == true) {
          this.setState({ supplier: res.data });
        } else {
          console.log(res.message);
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }
  componentDidMount() {
    this.searchSup();
  }
  onChangeDDlsup(value) {
    this.setState({ supplier_select: value }, () => {
      // this.searchBrand()
    });
  }
  render() {
    return (
      <div>
        <MDBCard>
          <MDBCardHeader>
            <MDBRow>
              <MDBCol md="6">
                <h5 style={{ paddingTop: 15, color: "black" }}>
                  <MDBIcon icon="business-time" className="pr-3" />
                  <k style={{ color: "blue" }}>&nbsp;จ่ายเช็ค</k>
                </h5>
              </MDBCol>
              <MDBCol md="6" className="text-right">
                <MDBBtn
                  target="_blank"
                  color="success"
                  onClick={this.editfield}
                >
                  <MDBIcon icon="save" /> บันทึกจำนวนเงิน
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
              <MDBCol
                md="5"
                
                style={{ padding: 0, paddingTop: 10 }}
              >
                <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                  <MDBCol
                    md="4"
                    className="text-right"
                    style={{ padding: 0, paddingTop: 10 }}
                  >
                    <h5 style={{ color: "green", fontSize: 14 }}>เลขที่เช็ค</h5>
                  </MDBCol>
                  <MDBCol md="7">
                    <input
                      type="text"
                      // id="defaultFormContactNameEx"
                      className="form-control"
                      value={this.state.pay1_money}
                      onChange={event =>
                        this.setState(
                          { pay1_money: event.target.value },
                          () => {
                            // this.chkPmtatus();
                          }
                        )
                      }
                    />
                  </MDBCol>
                
                </MDBRow>
                <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                  <MDBCol
                    md="4"
                    className="text-right"
                    style={{ padding: 0, paddingTop: 10 }}
                  >
                    <h5 style={{ color: "green", fontSize: 14 }}>จำนวนเงินก่อน VAT</h5>
                  </MDBCol>
                  <MDBCol md="7">
                    <input
                      type="text"
                      // id="defaultFormContactNameEx"
                      className="form-control"
                      value={this.state.pay1_money}
                      onChange={event =>
                        this.setState(
                          { pay1_money: event.target.value },
                          () => {
                            // this.chkPmtatus();
                          }
                        )
                      }
                    />
                  </MDBCol>
                
                </MDBRow>
                <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                  <MDBCol
                    md="4"
                    className="text-right"
                    style={{ padding: 0, paddingTop: 10 }}
                  >
                    <h5 style={{ color: "green", fontSize: 14 }}>หัก ณ ที่จ่ายเลขที่</h5>
                  </MDBCol>
                  <MDBCol md="7">
                    <input
                      type="text"
                      // id="defaultFormContactNameEx"
                      className="form-control"
                      value={this.state.pay1_money}
                      onChange={event =>
                        this.setState(
                          { pay1_money: event.target.value },
                          () => {
                            // this.chkPmtatus();
                          }
                        )
                      }
                    />
                  </MDBCol>
                
                </MDBRow>
                <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                  <MDBCol
                    md="4"
                    className="text-right"
                    style={{ padding: 0, paddingTop: 10 }}
                  >
                    <h5 style={{ color: "green", fontSize: 14 }}></h5>
                  </MDBCol>
                  <MDBCol md="7">
                  <Typography component="div">
                    <Grid
                      component="label"
                      container
                      alignItems="center"
                      spacing={1}
                    >
                      <Grid item>
                        <k
                          style={{
                            fontFamily: "Prompt"
                          }}
                        >
                          ไม่ VAT
                        </k>
                      </Grid>
                      <Grid item>
                        <AntSwitch
                          checked={this.state.checkedSave}
                          onChange={this.handleCheckedSave}
                          value={this.state.checkedSave}
                        />
                      </Grid>
                      <Grid item>
                        <k
                          style={{
                            fontFamily: "Prompt"
                          }}
                        >
                          VAT
                        </k>
                      </Grid>
                    </Grid>
                  </Typography>
                  </MDBCol>
                
                </MDBRow>


                <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                  <MDBCol
                    md="4"
                    className="text-right"
                    style={{ padding: 0, paddingTop: 10 }}
                  >
                    <h5 style={{ color: "green", fontSize: 14 }}>หัก ณ ที่จ่าย</h5>
                  </MDBCol>
                  <MDBCol md="7">
                    <input
                      type="text"
                      // id="defaultFormContactNameEx"
                      className="form-control"
                      value={this.state.pay1_money}
                      onChange={event =>
                        this.setState(
                          { pay1_money: event.target.value },
                          () => {
                            // this.chkPmtatus();
                          }
                        )
                      }
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                  <MDBCol
                    md="4"
                    className="text-right"
                    style={{ padding: 0, paddingTop: 10 }}
                  >
                    <h5 style={{ color: "green", fontSize: 14 }}>ส่วนลด(บาท)</h5>
                  </MDBCol>
                  <MDBCol md="7">
                    <input
                      type="text"
                      // id="defaultFormContactNameEx"
                      className="form-control"
                      value={this.state.pay1_money}
                      onChange={event =>
                        this.setState(
                          { pay1_money: event.target.value },
                          () => {
                            // this.chkPmtatus();
                          }
                        )
                      }
                    />
                  </MDBCol>
                
                </MDBRow>
                <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                  <MDBCol
                    md="4"
                    className="text-right"
                    style={{ padding: 0, paddingTop: 10 }}
                  >
                    <h5 style={{ color: "green", fontSize: 14 }}></h5>
                  </MDBCol>
                  <MDBCol md="7">
                  <Typography component="div">
                    <Grid
                      component="label"
                      container
                      alignItems="center"
                      spacing={1}
                    >
                      <Grid item>
                        <k
                          style={{
                            fontFamily: "Prompt"
                          }}
                        >
                          หลังหักส่วนลด
                        </k>
                      </Grid>
                      <Grid item>
                        <AntSwitch
                          checked={this.state.checkedSave}
                          onChange={this.handleCheckedSave}
                          value={this.state.checkedSave}
                        />
                      </Grid>
                      <Grid item>
                        <k
                          style={{
                            fontFamily: "Prompt"
                          }}
                        >
                          ก่อนหักส่วนลด
                        </k>
                      </Grid>
                    </Grid>
                  </Typography>
                  </MDBCol>
                
                </MDBRow>
                <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                  <MDBCol
                    md="4"
                    className="text-right"
                    style={{ padding: 0, paddingTop: 10 }}
                  >
                    <h5 style={{ color: "green", fontSize: 14 }}>วันที่จ่าย</h5>
                  </MDBCol>
                  <MDBCol md="7">
                    <Datetime1 />
                  </MDBCol>
                
                </MDBRow>
                <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                  <MDBCol
                    md="4"
                    className="text-right"
                    style={{ padding: 0, paddingTop: 10 }}
                  >
                    <h5 style={{ color: "green", fontSize: 14 }}>ผู้จ่าย</h5>
                  </MDBCol>
                  <MDBCol md="7">
                    <k style={{ fontSize: 13 }}>
                      <Select
                        // defaultValue={[colourOptions[2], colourOptions[3]]}
                        // isMulti
                        value={this.state.supplier_select}
                        name="colors"
                        options={this.state.supplier}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        style={{ padding: 0, marginTop: 0, marginBottom: 0 }}
                        onChange={this.onChangeDDlsup}
                      />
                    </k>
                  </MDBCol>
                 
                </MDBRow>
                <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                  <MDBCol
                    md="4"
                    className="text-right"
                    style={{ padding: 0, paddingTop: 10 }}
                  >
                    <h5 style={{ color: "green", fontSize: 14 }}>หมายเหตุ</h5>
                  </MDBCol>
                  <MDBCol md="7">
                    <input
                      type="text"
                      // id="defaultFormContactNameEx"
                      className="form-control"
                      value={this.state.pay1_remark}
                      onChange={event =>
                        this.setState(
                          { pay1_remark: event.target.value },
                          () => {
                            // this.chkPmtatus();
                          }
                        )
                      }
                    />
                  </MDBCol>
                  
                </MDBRow>
              </MDBCol>
              <MDBCol
                md="7"
                className="text-right"
                style={{ padding: 0, paddingTop: 10 }}
              >
                <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                  <MDBCol md="12">
                    <Pay3Table />
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
          <br /><br /><br /><br /><br />
        </MDBCard>
      </div>
    );
  }
}
