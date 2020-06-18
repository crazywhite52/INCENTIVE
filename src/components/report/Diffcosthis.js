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
import TblDiffcost from "./tbl_diffhis.tsx";
import DateSelect from "./datetime.tsx";

class Diffcosthis extends Component {
  _exporter;
  constructor(props) {
    super(props);
    this.state = {
      completed: 0,
      datadiff: [],
      active: false,
      setBtnAc: 0,
      datenow: new Date(),
      datestart: "",
      dateend: ""
    };
    this.ApiCall = new ApiService();
    this.searchdata = this.searchdata.bind(this);
    this.export = this.export.bind(this);
    this.Updatedata = this.Updatedata.bind(this);
  }
  export() {
    this._exporter.save();
  }

  componentDidMount() {
    // this.searchdata();
  }

  Updatedata(id, date) {
    console.log(id);
    if (id == 0) {
      this.setState({ datestart: date });
    } else if (id == 1) {
      this.setState({ dateend: date });
    }
  }

  searchdata() {
    let rows = {};
        rows = {
            datestart:this.state.datestart,
            dateend:this.state.dateend
        };
        // console.log(rows)
     this.setState({ active: true });
    this.ApiCall.getDiffHis(rows)
      .then(res => {
        if (res.success == true) {
          //console.log(res.data)
          this.setState({ datadiff: res.data, active: false });
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
                      &nbsp;DiffCost ยอดขาย ย้อนหลัง
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
                  ></Grid>
                  <Grid
                    item
                    lg={1}
                    xl={1}
                    xs={1}
                    sm={1}
                    md={1}
                    style={{ padding: 3, paddingTop: 20 }}
                  >
                    ช่วงเวลา
                  </Grid>
                  <Grid
                    item
                    lg={2}
                    xl={2}
                    xs={2}
                    sm={2}
                    md={2}
                    style={{ padding: 3, paddingTop: 20 }}
                  >
                    <DateSelect Updatedata={this.Updatedata} id={0} />
                  </Grid>
                  <Grid
                    item
                    lg={2}
                    xl={2}
                    xs={2}
                    sm={2}
                    md={2}
                    style={{ padding: 3, paddingTop: 20 }}
                  >
                    <DateSelect Updatedata={this.Updatedata} id={1} />
                  </Grid>
                  <Grid
                    item
                    lg={7}
                    xl={7}
                    xs={7}
                    sm={7}
                    md={7}
                    style={{ padding: 3, textAlign: "right" }}
                  >
                    <MDBBtn
                      color="success"
                      onClick={() => {
                        this.searchdata();
                      }}
                    >
                      <MDBIcon icon="calendar-alt" className="mr-1" size="sm" />{" "}
                      ค้นหา
                    </MDBBtn>

                    <MDBBtn
                      color="secondary"
                      onClick={() => {
                        this.export();
                      }}
                    >
                      <MDBIcon icon="calendar-alt" className="mr-1" size="sm" />{" "}
                      Excel
                    </MDBBtn>
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
      </div>
    );
  }
}
export default withSnackbar(Diffcosthis);
