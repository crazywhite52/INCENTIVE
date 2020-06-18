import React, { Component } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Select from "react-select";
import LoadingOverlay from "react-loading-overlay";
import { NavLink } from "react-router-dom";
import {
  MDBIcon,
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
  MDBModalFooter
} from "mdbreact";
import {
  ExcelExport,
  ExcelExportColumn
} from "@progress/kendo-react-excel-export";
import AntSwitch from "@material-ui/core/Switch";
import { withSnackbar } from "notistack";
import ApiService from "../actions/apidataCreate";
import AuthService from "../authlogin/AuthService";
import TblDiffcost from "./tbl_diffcost.tsx";
import Timeselect from "./timeselect.tsx";

class Diffcostnow extends Component {
  _exporter;
  _exporterTime;
  constructor(props) {
    super(props);
    this.state = {
      completed: 0,
      datadiff: [],
      active: false,
      setBtnAc: 0,
      time: {},
      timer: 0,
      seconds: 300,
      datenow: new Date(),
      time1:'00:00:00',
      time2:'00:00:00',
      dataex:[]
    };
    this.ApiCall = new ApiService();
    this.searchdata = this.searchdata.bind(this);
    this.export = this.export.bind(this);
    // this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.setBtnStop = this.setBtnStop.bind(this);
    this.setBtnStart = this.setBtnStart.bind(this);
    this.Updatedata = this.Updatedata.bind(this);
    this.exportTime = this.exportTime.bind(this);
    this.exportTimeEx = this.exportTimeEx.bind(this);
  }
  export() {
    this._exporter.save();
  }
  exportTimeEx() {
    this._exporterTime.save();
  }

  Updatedata(id,value){
    if(id==0){
      this.setState({time1:value})
    }else if(id==1){
      this.setState({time2:value})
    }
     
  }

