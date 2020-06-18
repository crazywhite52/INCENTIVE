import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import { SnackbarProvider } from "notistack";
import Select from "react-select";
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
  MDBModalFooter
} from "mdbreact";

import AntSwitch from "@material-ui/core/Switch";
import { withSnackbar } from "notistack";
import ApiService from "../actions/apidataCreate";
import AuthService from "../authlogin/AuthService";
import Datetime1 from "./datetime1.tsx";
import Indexjobp from "./indexjobp.tsx";
import paylist from '../data/paylist'

const orderOptions = values => {
  return values.filter(v => v.isFixed).concat(values.filter(v => !v.isFixed));
};

class createJobp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 0,
      addPop: false,
      typedata: [],
      money_est: null,
      money_commit: null,
      money_true: null,
       typenameselect:'เลือกประเภทเอกสาร',
       pronameselect:'เลือกโปรโมชัน',
      //  typenameselect: "PC",
      //  pronameselect: "PC_DP",
       
      prodata: [],
      dateselect1: this.getDatenow(),
      dateselect2: this.getDatenow(),
      dateselect3: this.getDatenow(),
      dateselect4: this.getDatenow(),
      dateselect5: this.getDatenow(),
      dateselect6: this.getDatenow(),
      supnameselect: [],
      puttext: true,
      bandlist: [],
      paylist:paylist,
      pmdata: [],
      categorylist: [],
      supplier: [],
      code_program: "",
      no_program_sup: "",
      quarter: "",
      quarter_text: "quarter",
      monthdata: [],
      monthselect: "",
      monthselect_text: "month",
      payselect_text: "เลือกจ่าย",
      messageselect_text: "การยืนยัน",
      yearsdata: [],
      yearsselect: "",
      yearsselect_text: "years",
      saveselect: "",
      pay_select: [],
      messageselect: "",
      saveselect_text: "years",
      checkedC: false,
      checkedSave: false,
      mark_confirm: "",
      contactnameselect: "",
      contactlist: [],
      vender_classid: "",
      category_select: [],
      band_select: [],
      claim_condition: "",
      supplier_select: "",
      pm_select: [],
      datajob:[],
      txt_doc3: "",
      jobremark: "",
      diff_commit: 0,
      diff_est: 0
    };
    this.ApiCall = new ApiService();
    this.toggle = this.toggle.bind(this);
    this.searchType = this.searchType.bind(this);
    this.setValueddl = this.setValueddl.bind(this);
    this.setValueddl2 = this.setValueddl2.bind(this);
    this.setValueddl3 = this.setValueddl3.bind(this);
    this.setValueddl4 = this.setValueddl4.bind(this);
    this.setValueddl5 = this.setValueddl5.bind(this);
    this.setValueddl6 = this.setValueddl6.bind(this);
    // this.setValueddl_pay = this.setValueddl_pay.bind(this);
    this.setValueddl_con = this.setValueddl_con.bind(this);
    this.onChangeDDlsup = this.onChangeDDlsup.bind(this);
    this.onChangeDDlcontact = this.onChangeDDlcontact.bind(this);
    this.onChangeDDlpm = this.onChangeDDlpm.bind(this);
    this.searchPro = this.searchPro.bind(this);
    this.Updatedata = this.Updatedata.bind(this);
    this.getDatenow = this.getDatenow.bind(this);
    this.searchSup = this.searchSup.bind(this);
    this.getQuarter = this.getQuarter.bind(this);
    this.startQuarter = this.startQuarter.bind(this);
    this.getYears = this.getYears.bind(this);
    this.handleCheckedC = this.handleCheckedC.bind(this);
    this.handleCheckedSave = this.handleCheckedSave.bind(this);
    this.searchCateBrand = this.searchCateBrand.bind(this);
    this.onChangeDDlcate = this.onChangeDDlcate.bind(this);
    this.searchBrand = this.searchBrand.bind(this);
    this.onChangeDDlband = this.onChangeDDlband.bind(this);
    this.onChangeDDlpaylist = this.onChangeDDlpaylist.bind(this);
    this.searchcontactBrand = this.searchcontactBrand.bind(this);
    this.searchPm = this.searchPm.bind(this);
    this.confirmdata = this.confirmdata.bind(this);
    this.reset_data = this.reset_data.bind(this);
    this.searchdocdata = this.searchdocdata.bind(this);
    this.load_edit = this.load_edit.bind(this);
    this.getPaychk = this.getPaychk.bind(this);

  }
  getDatenow() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;
    return today;
  }
  getPaychk(id){
    // console.log(this.state.pay_select)
    const result = this.state.pay_select.filter(pay => {
      return pay.value == id;
    });
    return result.length
  }
  getYears() {
    var now = new Date();
    var years = now.getFullYear() + 4;
    var years2 = now.getFullYear() - 8;
    let yearsdata = [];
    var i = 0;
    while (years > years2) {
      let newa = Array();
      newa = {
        value: years,
        label: years
      };
      yearsdata.push(newa);
      years = years - 1;
      i = i + 1;
    }
    this.setState({
      yearsdata: yearsdata
    });
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
  toggle() {
    if (this.state.pronameselect == "เลือกโปรโมชัน") {
      this.props.enqueueSnackbar("เลือกประเภทเอกสาร และ โปรโมชันด้วยค่ะ ", {
        variant: "warning"
      });
    } else {
      this.setState({
        addPop: !this.state.addPop
      });
    }
  }
  handleCheckedC() {
    this.setState(
      {
        checkedC: !this.state.checkedC
      },
      () => {
        // console.log(this.state.checkedC)
      }
    );
  }
  handleCheckedSave() {
    this.setState(
      {
        checkedSave: !this.state.checkedSave
      },
      () => {
        // console.log(this.state.checkedC)
      }
    );
  }
  componentDidMount() {
    this.searchType();
    this.startQuarter();
    this.searchSup();
    this.getYears();
    this.searchCateBrand();
    this.searchPm();
  }
  load_edit(rows){
    // console.log(rows)
    window.location.replace('/editp_job/'+rows.incentive_code);
  }
  searchType() {
    this.ApiCall.getType("P")
      .then(res => {
        if (res.success == true) {
          //  console.log(res)
          this.setState({ typedata: res.data });
        } else {
          console.log(res.message);
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }
  searchSup() {
    this.ApiCall.getSup()
      .then(res => {
        if (res.success == true) {
          this.setState({ supplier: res.data, contactlist: res.contact });
        } else {
          console.log(res.message);
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }
  searchPm() {
    this.ApiCall.getPm()
      .then(res => {
        // console.log(res)
        if (res.success == true) {
          this.setState({ pmdata: res.data });
        } else {
          console.log(res.message);
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }
  searchPro() {
    this.ApiCall.getPromo(this.state.typenameselect)
      .then(res => {
        if (res.success == true) {
          //  console.log(res)
          this.setState({ prodata: res.data });
        } else {
          console.log(res.message);
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }
  searchdocdata(){
    if(this.state.pronameselect=='เลือกโปรโมชัน'){
      this.props.enqueueSnackbar("ยังไม่ได้เลือกโปรโมชัน กลับไปเลือกก่อนนะ..", {
        variant: "warning"
      });
    }else{
      this.ApiCall.getDocdata(this.state.pronameselect)
      .then(res => {
        if (res.success == true) {
          // console.log(res)
          this.setState({ datajob: res.data });
        } else {
          console.log(res.message);
        }
      })
      .catch(error => {
        console.error(error.message);
      });
    }
    
  }
  searchCateBrand() {
    this.ApiCall.getCateBrand()
      .then(res => {
        if (res.success == true) {
          this.setState({ categorylist: res.data });
        } else {
          console.log(res.message);
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }
  searchBrand(id) {
    this.ApiCall.getBand(id)
      .then(res => {
        if (res.success == true) {
          // console.log(res.data );
          this.setState({ bandlist: res.data });
        } else {
          console.log(res.message);
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }
  startQuarter() {
    this.ApiCall.getQuarter(0)
      .then(res => {
        if (res.success == true) {
          //  console.log(res)
          this.setState({ monthdata: res.data });
        } else {
          console.log(res.message);
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }
  getQuarter() {
    this.ApiCall.getQuarter(this.state.quarter)
      .then(res => {
        if (res.success == true) {
          //  console.log(res)
          this.setState({ monthdata: res.data });
        } else {
          console.log(res.message);
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }
  onChangeDDlsup(value) {
    this.setState({ supplier_select: value }, () => {
      // this.searchBrand()
    });
  }
  onChangeDDlcate(value) {
    this.setState({ category_select: value }, () => {
      // console.log(this.state.category_select)
      this.searchBrand(this.state.category_select.value);
    });
  }
  onChangeDDlpm(value) {
    this.setState({ pm_select: value }, () => {
      // console.log(this.state.category_select)
      // this.searchBrand(this.state.category_select.value);
    });
  }
  searchcontactBrand() {
    // console.log(this.state.contactnameselect);
    this.ApiCall.getcontactBrand(this.state.contactnameselect.value)
      .then(res => {
        if (res.success == true) {
          this.setState({ band_select: res.data });
        } else {
          console.log(res.message);
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }
  onChangeDDlband(value, { action, removedValue }) {
    switch (action) {
      case "remove-value":
      case "pop-value":
        if (removedValue.isFixed) {
          return;
        }
        break;
      case "clear":
        value = this.state.bandlist.filter(v => v.isFixed);
        break;
    }
    value = orderOptions(value);
    this.setState({ band_select: value }, () => {
      // console.log(this.state.band_select)
    });
  }
  onChangeDDlpaylist(value, { action, removedValue }) {
    switch (action) {
      case "remove-value":
      case "pop-value":
        if (removedValue.isFixed) {
          return;
        }
        break;
      case "clear":
        value = this.state.paylist.filter(v => v.isFixed);
        break;
    }
    value = orderOptions(value);
    this.setState({ pay_select: value }, () => {
      // console.log(this.state.pay_select)
    });
  }
  
  onChangeDDlcontact(value) {
    const result = this.state.categorylist.filter(member => {
      return member.value == value.vender_classid;
    });
    let arrResult = Array();
    arrResult = {
      value: result[0].value,
      label: result[0].label
    };
    const resultsup = this.state.supplier.filter(member => {
      return member.value == value.vender_supid;
    });
    let arrResultSup = Array();
    arrResultSup = {
      value: resultsup[0].value,
      label: resultsup[0].label
    };
    const resultpm = this.state.pmdata.filter(member => {
      return member.value == value.pm_id;
    });
    let arrResultPm = Array();
    arrResultPm = {
      value: resultpm[0].value,
      label: resultpm[0].label
    };

    // console.log(value)
    this.setState(
      {
        contactnameselect: value,
        vender_classid: value.vender_classid,
        supplier_select: arrResultSup,
        category_select: arrResult,
        pm_select: arrResultPm
      },
      () => {
        this.searchBrand(this.state.category_select.value);
        this.searchcontactBrand();
      }
    );
  }
  setValueddl(label) {
    // console.log(label.target.value)
    this.setState(
      {
        typenameselect: label.target.value
      },
      () => {
        this.searchPro();
      }
    );
  }
  setValueddl2(label) {
    // console.log(label.target.value)
    this.setState(
      {
        pronameselect: label.target.value
      },
      () => {
        // this.searchPro()
      }
    );
  }
  setValueddl3(label) {
    // console.log(label.target.value)
    this.setState(
      {
        quarter: label.target.value,
        quarter_text: label.target.name
      },
      () => {
        this.getQuarter();
      }
    );
  }
  setValueddl4(label) {
    // console.log(label.target.value)
    this.setState(
      {
        monthselect: label.target.value,
        monthselect_text: label.target.name
      },
      () => {
        this.getQuarter();
      }
    );
  }
  setValueddl5(label) {
    // console.log(label.target.value)
    this.setState(
      {
        yearsselect: label.target.value,
        yearsselect_text: label.target.name
      },
      () => {
        // this.getQuarter();
      }
    );
  }
  setValueddl6(label) {
    // console.log(label.target.value)
    this.setState(
      {
        saveselect: label.target.value,
        saveselect_text: label.target.name
      },
      () => {
        // this.getQuarter();
      }
    );
  }
  // setValueddl_pay(label) {
  //   // console.log(label.target.value)
  //   this.setState(
  //     {
  //       payselect: label.target.value,
  //       payselect_text: label.target.name
  //     },
  //     () => {
  //       // this.getQuarter();
  //     }
  //   );
  // }
  setValueddl_con(label) {
    // console.log(label.target.value)
    var puttext = true;
    if (label.target.value == 3) {
      puttext = false;
    } else {
      puttext = true;
    }
    this.setState(
      {
        messageselect: label.target.value,
        messageselect_text: label.target.name,
        puttext: puttext
      },
      () => {
        // this.getQuarter();
      }
    );
  }
  reset_data() {
    this.setState({
      addPop: false,
      // typedata: [],
      money_est: null,
      money_commit: null,
      money_true: null,
      // typenameselect:'เลือกประเภทเอกสาร',
      // pronameselect:'เลือกโปรโมชัน',
      // prodata: [],
      dateselect1: this.getDatenow(),
      dateselect2: this.getDatenow(),
      dateselect3: this.getDatenow(),
      dateselect4: this.getDatenow(),
      dateselect5: this.getDatenow(),
      dateselect6: this.getDatenow(),
      supnameselect: [],
      puttext: true,
      bandlist: [],
      // pmdata: [],
      // categorylist: [],
      // supplier: [],
      code_program: "",
      no_program_sup: "",
      quarter: "",
      quarter_text: "quarter",
      // monthdata: [],
      monthselect: "",
      monthselect_text: "month",
      payselect_text: "เลือกจ่าย",
      messageselect_text: "การยืนยัน",
      yearsdata: [],
      yearsselect: "",
      yearsselect_text: "years",
      saveselect: "",
      pay_select: [],
      messageselect: "",
      saveselect_text: "years",
      checkedC: false,
      checkedSave: false,
      mark_confirm: "",
      contactnameselect: "",
      // contactlist: [],
      vender_classid: "",
      category_select: [],
      band_select: [],
      claim_condition: "",
      supplier_select: "",
      pm_select: [],
      txt_doc3: "",
      jobremark: "",
      diff_commit: 0,
      diff_est: 0
    })
   
  }
  confirmdata() {
    var data_json = Array();
    if(this.state.no_program_sup=='' || this.state.contactnameselect==''){
      this.props.enqueueSnackbar("คุณยังไม่ได้ป้อนข้อมูลที่จำเป็น เช่น No. Program Sup หรือ ผู้ติดต่อ", {
                variant: "warning"
              });
    }else{
    data_json = {
      jobtype: this.state.typenameselect,
      jobpromotion: this.state.pronameselect,
      dayjob: this.state.dateselect1,
      quarter_q: this.state.quarter,
      quarter_month: this.state.monthselect,
      quarter_year: this.state.yearsselect,
      no_program_sup: this.state.no_program_sup,
      contactname: this.state.contactnameselect,
      supplier: this.state.supplier_select,
      pm: this.state.pm_select,
      category: this.state.category_select,
      brand: this.state.band_select,
      sup_confirm_doc: this.state.checkedC,
      doc_note: this.state.mark_confirm,
      day_start: this.state.dateselect2,
      day_end: this.state.dateselect3,
      day_pay: this.state.dateselect4,
      day_send: this.state.dateselect5,
      money_book: this.state.money_est,
      money_commit: this.state.money_commit,
      money_real: this.state.money_true,
      money_diff_book: this.state.diff_est,
      money_diff_commit: this.state.diff_commit,
      // pay_is: this.state.payselect,
      pay_cash:this.getPaychk(1),
      pay_transfer:this.getPaychk(2),
      pay_check:this.getPaychk(3),
      pay_credit:this.getPaychk(4),
      pay_product:this.getPaychk(5),
      pay_voucher:this.getPaychk(6),
      pay_discount:this.getPaychk(7),

      confirm_is: this.state.messageselect,
      confirm_other: this.state.txt_doc3,
      day_receive: this.state.dateselect6,
      claim_condition: this.state.claim_condition,
      claim_mark: this.state.jobremark,
      save_account: this.state.checkedSave,
      save_account_year: this.state.saveselect_text
    };

    // console.log(data_json)

    this.ApiCall.saveDataIncentive(data_json)
      .then(res => {
        if (res.success == true) {
          this.props.enqueueSnackbar("บันทึกข้อมูลสำเร็จแล้ว ตรวจสอบข้อมูลของคุณได้เลยค่ะ", {
            variant: "success"
          });
          this.reset_data();
          this.searchdocdata();
        } else {
          this.props.enqueueSnackbar("ไม่สำเร็จ.."+res.err, {
            variant: "warning"
          });
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  }

  render() {
    const { completed } = this.state;
    const listtype = this.state.typedata.map(rowdata => (
      <MDBDropdownItem onClick={this.setValueddl} value={rowdata.type_name}>
        {rowdata.type_name}
      </MDBDropdownItem>
    ));
    const listpro = this.state.prodata.map(rowdata => (
      <MDBDropdownItem onClick={this.setValueddl2} value={rowdata.value}>
        {rowdata.label}
      </MDBDropdownItem>
    ));
    const monthlist = this.state.monthdata.map(rowdata => (
      <MDBDropdownItem
        onClick={this.setValueddl4}
        value={rowdata.value}
        name={rowdata.label}
      >
        {rowdata.label}
      </MDBDropdownItem>
    ));
    const yearlist = this.state.yearsdata.map(rowdata => (
      <MDBDropdownItem
        onClick={this.setValueddl5}
        value={rowdata.value}
        name={rowdata.label}
      >
        {rowdata.label}
      </MDBDropdownItem>
    ));
    const yearlist2 = this.state.yearsdata.map(rowdata => (
      <MDBDropdownItem
        onClick={this.setValueddl6}
        value={rowdata.value}
        name={rowdata.label}
      >
        {rowdata.label}
      </MDBDropdownItem>
    ));

    return (
      <div>
        <MDBRow>
          <MDBCol md="12">
            {/* <MDBCard> */}
            <div
              style={{
                fontFamily: "Prompt"
                // backgroundImage: `url(${Background})`,
                // backgroundSize: "stretch"
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
                    lg={12}
                    xl={12}
                    xs={12}
                    sm={12}
                    md={12}
                    style={{ padding: 3, paddingLeft: 20 }}
                  >
                    <h4 style={{ color: "green" }}>
                      <br />
                      <MDBIcon icon="clipboard" className="cyan-text pr-3" />
                      &nbsp;รายการเอกสาร INCENTIVE(P)
                    </h4>
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
                    lg={8}
                    xl={8}
                    xs={8}
                    sm={8}
                    md={8}
                    // style={{ padding: 3 }}
                  >
                    <MDBBtnGroup>
                      <MDBDropdown>
                        <MDBDropdownToggle
                          caret
                          color="secondary"
                          className="h-100"
                        >
                          <MDBIcon icon="angle-double-right" className="ml-1" />{" "}
                          {this.state.typenameselect}
                        </MDBDropdownToggle>
                        <MDBDropdownMenu basic color="secondary">
                          &nbsp;&nbsp;&nbsp;{listtype}
                        </MDBDropdownMenu>
                      </MDBDropdown>
                    </MDBBtnGroup>
                    &nbsp;
                    <MDBBtnGroup>
                      <MDBDropdown>
                        <MDBDropdownToggle
                          caret
                          color="secondary"
                          className="h-100"
                        >
                          <MDBIcon icon="chalkboard-teacher" className="ml-1" />{" "}
                          {this.state.pronameselect}
                        </MDBDropdownToggle>
                        <MDBDropdownMenu basic color="secondary">
                          &nbsp;&nbsp;&nbsp;{listpro}
                        </MDBDropdownMenu>
                      </MDBDropdown>
                    </MDBBtnGroup>
                    {/* <MDBBtn color="secondary" onClick={this.toggle}>
                      สร้างเอกสารใหม่ <MDBIcon icon="plus" className="ml-1" />
                    </MDBBtn> */}
                    <MDBBtn color="default" onClick={this.toggle}>
                      สร้างเอกสารใหม่ <MDBIcon icon="plus" className="ml-1" />
                    </MDBBtn>
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    xl={4}
                    xs={4}
                    sm={4}
                    md={4}
                    style={{ padding: 3, textAlign: "right" }}
                  >
                    <MDBBtn color="deep-purple" onClick={this.searchdocdata}>
                      ค้นข้อมูล <MDBIcon icon="search" className="ml-1" />
                    </MDBBtn>
                  </Grid>
                  <Grid
                    item
                    lg={12}
                    xl={12}
                    xs={12}
                    sm={12}
                    md={12}
                    style={{ paddingTop: 20 }}
                  >
                    <Indexjobp datajob={this.state.datajob} load_edit={this.load_edit}/>
                  </Grid>
                </Grid>
              </div>
              {/* </MDBCardBody> */}
            </div>
          </MDBCol>
        </MDBRow>

        {/* <MDBContainer> */}
        <MDBModal isOpen={this.state.addPop} size="xl">
          <MDBModalHeader toggle={this.reset_data}>
            <MDBIcon icon="book-open" size="1x" className="green-text pr-3" />{" "}
            สร้างเอกสารตัว P ประเภท
            <k style={{ color: "#2f2f4a" }}> {this.state.pronameselect}</k>
          </MDBModalHeader>
          <MDBModalBody style={{ overlfow: "scroll" }}>
            <MDBContainer fluid>
              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol md="1" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>วันที่</h5>
                </MDBCol>
                <MDBCol md="3">
                  <Datetime1 Updatedata={this.Updatedata} type={1} />
                </MDBCol>
                <MDBCol md="1"></MDBCol>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }} className="text-right">
                  <h5 style={{ color: "green", fontSize: 14 }}>
                    Quarter. month
                  </h5>
                </MDBCol>
                <MDBCol md="5">
                  <MDBBtnGroup>
                    <MDBDropdown>
                      <MDBDropdownToggle
                        caret
                        color="blue-grey"
                        className="h-100"
                      >
                        {this.state.quarter_text}
                      </MDBDropdownToggle>
                      <MDBDropdownMenu basic color="blue-grey">
                        <MDBDropdownItem
                          onClick={this.setValueddl3}
                          value={0}
                          name={"quarter"}
                        >
                          QUARTER
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl3}
                          value={1}
                          name={"Q 1"}
                        >
                          Q 1
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl3}
                          value={2}
                          name={"Q 2"}
                        >
                          Q 2
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl3}
                          value={3}
                          name={"Q 3"}
                        >
                          Q 3
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl3}
                          value={4}
                          name={"Q 4"}
                        >
                          Q 4
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBBtnGroup>
                  <MDBBtnGroup>
                    <MDBDropdown>
                      <MDBDropdownToggle
                        caret
                        color="blue-grey"
                        className="h-100"
                      >
                        {this.state.monthselect_text}
                      </MDBDropdownToggle>
                      <MDBDropdownMenu basic color="blue-grey">
                        {monthlist}
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBBtnGroup>
                  <MDBBtnGroup>
                    <MDBDropdown>
                      <MDBDropdownToggle
                        caret
                        color="blue-grey"
                        className="h-100"
                      >
                        {this.state.yearsselect_text}
                      </MDBDropdownToggle>
                      <MDBDropdownMenu basic color="blue-grey">
                        {yearlist}
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBBtnGroup>
                </MDBCol>
              </MDBRow>
              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>
                    No. Program Sup
                  </h5>
                </MDBCol>
                <MDBCol md="4">
                  <input
                    type="text"
                    // id="defaultFormContactNameEx"
                    className="form-control"
                    value={this.state.no_program_sup}
                    onChange={event =>
                      this.setState(
                        { no_program_sup: event.target.value },
                        () => {
                          // this.chkPmtatus();
                        }
                      )
                    }
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>ผู้ติดต่อ</h5>
                </MDBCol>
                <MDBCol md="10">
                  <k style={{ fontSize: 13 }}>
                    <Select
                      name="colors"
                      value={this.state.contactnameselect}
                      options={this.state.contactlist}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      style={{ padding: 0, marginTop: 0, marginBottom: 0 }}
                      onChange={this.onChangeDDlcontact}
                    />
                  </k>
                </MDBCol>
              </MDBRow>
              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>
                    Supplier/Vender
                  </h5>
                </MDBCol>
                <MDBCol md="5">
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
                <MDBCol md="1" style={{ padding: 0, paddingTop: 10 }} className="text-right">
                  <h5 style={{ color: "green", fontSize: 14 }}>PM</h5>
                </MDBCol>
                <MDBCol md="4">
                  <k style={{ fontSize: 13 }}>
                    <Select
                      // defaultValue={[colourOptions[2], colourOptions[3]]}
                      // isMulti
                      value={this.state.pm_select}
                      name="colors"
                      options={this.state.pmdata}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      style={{ padding: 0, marginTop: 0, marginBottom: 0 }}
                      onChange={this.onChangeDDlpm}
                    />
                  </k>
                </MDBCol>
              </MDBRow>
              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>
                    ประเภทของสินค้า
                  </h5>
                </MDBCol>
                <MDBCol md="5">
                  <k style={{ fontSize: 13 }}>
                    <Select
                      value={this.state.category_select}
                      // isMulti
                      name="colors"
                      options={this.state.categorylist}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      style={{ padding: 0, marginTop: 0, marginBottom: 0 }}
                      onChange={this.onChangeDDlcate}
                    />
                  </k>
                </MDBCol>
                <MDBCol md="1" style={{ padding: 0, paddingTop: 10 }} className="text-right">
                  <h5 style={{ color: "green", fontSize: 14 }}>แบนด์</h5>
                </MDBCol>
                <MDBCol md="4">
                  <k style={{ fontSize: 13 }}>
                    <Select
                      value={this.state.band_select}
                      isMulti
                      name="colors"
                      options={this.state.bandlist}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      style={{ padding: 0, marginTop: 0, marginBottom: 0 }}
                      onChange={this.onChangeDDlband}
                    />
                  </k>
                </MDBCol>
              </MDBRow>

              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>
                    เอกสารยืนยันจาก Sup
                  </h5>
                </MDBCol>
                <MDBCol md="2">
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
                          ไม่มี
                        </k>
                      </Grid>
                      <Grid item>
                        <AntSwitch
                          checked={this.state.checkedC}
                          onChange={this.handleCheckedC}
                          value={this.state.checkedC}
                        />
                      </Grid>
                      <Grid item>
                        <k
                          style={{
                            fontFamily: "Prompt"
                          }}
                        >
                          มี
                        </k>
                      </Grid>
                    </Grid>
                  </Typography>
                </MDBCol>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }} className="text-right">
                  <h5
                    style={{
                      color: "green",
                      fontSize: 14,
                      alignContent: "right"
                    }}
                  >
                    หมายเหตุเอกสาร
                  </h5>
                </MDBCol>
                <MDBCol md="6">
                  <input
                    type="text"
                    // id="defaultFormContactNameEx"
                    className="form-control"
                    value={this.state.mark_confirm}
                    onChange={event =>
                      this.setState(
                        { mark_confirm: event.target.value },
                        () => {
                          // this.chkPmtatus();
                        }
                      )
                    }
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol md="1" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>วันที่เริ่ม</h5>
                </MDBCol>
                <MDBCol md="2">
                  <Datetime1 Updatedata={this.Updatedata} type={2} />
                </MDBCol>
                <MDBCol md="1" style={{ padding: 0, paddingTop: 10 }} className="text-right">
                  <h5 style={{ color: "green", fontSize: 14 }}>วันสิ้นสุด</h5>
                </MDBCol>
                <MDBCol md="2">
                  <Datetime1 Updatedata={this.Updatedata} type={3} />
                </MDBCol>
                <MDBCol md="1" style={{ padding: 0, paddingTop: 10 }} className="text-right">
                  <h5 style={{ color: "green", fontSize: 14 }}>กำหนดจ่าย</h5>
                </MDBCol>
                <MDBCol md="2">
                  <Datetime1 Updatedata={this.Updatedata} type={4} />
                </MDBCol>
                <MDBCol md="1" style={{ padding: 0, paddingTop: 10 }} className="text-right">
                  <h5 style={{ color: "green", fontSize: 14 }}>ส่งเอกสาร</h5>
                </MDBCol>
                <MDBCol md="2">
                  <Datetime1 Updatedata={this.Updatedata} type={5} />
                </MDBCol>
              </MDBRow>

              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol md="4">
                  <MDBInput
                    label="ยอดลงบัญชี"
                    icon="adjust"
                    type="text"
                    value={this.state.money_est}
                    onChange={event =>
                      this.setState(
                        {
                          money_est: event.target.value,
                          diff_est: event.target.value - this.state.money_true
                        },
                        () => {
                          // this.chkPmtatus();
                        }
                      )
                    }
                    validate
                    error="wrong"
                    success="right"
                    style={{ marginTop: 0, marginBottom: 0 }}
                  />
                </MDBCol>
                <MDBCol md="4">
                  <MDBInput
                    label="ยอด COMMIT SUP"
                    icon="adjust"
                    type="text"
                    value={this.state.money_commit}
                    onChange={event =>
                      this.setState(
                        {
                          money_commit: event.target.value,
                          diff_commit:
                            event.target.value - this.state.money_true
                        },
                        () => {
                          // this.chkPmtatus();
                        }
                      )
                    }
                    validate
                    error="wrong"
                    success="right"
                    style={{ marginTop: 0, marginBottom: 0 }}
                  />
                </MDBCol>
                <MDBCol md="4">
                  <MDBInput
                    label="ยอดเงินจริง"
                    icon="adjust"
                    type="text"
                    value={this.state.money_true}
                    onChange={event => {
                      this.setState(
                        {
                          money_true: event.target.value,
                          diff_est: this.state.money_est - event.target.value,
                          diff_commit:
                            this.state.money_commit - event.target.value
                        },
                        () => {
                          // this.chkPmtatus();
                        }
                      );
                    }}
                    validate
                    error="wrong"
                    success="right"
                    style={{ marginTop: 0, marginBottom: 0 }}
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5
                    style={{
                      color: "green",
                      fontSize: 14,
                      alignContent: "right"
                    }}
                  >
                    ส่วนต่างลงบัญชี
                  </h5>
                </MDBCol>
                <MDBCol md="3">
                  <input
                    type="text"
                    readOnly={true}
                    // id="defaultFormContactNameEx"
                    className="form-control"
                    value={this.state.diff_est}
                    onChange={event =>
                      this.setState({ diff_est: event.target.value }, () => {
                        // this.chkPmtatus();
                      })
                    }
                  />
                </MDBCol>
                <MDBCol md="2"></MDBCol>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }} className="text-right">
                  <h5
                    style={{
                      color: "green",
                      fontSize: 14,
                      alignContent: "right"
                    }}
                  >
                    ส่วนต่าง COMMIT SUP
                  </h5>
                </MDBCol>
                <MDBCol md="3">
                  <input
                    type="text"
                    readOnly={true}
                    // id="defaultFormContactNameEx"
                    className="form-control"
                    value={this.state.diff_commit}
                    onChange={event =>
                      this.setState({ diff_commit: event.target.value }, () => {
                        // this.chkPmtatus();
                      })
                    }
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol md="1" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>จ่ายเป็น</h5>
                </MDBCol>
                <MDBCol md="3">

                <k style={{ fontSize: 13 }}>
                    <Select
                      value={this.state.pay_select}
                      isMulti
                      name="colors"
                      options={this.state.paylist}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      style={{ padding: 0, marginTop: 0, marginBottom: 0 }}
                      onChange={this.onChangeDDlpaylist}
                    />
                  </k>


                  {/* <MDBBtnGroup>
                    <MDBDropdown>
                      <MDBDropdownToggle
                        caret
                        color="blue-grey"
                        className="h-100"
                      >
                        {this.state.payselect_text}
                      </MDBDropdownToggle>
                      <MDBDropdownMenu basic color="blue-grey">
                        <MDBDropdownItem
                          onClick={this.setValueddl_pay}
                          value={1}
                          name="เงินสด"
                        >
                          เงินสด
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl_pay}
                          value={2}
                          name="เงินโอน"
                        >
                          เงินโอน
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl_pay}
                          value={3}
                          name="เช็ค"
                        >
                          เช็ค
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl_pay}
                          value={4}
                          name="ใบลดหนี้"
                        >
                          ใบลดหนี้
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl_pay}
                          value={5}
                          name="สินค้า"
                        >
                          สินค้า
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl_pay}
                          value={6}
                          name="Voucher"
                        >
                          Voucher
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl_pay}
                          value={7}
                          name="ส่วนลด"
                        >
                          ส่วนลด
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBBtnGroup> */}
                </MDBCol>
                {/* <MDBCol md="1" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>เอกสารยืนยัน</h5>
                </MDBCol> */}
                <MDBCol md="2" className="text-right">
                  <MDBBtnGroup>
                    <MDBDropdown>
                      <MDBDropdownToggle
                        caret
                        color="blue-grey"
                        className="h-100"
                      >
                        {this.state.messageselect_text}
                      </MDBDropdownToggle>
                      <MDBDropdownMenu basic color="blue-grey">
                        <MDBDropdownItem
                          onClick={this.setValueddl_con}
                          value={1}
                          name="จดหมายแจ้ง"
                        >
                          จดหมายแจ้ง
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl_con}
                          value={2}
                          name="E-MAIL"
                        >
                          E-MAIL
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl_con}
                          value={3}
                          name="อื่นๆ"
                        >
                          อื่นๆ
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBBtnGroup>
                </MDBCol>
                <MDBCol md="2" className="text-left">
                  <input
                    type="text"
                    readOnly={this.state.puttext}
                    // id="defaultFormContactNameEx"
                    className="form-control"
                    value={this.state.txt_doc3}
                    onChange={event =>
                      this.setState({ txt_doc3: event.target.value }, () => {
                        // this.chkPmtatus();
                      })
                    }
                  />
                </MDBCol>
                <MDBCol md="1" style={{ padding: 0, paddingTop: 10 }} className="text-right">
                  <h5 style={{ color: "green", fontSize: 14 }}>ได้รับเอกสาร</h5>
                </MDBCol>
                <MDBCol md="2">
                  <Datetime1 Updatedata={this.Updatedata} type={6} />
                </MDBCol>
              </MDBRow>

              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>
                    เงื่อนไขการเคลม
                  </h5>
                </MDBCol>
                <MDBCol md="6">
                  {" "}
                  <input
                    type="text"
                    // id="defaultFormContactNameEx"
                    className="form-control"
                    value={this.state.claim_condition}
                    onChange={event =>
                      this.setState(
                        { claim_condition: event.target.value },
                        () => {
                          // this.chkPmtatus();
                        }
                      )
                    }
                  />
                </MDBCol>
                <MDBCol md="1" style={{ padding: 0, paddingTop: 10 }} className="text-right">
                  <h5 style={{ color: "green", fontSize: 14 }}>หมายเหตุ</h5>
                </MDBCol>
                <MDBCol md="3">
                  {" "}
                  <input
                    type="text"
                    // id="defaultFormContactNameEx"
                    className="form-control"
                    value={this.state.jobremark}
                    onChange={event =>
                      this.setState({ jobremark: event.target.value }, () => {
                        // this.chkPmtatus();
                      })
                    }
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>บันทึกปัญชี</h5>
                </MDBCol>
                <MDBCol md="2">
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
                          ไม่บันทึก
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
                          บันทึก
                        </k>
                      </Grid>
                    </Grid>
                  </Typography>
                </MDBCol>
                <MDBCol md="2">
                  <MDBBtnGroup>
                    <MDBDropdown>
                      <MDBDropdownToggle
                        caret
                        color="blue-grey"
                        className="h-100"
                      >
                        {this.state.saveselect_text}
                      </MDBDropdownToggle>
                      <MDBDropdownMenu basic color="blue-grey">
                        {yearlist2}
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBBtnGroup>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="deep-orange" onClick={this.reset_data}>
              <MDBIcon icon="reply" className="ml-1" /> ยกเลิก
            </MDBBtn>
            <MDBBtn color="deep-purple" onClick={this.confirmdata}>
              <MDBIcon icon="save" className="ml-1" /> บันทึก เอกสาร
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
        {/* </MDBContainer> */}
      </div>
    );
  }
}
export default withSnackbar(createJobp);
