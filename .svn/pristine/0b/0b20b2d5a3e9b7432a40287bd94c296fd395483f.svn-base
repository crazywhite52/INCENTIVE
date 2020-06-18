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
import Type from "./type.tsx";
import Promo from "./type_promotion.tsx";
//API connect
import ApiService from "../actions/apidata";

class incenType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 0,
      typedata: [],
      addtype: false,
      addpromotion: false,
      jobtype: "P",
      typename: "",
      detail: "",
      statusname: 0,
      statuspro: 0,
      // Modal Promotion
      proType: "",
      proName:"",
      shotName:'',
      DocProKey:'',
      proData:[],
      typeSelect:''
    };
    this.ApiCall = new ApiService();
    this.toggle = this.toggle.bind(this);
    this.togglePro = this.togglePro.bind(this);
    this.chkTypedata = this.chkTypedata.bind(this);
    this.confirmType = this.confirmType.bind(this);
    this.searchType = this.searchType.bind(this);
    this.chkProstatus = this.chkProstatus.bind(this);
    this.confirmPro = this.confirmPro.bind(this);
    this.updateGrid = this.updateGrid.bind(this);

  }
  toggle() {
    this.setState({
      addtype: !this.state.addtype,
      jobtype: "P",
      typename: "",
      detail: "",
      statusname: 0
    });
  }
  togglePro() {
    this.setState({
      addpromotion: !this.state.addpromotion,
      proType: "",
      proName:"",
      shotName:'',
      DocProKey:'',
      statuspro:0
    });
  }
  chkProstatus(){
    if(this.state.proType!=='' && this.state.proName!==''&&this.state.shotName!==''){
      this.setState({statuspro:1,DocProKey:this.state.proType+'_'+this.state.shotName});
    }else{
      this.setState({statuspro:0,DocProKey:this.state.proType+'_'+this.state.shotName});
    }
  }
  updateGrid(value){
      this.setState({typeSelect:value.type_name},()=>{
        this.searchPro()
      })
  }
  chkTypedata() {
    this.ApiCall.chkType(this.state.typename)
      .then(res => {
        if (res.success == true) {
          if (res.count == 0) {
            this.setState({ statusname: 1 });
          } else {
            this.setState({ statusname: 0 });
          }
        } else {
          console.log(res.message);
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }
  confirmType() {
    if (this.state.statusname == 0) {
      this.props.enqueueSnackbar(
        "ไม่สามารถบันทึกข้อมูลได้ ตรวจสอบใหม่อีกครั้ง ??",
        {
          variant: "error"
        }
      );
    } else {
      let datasend = Array();
      datasend = {
        type: this.state.jobtype,
        typename: this.state.typename,
        typedetail: this.state.detail
      };
      this.ApiCall.saveDataType(datasend)
        .then(res => {
          if (res.success == true) {
            this.props.enqueueSnackbar("OK บันทึกข้อมูลได้  ??", {
              variant: "success"
            });
            this.setState(
              {
                addtype: !this.state.addtype,
                jobtype: "P",
                typename: "",
                detail: "",
                statusname: 0
              },
              () => {
                this.searchType();
              }
            );
          } else {
            console.log(res.err);
          }
        })
        .catch(error => {
          console.error(error.message);
        });
    }
  }

  confirmPro() {
    if (this.state.statuspro == 0) {
      this.props.enqueueSnackbar(
        "ไม่สามารถบันทึกข้อมูลได้ ตรวจสอบใหม่อีกครั้ง ??",
        {
          variant: "error"
        }
      );
    } else {
      let datasend = Array();
      datasend = {
        type_name: this.state.proType,
        pro_name: this.state.proName,
        shotName: this.state.shotName,
        DocProKey: this.state.DocProKey,
      };
      this.ApiCall.saveDataPro(datasend)
        .then(res => {
          if (res.success == true) {
            this.props.enqueueSnackbar("OK บันทึกข้อมูลได้  ??", {
              variant: "success"
            });
            this.setState(
              {
                addpromotion: !this.state.addpromotion,
                proType: "",
                proName:"",
                shotName:'',
                DocProKey:'',
                statuspro:0
              },
              () => {
                this.searchPro();
              }
            );
          } else {
            // console.log(res.err);
            this.props.enqueueSnackbar(
              res.err.sqlMessage,
              {
                variant: "error"
              }
            );
          }
        })
        .catch(error => {
          console.error(error.message);
        });
    }
  }

  searchType() {
    this.ApiCall.getDataType()
      .then(res => {
        if (res.success == true) {
          this.setState({ typedata: res.data });
        } else {
          console.log(res.message);
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }
  searchPro() {
    
    this.ApiCall.getDataPro(this.state.typeSelect)
      .then(res => {
        // console.log(res)
        if (res.success == true) {
          this.setState({ proData: res.data });
        } else {
          console.log(res.message);
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  componentDidMount() {
    this.searchType();
  }
  render() {
    const { completed } = this.state;
    const listtype = this.state.typedata.map(rowdata => (
      <option value={rowdata.type_name}>{rowdata.type_name}</option>
    ));

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
              &nbsp;กำหนดประเภทของ Incentive && Promotion
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
            lg={5}
            xl={5}
            xs={5}
            sm={5}
            md={5}
            style={{ padding: 3 }}
          >
            <MDBBtn color="secondary" onClick={this.toggle}>
              เพิ่มประเภท <MDBIcon icon="plus" className="ml-1" />
            </MDBBtn>
            <MDBBtn color="default" onClick={this.togglePro}>
              เพิ่มโปรโมชัน <MDBIcon icon="plus" className="ml-1" />
            </MDBBtn>
          </Grid>
          <Grid
            item
            lg={7}
            xl={7}
            xs={7}
            sm={7}
            md={7}
            style={{ paddingTop: 20 }}
          ><h5 style={{color:'rgba(140, 139, 139, 0.87)'}}>PROMOTION <k style={{color:'green'}}>{this.state.typeSelect}</k></h5></Grid>
          <Grid item lg={5} xl={5} xs={5} sm={5} md={5} style={{ padding: 3 }}>
            <Type updateGrid={this.updateGrid} typedata={this.state.typedata} />
          </Grid>
          <Grid item lg={7} xl={7} xs={7} sm={7} md={7} style={{ padding: 3 }}>
            <Promo  proData={this.state.proData}/>
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
            <MDBIcon icon="plus" className="ml-1" /> สร้างประเภท INCENTIVE
          </MDBModalHeader>
          <MDBModalBody>
            <Grid
              container
              spacing={24}
              style={{ marginLeft: 20, marginRight: 20 }}
            >
              <Grid
                item
                lg={4}
                xl={4}
                xs={4}
                sm={4}
                md={4}
                style={{
                  padding: 0,
                  paddingTop: 20,
                  textAlign: "right",
                  paddingRight: 10
                }}
              >
                <h5 style={{ color: "green", fontSize: 16, marginTop: 10 }}>
                  ประเภทเอกสาร
                </h5>
              </Grid>
              <Grid
                item
                lg={6}
                xl={6}
                xs={6}
                sm={6}
                md={6}
                style={{ padding: 0, paddingTop: 20 }}
              >
                <select
                  className="browser-default custom-select"
                  value={this.state.jobtype}
                  onChange={event =>
                    this.setState({ jobtype: event.target.value }, () => {})
                  }
                >
                  <option value="P">P JOB</option>
                  <option value="C">C JOB</option>
                </select>
              </Grid>
              <Grid
                item
                lg={2}
                xl={2}
                xs={2}
                sm={2}
                md={2}
                style={{ padding: 0, margin: 0 }}
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
                  label="ชื่อประเภท"
                  icon="address-book"
                  type="text"
                  value={this.state.typename}
                  onChange={event =>
                    this.setState({ typename: event.target.value }, () => {
                      if (this.state.typename == "") {
                        this.setState({ statusname: 0 });
                      } else {
                        this.chkTypedata();
                      }
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
                    {this.state.statusname == 0 && (
                      <k style={{ color: "red" }}>incorrect</k>
                    )}
                    {this.state.statusname == 1 && (
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
                style={{ padding: 0 }}
              >
                <MDBInput
                  type="textarea"
                  rows="2"
                  value={this.state.detail}
                  label="รายละเอียด"
                  icon="pencil-alt"
                  style={{ marginTop: 0 }}
                  onChange={event =>
                    this.setState({ detail: event.target.value })
                  }
                />
              </Grid>
            </Grid>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="warning" onClick={this.toggle}>
              ยกเลิก
            </MDBBtn>
            <MDBBtn color="primary" onClick={this.confirmType}>
              บันทึกประเภท
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>

        {/* MODAL ADD Promotion */}
        <MDBModal
          isOpen={this.state.addpromotion}
          // toggle={this.toggle}
          size="lg"
          // side
          // position="top-right"
        >
          <MDBModalHeader toggle={this.togglePro} style={{ color: "#0d0f31" }}>
            <MDBIcon icon="plus" className="ml-1" /> เพิ่มโปรโมชั่นบน INCENTIVE
          </MDBModalHeader>
          <MDBModalBody>
            <Grid
              container
              spacing={24}
              style={{ marginLeft: 20, marginRight: 20 }}
            >
              <Grid
                item
                lg={4}
                xl={4}
                xs={4}
                sm={4}
                md={4}
                style={{
                  padding: 0,
                  paddingTop: 20,
                  textAlign: "right",
                  paddingRight: 10
                }}
              >
                <h5 style={{ color: "green", fontSize: 16, marginTop: 10 }}>
                  ประเภท incentive
                </h5>
              </Grid>
              <Grid
                item
                lg={6}
                xl={6}
                xs={6}
                sm={6}
                md={6}
                style={{ padding: 0, paddingTop: 20 }}
              >
                <select
                  className="browser-default custom-select"
                  value={this.state.proType}
                  onChange={event =>
                    this.setState({ proType: event.target.value }, () => {
                      this.chkProstatus()
                    })
                  }
                >
                 <option value="">--- เลือกประเภท ---</option> 
                  {listtype}
                  {/* <option value="C">C JOB</option> */}
                </select>
              </Grid>
              <Grid
                item
                lg={2}
                xl={2}
                xs={2}
                sm={2}
                md={2}
                style={{ padding: 0, margin: 0 }}
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
                  label="ชื่อโปรโมชัน"
                  icon="address-book"
                  type="text"
                  value={this.state.proName}
                  onChange={event =>
                    this.setState({ proName: event.target.value }, () => {
                      this.chkProstatus()
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
                lg={4}
                xl={4}
                xs={4}
                sm={4}
                md={4}
                style={{ padding: 0, margin: 0 }}
              >
                <MDBInput
                  label="อักษรย่อ"
                  icon="pen"
                  type="text"
                  value={this.state.shotName}
                  onChange={event =>
                    this.setState({ shotName: event.target.value,DocProKey:this.state.proType+'_'+event.target.value}, () => {
                     this.chkProstatus()
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
                lg={4}
                xl={4}
                xs={4}
                sm={4}
                md={4}
                style={{ padding: 0, margin: 0 }}
              >
                <MDBInput
                  label="รหัสเอกสาร"
                  icon="shapes"
                  type="text"
                  disabled={true}
                  value={this.state.DocProKey}
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
              >
                {" "}
                <p className="font-small grey-text d-flex justify-content-end">
                  data is
                  <a href="#!" className="dark-grey-text ml-1 font-weight-bold">
                    {this.state.statuspro == 0 && (
                      <k style={{ color: "red" }}>incorrect</k>
                    )}
                    {this.state.statuspro == 1 && (
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
              ></Grid>
            </Grid>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="warning" onClick={this.togglePro}>
              ยกเลิก
            </MDBBtn>
            <MDBBtn color="primary" onClick={this.confirmPro}>
              บันทึกประเภท
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </div>
    );
  }
}

export default withSnackbar(incenType);