  exportTime(){
    let times=Array();
        times={
          time1:this.state.time1,
          time2:this.state.time2
        }
        console.log(times)
    this.ApiCall.getDifftodayTime(times)
    .then(res => {
      if (res.success == true) {
        this.setState({dataex:res.data},()=>{
          this.exportTimeEx()
        })
       
      } else {
        console.log(res);
      }
    })
    .catch(error => {
      console.error(error.message);
    });
  }
  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds
    };
    return obj;
  }
  componentDidMount() {
    this.searchdata();
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    this.startTimer();
  }
  setBtnStop() {
    this.setState({ setBtnAc: 1 }, () => {
      clearInterval(this.state.timer);
    });
  }
  setBtnStart() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ setBtnAc: 0, time: timeLeftVar });
    this.state.timer = setInterval(this.countDown, 1000);
  }
  searchdata() {
    this.setState({ active: true });
    this.ApiCall.getDifftoday()
      .then(res => {
        if (res.success == true) {
      
          this.setState({ datadiff: res.data, active: false });
        } else {
          console.log(res.message);
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  startTimer() {
    console.log();
    if (this.state.timer == 0 && this.state.seconds > 0) {
      this.state.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.state.timer);
      this.searchdata();
      this.setState({ time: {}, seconds: 300, timer: 0 }, () => {
        this.startTimer();
      });
    }
  }
  render() {
    const { completed } = this.state;
    return (
      <div>
        <MDBRow>
          <MDBCol md="12">
            <div
              style={{
                fontFamily: "Prompt"
              }}
            >
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
                    lg={6}
                    xl={6}
                    xs={6}
                    sm={6}
                    md={6}
                    style={{ padding: 3, paddingLeft: 20 }}
                  >
                    <h4 style={{ color: "green" }}>
                      <br />
                      <MDBIcon icon="clipboard" className="cyan-text pr-3" />
                      &nbsp;DiffCost ยอดขาย ณ ปัจจุบัน
                    </h4>
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    xl={6}
                    xs={6}
                    sm={6}
                    md={6}
                    style={{ padding: 3, paddingLeft: 20, textAlign: "right" }}
                  >
                    {this.state.setBtnAc == 0 && (
                      <MDBBtn outline color="primary" onClick={this.setBtnStop}>
                        <MDBIcon icon="stopwatch" />
                        &nbsp; LOAD DATA{" "}
                        <k style={{ color: "red" }}>
                          {" "}
                          <strong>
                            {" "}
                            {this.state.time.m}:{this.state.time.s}
                          </strong>
                        </k>
                      </MDBBtn>
                    )}
                    {this.state.setBtnAc == 1 && (
                      <MDBBtn outline color="danger" onClick={this.setBtnStart}>
                        <MDBIcon far icon="stop-circle" />
                        &nbsp;<strong> STOP LOAD</strong>
                      </MDBBtn>
                    )}
                    <MDBBtn
                      color="secondary"
                      onClick={() => {
                        this.export();
                      }}
                    >
                      <MDBIcon icon="calendar-alt" className="mr-1" size="sm" />{" "}
                      Excel
                    </MDBBtn>
                    <NavLink to="/reportincentive_his" activeClassName="activeClass">
                    <MDBBtn
                      color="elegant"
                    //  onClick={() => {
                    //     this.export();
                    //   }} 
                    >
                    
                      <MDBIcon icon="calendar-alt" className="mr-1" size="sm" />{" "}
                      previous times
                    </MDBBtn>
                    </NavLink>
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
                    lg={12}
                    xl={12}
                    xs={12}
                    sm={12}
                    md={12}
                    style={{ padding: 3 }}
                  >
                    <LoadingOverlay
                      active={this.state.active}
                      spinner
                      text="กำลังโหลด..."
                    >
                      <TblDiffcost datadiff={this.state.datadiff} />
                    </LoadingOverlay>
                  </Grid>

                  <Grid
                    item
                    lg={2}
                    xl={2}
                    xs={2}
                    sm={2}
                    md={2}
                    style={{ padding: 3,paddingTop:10, }}
                  >  
                      ดึงข้อมูลระหว่างเวลา
                  </Grid>
                  <Grid
                    item
                    lg={1}
                    xl={1}
                    xs={1}
                    sm={1}
                    md={1}
                    style={{ padding: 3 }}
                  >  
                      <Timeselect Updatedata={this.Updatedata} id={0}/> 
                  </Grid>
                  <Grid
                    item
                    lg={1}
                    xl={1}
                    xs={1}
                    sm={1}
                    md={1}
                    style={{ padding: 3 }}
                  >  
                      <Timeselect Updatedata={this.Updatedata} id={1}/> 
                  </Grid>
                  <Grid
                    item
                    lg={8}
                    xl={8}
                    xs={8}
                    sm={8}
                    md={8}
                    style={{ padding: 0 }}
                  >  
                  
                    <MDBBtn
                      color="dark-green" size="sm"
                      onClick={() => {
                        this.exportTime();
                      }}
                    >
                      <MDBIcon icon="calendar-alt" className="mr-1" size="sm" />{" "}
                      Excel
                    </MDBBtn>

                  </Grid>
                  
                </Grid>
              </div>
            </div>
          </MDBCol>
        </MDBRow>

        <ExcelExport
          data={this.state.datadiff}
          // group={group}
          fileName={"Diffcost_" + this.state.datenow + ".xlsx"}
          ref={exporter => {
            this._exporter = exporter;
          }}
        >
          <ExcelExportColumn
            field="timeSell"
            title="เวลาขาย"
            locked={true}
            width={100}
          />
          <ExcelExportColumn
            field="Product"
            locked={true}
            title="รหัสสินค้า"
            width={150}
          />
         
          <ExcelExportColumn
            field="Serial"
            locked={true}
            title="Serial"
            width={150}
          />
          <ExcelExportColumn field="SetPrice" title="SetPrice" width={200} />
          <ExcelExportColumn field="MinPrice" title="MinPrice" width={200} />
          <ExcelExportColumn field="cost" title="ราคาทุน" width={150} />
          <ExcelExportColumn field="SellPrice" title="ราคาขาย" width={200} />
          <ExcelExportColumn field="diff_set" title="Diff_set" width={100} />
          <ExcelExportColumn field="diff_cost" title="Diff_cost" width={100} />
          <ExcelExportColumn field="CN" title="CN" width={100} />
          <ExcelExportColumn
            field="successPrice"
            title="กำไรหน้าบิล+CN"
            width={100}
          />
          <ExcelExportColumn field="perPrice" title="%" width={100} />
          <ExcelExportColumn field="branchname" title="สาขา" width={200} />
          <ExcelExportColumn
            field="Productname"
            title="ชื่อสินค้า"
            width={300}
          />
          <ExcelExportColumn
            field="classname"
            title="ประเภทสินค้า"
            width={200}
          />
          <ExcelExportColumn field="Incentive" title="Incentive" width={100} />
         
        </ExcelExport>


        <ExcelExport
          data={this.state.dataex}
          // group={group}
          fileName={"Diffcost_"+this.state.time1+"_"+this.state.time2+ ".xlsx"}
          ref={exporter => {
            this._exporterTime = exporter;
          }}
        >
          <ExcelExportColumn
            field="timeSell"
            title="เวลาขาย"
            locked={true}
            width={100}
          />
          <ExcelExportColumn
            field="Product"
            locked={true}
            title="รหัสสินค้า"
            width={150}
          />
         
          <ExcelExportColumn
            field="Serial"
            locked={true}
            title="Serial"
            width={150}
          />
          <ExcelExportColumn field="SetPrice" title="SetPrice" width={200} />
          <ExcelExportColumn field="MinPrice" title="MinPrice" width={200} />
          <ExcelExportColumn field="cost" title="ราคาทุน" width={150} />
          <ExcelExportColumn field="SellPrice" title="ราคาขาย" width={200} />
          <ExcelExportColumn field="diff_set" title="Diff_set" width={100} />
          <ExcelExportColumn field="diff_cost" title="Diff_cost" width={100} />
          <ExcelExportColumn field="CN" title="CN" width={100} />
          <ExcelExportColumn
            field="successPrice"
            title="กำไรหน้าบิล+CN"
            width={100}
          />
          <ExcelExportColumn field="perPrice" title="%" width={100} />
          <ExcelExportColumn field="branchname" title="สาขา" width={200} />
          <ExcelExportColumn
            field="Productname"
            title="ชื่อสินค้า"
            width={300}
          />
          <ExcelExportColumn
            field="classname"
            title="ประเภทสินค้า"
            width={200}
          />
          <ExcelExportColumn field="Incentive" title="Incentive" width={100} />
         
        </ExcelExport>
      </div>
    );
  }
}
export default withSnackbar(Diffcostnow);
