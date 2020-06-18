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
import Pmanager from "./pm.tsx";
//API connect
import ApiService from "../actions/apidata";

class Manager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 0,
      addtype: false,
      status_id: 0,
      pm_id: "",
      pm_name: "",
      pm_tel: "",
      pm_email: "",
      pm_nickname: "",
      pmList: []
    };
    this.ApiCall = new ApiService();
    this.toggle = this.toggle.bind(this);
    this.chkPmtatus = this.chkPmtatus.bind(this);
    this.confirmPm = this.confirmPm.bind(this);
    this.searchPmList = this.searchPmList.bind(this);
    this.onUpdatedata = this.onUpdatedata.bind(this);
  }

  toggle() {
    this.setState({
      addtype: !this.state.addtype,
      status_id: 0,
      pm_id: "",
      pm_name: "",
      pm_tel: "",
      pm_email: "",
      pm_nickname: ""
    });
  }
  componentDidMount() {
    this.searchPmList();
  }
  onUpdatedata(rowdata){
    let datasend = Array();
    datasend = {
      pm_id: rowdata.pm_id,
      status:rowdata.status
    };
    // console.log(datasend)
    this.ApiCall.updatePm(datasend)
      .then(res => {
        // console.log(res);
        if (res.success == true) {
          this.props.enqueueSnackbar(
            "อัพเดทข้อมูล สำเร็จ..",
            {
              variant: "success"
            }
          );
        } else {
          console.log(res.message);
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }
  searchPmList() {
    this.ApiCall.getPmList()
      .then(res => {
        // console.log(res);
        if (res.success == true) {
          this.setState({ pmList: res.data });
        } else {
          console.log(res.message);
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  confirmPm() {
    if (
      this.state.status_id == 0 ||
      this.state.pm_name == 0 ||
      this.state.pm_nickname == 0
    ) {
      this.props.enqueueSnackbar("ไม่สามารถบันทึกข้อมูลได้ ตรวจสอบข้อมูล??", {
        variant: "error"
      });
    } else {
      let datasend = Array();
      datasend = {
        pm_id: this.state.pm_id,
        pm_name: this.state.pm_name,
        pm_nickname: this.state.pm_nickname,
        pm_tel: this.state.pm_tel,
        pm_email: this.state.pm_email
      };
      this.ApiCall.saveDataPm(datasend)
        .then(res => {
          if (res.success == true) {
            this.props.enqueueSnackbar("OK บันทึกข้อมูลได้  ??", {
              variant: "success"
            });
            this.setState(
              {
                addtype: !this.state.addtype,
                status_id: 0,
                pm_id: "",
                pm_name: "",
                pm_tel: "",
                pm_email: "",
                pm_nickname: ""
              },
              () => {
                // this.searchSuplier();
                this.searchPmList();
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
  chkphone(value) {
    var data = value.split("-");
    var newdata = "";
    for (var i = 0; i < data.length; i++) {
      newdata = newdata + data[i];
    }
    return newdata;
  }
  chkPmtatus() {
    this.ApiCall.chkStatusPmID(this.state.pm_id)
      .then(res => {
        if (res.success == true) {
          if (res.data.length == 1) {
            var totalpass = 0;
            if (res.data[0].totalPass == 0) {
              totalpass = 1;
            } else {
              totalpass = 0;
            }
            // console.log(res)
            this.setState({
              pm_name: res.data[0].pm_name,
              pm_tel: this.chkphone(res.data[0].cur_phone),
              pm_nickname: res.data[0].personal_nickname,
              pm_email: res.data[0].cur_email,
              status_id: totalpass
            });
          } else {
            this.setState({
              pm_name: "",
              pm_tel: "",
              pm_nickname: "",
              pm_email: "",
              status_id: 0
            });
          }
        } else {
          this.props.enqueueSnackbar("ไม่สามารถทำงานให้สำเร็จได้..", {
            variant: "warning"
          });
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  // chkStatusPmID
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
              &nbsp;กำหนด เจ้าหน้าที่จัดซื้อ
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
              color="secondary"
              onClick={() => {
                // this.setBoxnow();
                this.toggle();
              }}
            >
              เพิ่มใหม่ <MDBIcon icon="plus" className="ml-1" />
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
            <Pmanager pmList={this.state.pmList} onUpdatedata={this.onUpdatedata}/>
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
            <MDBIcon icon="plus" className="ml-1" /> เพิ่มข้อมูลจัดซื้อ
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
                  label="รหัสพนักงาน"
                  icon="lock"
                  type="text"
                  value={this.state.pm_id}
                  onChange={event =>
                    this.setState({ pm_id: event.target.value }, () => {
                      this.chkPmtatus();
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
                  label="ชื่อ-นามสกุล (NO title)"
                  icon="address-book"
                  type="text"
                  value={this.state.pm_name}
                  onChange={event =>
                    this.setState({ pm_name: event.target.value }, () => {
                      // this.chkTypestatus(2);
                    })
                  }
                  validate
                  error="wrong"
                  success="right"
                  style={{ marginTop: 0, marginBottom: 0 }}
                />
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
                  label="ชื่อเล่น"
                  icon="address-book"
                  type="text"
                  value={this.state.pm_nickname}
                  onChange={event =>
                    this.setState({ pm_nickname: event.target.value }, () => {
                      // this.chkTypestatus(2);
                    })
                  }
                  validate
                  error="wrong"
                  success="right"
                  style={{ marginTop: 0, marginBottom: 0 }}
                />
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
                  label="เบอร์โทร"
                  icon="phone"
                  type="text"
                  value={this.state.pm_tel}
                  onChange={event =>
                    this.setState({ pm_tel: event.target.value }, () => {
                      // this.chkTypestatus(2);
                    })
                  }
                  validate
                  error="wrong"
                  success="right"
                  style={{ marginTop: 0, marginBottom: 0 }}
                />
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
                  label="e-mail"
                  icon="mail-bulk"
                  type="text"
                  value={this.state.pm_email}
                  onChange={event =>
                    this.setState({ pm_email: event.target.value }, () => {
                      // this.chkTypestatus(2);
                    })
                  }
                  validate
                  error="wrong"
                  success="right"
                  style={{ marginTop: 0, marginBottom: 0 }}
                />
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
            </Grid>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="warning" onClick={this.toggle}>
              ยกเลิก
            </MDBBtn>
            <MDBBtn color="primary" onClick={this.confirmPm}>
              บันทึกข้อมูล
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </div>
    );
  }
}

export default withSnackbar(Manager);
