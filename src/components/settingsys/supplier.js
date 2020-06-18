import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import { TextInput } from "grommet";
import { withSnackbar } from "notistack";
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
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Supplier from "./supplier.tsx";
//API connect
import ApiService from "../actions/apidata";

class supPlier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 0,
      txtSearch: "",
      addtype: false,
      status_id: 0,
      status_name: 0,
      sup_id: "",
      sup_name: "",
      suplierData: [],
      type_sup:"0"
    };
    this.ApiCall = new ApiService();
    this.searchSuplier = this.searchSuplier.bind(this);
    this.searchSuplierSearch = this.searchSuplierSearch.bind(this);
    this.toggle = this.toggle.bind(this);
    this.chkTypestatus = this.chkTypestatus.bind(this);
    this.confirmSup = this.confirmSup.bind(this);
    this.onUpdatedata = this.onUpdatedata.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }
  // handleChange(event){
  //   this.setState({type_sup:event.target.value})
  // };
  handleChange = (event, value) => {
    this.setState({ type_sup:value },()=>{
      // console.log(this.state.type_sup)
    });
  };
  toggle() {
    this.setState({
      addtype: !this.state.addtype
    });
  }
  onUpdatedata(rowdata) {
    let datasend = Array();
    datasend = {
      sup_code: rowdata.suppliercode,
      sup_name: rowdata.supname,
      status: rowdata.status
    };
    this.ApiCall.updateSuplier(datasend)
      .then(res => {
        // console.log(res);
        if (res.success == true) {
          this.props.enqueueSnackbar("อัพเดทข้อมูล สำเร็จ..", {
            variant: "success"
          });
        } else {
          console.log(res.message);
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  confirmSup() {
    if (this.state.status_id == 0 || this.state.status_name == 0) {
      this.props.enqueueSnackbar(
        "ไม่สามารถบันทึกข้อมูลได้ ตรวจสอบใหม่อีกครั้ง ??",
        {
          variant: "error"
        }
      );
    } else {
      let datasend = Array();
      datasend = {
        sup_id: this.state.sup_id,
        sup_name: this.state.sup_name,
        type_sup:this.state.type_sup
      };
      this.ApiCall.saveDataSup(datasend)
        .then(res => {
          if (res.success == true) {
            this.props.enqueueSnackbar("OK บันทึกข้อมูลได้  ??", {
              variant: "success"
            });
            this.setState(
              {
                addtype: !this.state.addtype,
                status_id: 0,
                status_name: 0,
                sup_id: "",
                sup_name: "",
                type_sup:"0"
              },
              () => {
                this.searchSuplier();
              }
            );
          } else {
            // console.log(res.err);
            this.props.enqueueSnackbar(res.err.sqlMessage, {
              variant: "error"
            });
          }
        })
        .catch(error => {
          console.error(error.message);
        });
    }
  }

  chkTypestatus(type) {
    if (type == 1) {
      if (this.state.sup_id == "") {
        this.setState({ status_id: 0 });
      } else {
        this.ApiCall.chkStatusSupID(this.state.sup_id)
          .then(res => {
            if (res.success == true) {
              if (res.count == 0) {
                this.setState({ status_id: 1 });
              } else {
                this.setState({ status_id: 0 });
              }
              // this.setState({ suplierData: res.data });
            } else {
              console.log(res.message);
            }
          })
          .catch(error => {
            console.error(error.message);
          });
      }
    } else {
      if (this.state.sup_name == "") {
        this.setState({ status_name: 0 });
      } else {
        this.ApiCall.chkStatusSupName(this.state.sup_name)
          .then(res => {
            if (res.success == true) {
              if (res.count == 0) {
                this.setState({ status_name: 1 });
              } else {
                this.setState({ status_name: 0 });
              }
              // this.setState({ suplierData: res.data });
            } else {
              console.log(res.message);
            }
          })
          .catch(error => {
            console.error(error.message);
          });
      }
    }
  }
  componentDidMount() {
    this.searchSuplier();
  }
  searchSuplierSearch() {
    let datasend = Array();
    datasend = {
      txtsearch: this.state.txtSearch
    };
    this.ApiCall.postSuplier(datasend)
      .then(res => {
        // console.log(res);
        if (res.success == true) {
          this.setState({ suplierData: res.data });
        } else {
          console.log(res.message);
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  searchSuplier() {
    var txtSearch = "";
    if (this.state.txtSearch == "") {
      txtSearch = "all";
    } else {
      this.searchSuplierSearch();
    }
    this.ApiCall.getSuplier(txtSearch)
      .then(res => {
        // console.log(res);
        if (res.success == true) {
          this.setState({ suplierData: res.data });
        } else {
          console.log(res.message);
        }
      })
      .catch(error => {
        console.error(error.message);
      });
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
              &nbsp;กำหนด SUPPLIER
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
            <MDBBtn color="secondary" onClick={this.toggle}>
              เพิ่มใหม่ <MDBIcon icon="plus" className="ml-1" />
            </MDBBtn>
          </Grid>

          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right" }}>
              <strong style={{ fontSize: 16 }}>
                ค้นหา รหัส / ชื่อ Supplier
              </strong>
            </h6>
            <TextInput
              style={{ width: "100%", fontSize: 14 }}
              size="xsmall"
              value={this.state.txtSearch}
              placeholder="คำค้น....."
              ref={input => {
                this.code_route = input;
              }}
              onChange={event =>
                this.setState({ txtSearch: event.target.value }, () => {})
              }
              onKeyPress={event => {
                if (event.key === "Enter") {
                  this.searchSuplier();
                }
              }}
            />
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
            <Supplier
              suplierData={this.state.suplierData}
              onUpdatedata={this.onUpdatedata}
            />
          </Grid>
        </Grid>
        {/* MODAL ADD TYPE */}
        <MDBModal
          isOpen={this.state.addtype}
          // toggle={this.toggle}
          // size="fluid"
          side
          position="top-right"
        >
          <MDBModalHeader toggle={this.toggle} style={{ color: "#0d0f31" }}>
            <MDBIcon icon="plus" className="ml-1" /> เพิ่มข้อมูล SUPPLIER
          </MDBModalHeader>
          <MDBModalBody>
            <Grid
              container
              spacing={24}
              style={{ marginLeft: 20, marginRight: 20 }}
            >
              <Grid
                item
                lg={10}
                xl={10}
                xs={10}
                sm={10}
                md={10}
                style={{ padding: 0, margin: 0 }}
              >
                <MDBInput
                  label="รหัส supplier"
                  icon="lock"
                  type="text"
                  value={this.state.sup_id}
                  onChange={event =>
                    this.setState({ sup_id: event.target.value }, () => {
                      this.chkTypestatus(1);
                    })
                  }
                  validate
                  error="wrong"
                  success="right"
                  style={{ marginTop: 0, marginBottom: 0 }}
                />
                <p className="font-small grey-text d-flex justify-content-end">
                  data is
                  <a href="#!" className="dark-grey-text ml-1 font-weight-bold">
                    {this.state.status_id == 0 && (
                      <k style={{ color: "red" }}>incorrect</k>
                    )}
                    {this.state.status_id == 1 && (
                      <k style={{ color: "green" }}>correct</k>
                    )}
                  </a>
                </p>
              </Grid>
              <Grid
                item
                lg={2}
                xl={2}
                xs={2}
                sm={2}
                md={2}
                style={{ padding: 0 }}
              />
              <Grid
                item
                lg={10}
                xl={10}
                xs={10}
                sm={10}
                md={10}
                style={{ padding: 0, margin: 0 }}
              >
                <MDBInput
                  label="ชื่อ supplier"
                  icon="address-book"
                  type="text"
                  value={this.state.sup_name}
                  onChange={event =>
                    this.setState({ sup_name: event.target.value }, () => {
                      this.chkTypestatus(2);
                    })
                  }
                  validate
                  error="wrong"
                  success="right"
                  style={{ marginTop: 0, marginBottom: 0 }}
                />
                <p className="font-small grey-text d-flex justify-content-end">
                  data is
                  <a href="#!" className="dark-grey-text ml-1 font-weight-bold">
                    {this.state.status_name == 0 && (
                      <k style={{ color: "red" }}>incorrect</k>
                    )}
                    {this.state.status_name == 1 && (
                      <k style={{ color: "green" }}>correct</k>
                    )}
                  </a>
                </p>
              </Grid>
              <Grid
                item
                lg={2}
                xl={2}
                xs={2}
                sm={2}
                md={2}
                style={{ padding: 0 }}
              />
              <Grid
                item
                lg={10}
                xl={10}
                xs={10}
                sm={10}
                md={10}
                style={{ padding: 0, margin: 0 }}
              >
                <FormControl
                  component="fieldset"
                  // className={classes.formControl}
                >
                  <FormLabel component="legend">TYPE</FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={this.state.type_sup}
                    onChange={this.handleChange}
                  >
                    <FormControlLabel
                      value="0"
                      control={<Radio color="primary" />}
                      label="Supplier"
                      
                    />
                    <FormControlLabel
                      value="1"
                      control={<Radio color="primary" />}
                      label="Distributer"
                     
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio color="primary" />}
                      label="Vender"
                     
                    />
                  </RadioGroup>
                  <FormHelperText>* เลือกประเภทด้วยนะ</FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="warning" onClick={this.toggle}>
              ยกเลิก
            </MDBBtn>
            <MDBBtn color="primary" onClick={this.confirmSup}>
              บันทึกข้อมูล
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </div>
    );
  }
}

export default withSnackbar(supPlier);
