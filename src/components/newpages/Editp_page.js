import React, { Component, Fragment } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import { SnackbarProvider } from "notistack";
import Select from "react-select";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
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
import axios from "axios";
import AntSwitch from "@material-ui/core/Switch";
import { withSnackbar } from "notistack";
import ApiService from "../actions/apidataCreate";
import AuthService from "../authlogin/AuthService";
import Datetime1 from "./datetimeedit.tsx";
// import Indexjobp from "./indexjobp.tsx";
import Form1 from "./Addproduct";
import Form2 from "./Addserial";
import Form3 from "./Claimdetail";
import Form4 from "./Receivemoney";
import Form5 from "./Express";
import paylist from "../data/paylist";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};
const orderOptions = values => {
  return values.filter(v => v.isFixed).concat(values.filter(v => !v.isFixed));
};
class Editp_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 0,
      value: 0,
      no_program_sup: "",
      quarter: "",
      quarter_text: "quarter",
      monthdata: [],
      pay_select: [],
      paylist: paylist,
      yearsdata: [],
      monthselect: "",
      monthselect_text: "month",
      payselect_text: "เลือกจ่าย",
      messageselect_text: "การยืนยัน",
      yearsdata: [],
      yearsselect: "",
      yearsselect_text: "years",
      saveselect: "",
      payselect: "",
      messageselect: "",
      saveselect_text: "years",
      contactlist: [],
      categorylist: [],
      edit1: true,
      supplier: [],
      pmdata: [],
      pm_select: "",
      diff_commit: 0,
      diff_est: 0,
      dataEdit: [],
      band_select: [],
      contactnameselect: [],
      supplier_select: [],
      pm_select: [],
      category_select: [],
      mark_confirm: "",
      checkedC: false,
      payselect_text: "",
      txt_doc3: "",
      checkedSave: false,
      dateselect1: this.getDatenow(),
      dateselect2: this.getDatenow(),
      dateselect3: this.getDatenow(),
      dateselect4: this.getDatenow(),
      dateselect5: this.getDatenow(),
      dateselect6: this.getDatenow(),
      jobstatus: 0,
      path_files: "NO",
      selectedFile: null
    };
    this.ApiCall = new ApiService();
    this.setValueddl3 = this.setValueddl3.bind(this);
    this.startQuarter = this.startQuarter.bind(this);
    this.getQuarter = this.getQuarter.bind(this);
    this.onChangeDDlcontact = this.onChangeDDlcontact.bind(this);
    this.onChangeDDlpm = this.onChangeDDlpm.bind(this);
    this.searchCateBrand = this.searchCateBrand.bind(this);
    this.onChangeDDlcate = this.onChangeDDlcate.bind(this);
    this.searchBrand = this.searchBrand.bind(this);
    this.searchcontactBrand = this.searchcontactBrand.bind(this);
    this.Updatedata = this.Updatedata.bind(this);
    this.setValueddl_pay = this.setValueddl_pay.bind(this);
    this.setValueddl_con = this.setValueddl_con.bind(this);
    this.editfield = this.editfield.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getDataEdit = this.getDataEdit.bind(this);
    this.findQuarteryear = this.findQuarteryear.bind(this);
    this.onChangeDDlpaylist = this.onChangeDDlpaylist.bind(this);
    this.getPaychk = this.getPaychk.bind(this);
    this.updateConfirm = this.updateConfirm.bind(this);
    this.setValueddl4 = this.setValueddl4.bind(this);
    this.setValueddl5 = this.setValueddl5.bind(this);
    this.setValueddl6 = this.setValueddl6.bind(this);
    this.handleCheckedSave = this.handleCheckedSave.bind(this);
    this.handleCheckedC = this.handleCheckedC.bind(this);
    this.canceljob = this.canceljob.bind(this);
    this.finnish_job = this.finnish_job.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  handleFileChange = event => {
    this.setState(
      {
        selectedFile: event.target.files[0]
      },
      () => {
        // console.log(this.state.selectedFile)
      }
    );
  };


  handleChange = (event, value) => {
    this.setState({ value });
  };
  findQuarteryear(id) {
    if (id == "") {
      return "years";
    } else {
      return id;
    }
  }
  getDatenow() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;
    return today;
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
  componentDidMount() {
    this.startQuarter();
    this.searchSup();
    this.getYears();
    this.searchCateBrand();
    this.searchPm();
    this.getDataEdit();
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
  handleCheckedC() {
    this.setState(
      {
        checkedC: !this.state.checkedC
      },
      () => {
        console.log(this.state.checkedC);
      }
    );
  }
  handleUpload() {
    let currentComponent = this;
    this.setState({
      active: true
    });
    const data = new FormData();
    data.append("filesupload", this.state.selectedFile);
    data.append("incentive", this.props.match.params.id);
    axios
      .post("http://172.18.0.135:5001/rebate/upload/uploadfile_file", data)
      .then(function(response) {
        // console.log(response.data);
        if(response.data.status==true){
          
          currentComponent.props.enqueueSnackbar(
            "อัพโหลดไฟล์สำเร็จ...",
            {
              variant: "success"
            }
          );
          currentComponent.getDataEdit();
        }else{
          currentComponent.props.enqueueSnackbar(
            "ไม่สามารถอัพโหลดได้",
            {
              variant: "warning"
            }
          );
        }
         
        // currentComponent.setState({
        //   active:false
        // })
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  getDataEdit() {
    this.ApiCall.getDataEdit(this.props.match.params.id)
      .then(res => {
        if (res.success == true) {
          console.log(res.data);
          let pay_select = [];
          if (res.data[0].pay_cash == 1) {
            pay_select.push({ value: 1, label: "เงินสด" });
          }
          if (res.data[0].pay_check == 1) {
            pay_select.push({ value: 2, label: "เงินโอน" });
          }
          if (res.data[0].pay_transfer == 1) {
            pay_select.push({ value: 3, label: "เช็ค" });
          }
          if (res.data[0].pay_credit == 1) {
            pay_select.push({ value: 4, label: "ใบลดหนี้" });
          }
          if (res.data[0].pay_product == 1) {
            pay_select.push({ value: 5, label: "สินค้า" });
          }
          if (res.data[0].pay_voucher == 1) {
            pay_select.push({ value: 6, label: "Voucher" });
          }
          if (res.data[0].pay_discount == 1) {
            pay_select.push({ value: 7, label: "ส่วนลด" });
          }
          this.setState(
            {
              dataEdit: res.data,
              band_select: res.brand,
              quarter_text: this.findQuarter(res.data[0].quarter_q),
              quarter: res.data[0].quarter_q,
              monthselect_text: this.findMonth(res.data[0].quarter_month),
              monthselect: res.data[0].quarter_month,
              yearsselect_text: this.findQuarteryear(res.data[0].quarter_year),
              yearsselect: res.data[0].quarter_year,
              no_program_sup: res.data[0].no_program_sup,
              contactnameselect: this.findContact(res.data[0].contact_id),
              supplier_select: this.findSupplier(res.data[0].supplier),
              pm_select: this.findPm(res.data[0].pm),
              category_select: this.findCate(res.data[0].category),
              mark_confirm: res.data[0].doc_note,
              checkedC: res.data[0].sup_confirm_doc,
              money_est: res.data[0].money_book,
              money_commit: res.data[0].money_commit,
              money_true: res.data[0].money_real,
              diff_est: res.data[0].money_diff_book,
              diff_commit: res.data[0].money_diff_commit,
              // payselect_text:this.findPay(res.data[0].pay_is),
              pay_select: pay_select,
              messageselect_text: this.findConfirm(res.data[0].confirm_is),
              messageselect: res.data[0].confirm_is,
              txt_doc3: res.data[0].confirm_other,
              claim_condition: res.data[0].claim_condition,
              jobremark: res.data[0].claim_mark,
              checkedSave: res.data[0].save_account,
              saveselect_text: res.data[0].save_account_year,
              dateselect1: res.data[0].dayjob,
              dateselect2: res.data[0].day_start,
              dateselect3: res.data[0].day_end,
              dateselect4: res.data[0].day_pay,
              dateselect5: res.data[0].day_send,
              dateselect6: res.data[0].day_receive,
              jobstatus: res.data[0].status,
              path_files: res.data[0].path_files
            },
            () => {
              // console.log(this.state.dateselect1)
              // console.log(this.state.band_select)
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
  findQuarter(id) {
    if (id == 1) {
      return "Q 1";
    } else if (id == 2) {
      return "Q 2";
    } else if (id == 3) {
      return "Q 3";
    } else if (id == 4) {
      return "Q 4";
    } else {
      return "quarter";
    }
  }
  findConfirm(id) {
    if (id == 1) {
      return "จดหมายแจ้ง";
    } else if (id == 2) {
      return "E-MAIL";
    } else if (id == 3) {
      return "อื่นๆ";
    } else {
      return "การยืนยัน";
    }
  }
  findContact(id) {
    var found = this.state.contactlist.find(function(element) {
      return element.value == id;
    });
    return found;
  }
  findMonth(id) {
    if (id == "") {
      return "month";
    } else {
      var found = this.state.monthdata.find(function(element) {
        return element.value == id;
      });
      return found.label;
    }
  }
  findSupplier(id) {
    var found = this.state.supplier.find(function(element) {
      return element.value == id;
    });
    return found;
  }
  findPm(id) {
    var found = this.state.pmdata.find(function(element) {
      return element.value == id;
    });
    return found;
  }
  findCate(id) {
    var found = this.state.categorylist.find(function(element) {
      return element.value == id;
    });
    return found;
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
  onChangeDDlpm(value) {
    this.setState({ pm_select: value }, () => {});
  }
  onChangeDDlcate(value) {
    this.setState({ category_select: value }, () => {
      this.searchBrand(this.state.category_select.value);
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
  setValueddl3(label) {
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
  setValueddl_pay(label) {
    this.setState({
      payselect: label.target.value,
      payselect_text: label.target.name
    });
  }
  setValueddl_con(label) {
    var puttext = true;
    if (label.target.value == 3) {
      puttext = false;
    } else {
      puttext = true;
    }
    this.setState({
      messageselect: label.target.value,
      messageselect_text: label.target.name,
      puttext: puttext
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
          this.setState({ bandlist: res.data });
        } else {
          console.log(res.message);
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }
  getPaychk(id) {
    // console.log(this.state.pay_select)
    const result = this.state.pay_select.filter(pay => {
      return pay.value == id;
    });
    return result.length;
  }
  updateConfirm() {
    var data_json = Array();
    if (this.state.no_program_sup == "" || this.state.contactnameselect == "") {
      this.props.enqueueSnackbar(
        "คุณยังไม่ได้ป้อนข้อมูลที่จำเป็น เช่น No. Program Sup หรือ ผู้ติดต่อ",
        {
          variant: "warning"
        }
      );
    } else {
      data_json = {
        jobdoc: this.props.match.params.id,
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
        pay_cash: this.getPaychk(1),
        pay_transfer: this.getPaychk(2),
        pay_check: this.getPaychk(3),
        pay_credit: this.getPaychk(4),
        pay_product: this.getPaychk(5),
        pay_voucher: this.getPaychk(6),
        pay_discount: this.getPaychk(7),
        confirm_is: this.state.messageselect,
        confirm_other: this.state.txt_doc3,
        day_receive: this.state.dateselect6,
        claim_condition: this.state.claim_condition,
        claim_mark: this.state.jobremark,
        save_account: this.state.checkedSave,
        save_account_year: this.state.saveselect_text
      };
      this.ApiCall.updateDataIncentive(data_json)
        .then(res => {
          if (res.success == true) {
            this.props.enqueueSnackbar(
              "บันทึกข้อมูลสำเร็จแล้ว ตรวจสอบข้อมูลของคุณได้เลยค่ะ",
              {
                variant: "success"
              }
            );
            // this.reset_data();
            // this.searchdocdata();
          } else {
            this.props.enqueueSnackbar("ไม่สำเร็จ.." + res.err, {
              variant: "warning"
            });
          }
        })
        .catch(error => {
          console.error(error.message);
        });
    }
    // console.log(data_json);
  }

  finnish_job() {
    let data_json = Array();
    data_json = {
      incentive_code: this.props.match.params.id,
      jobstatus: 1
    };
    this.ApiCall.updateStatusIncentive(data_json)
      .then(res => {
        if (res.success == true) {
          this.props.enqueueSnackbar(
            "บันทึกข้อมูลสำเร็จแล้ว ตรวจสอบข้อมูลของคุณได้เลยค่ะ",
            {
              variant: "success"
            }
          );
          // this.reset_data();
          this.getDataEdit();
        } else {
          this.props.enqueueSnackbar("ไม่สำเร็จ.." + res.err, {
            variant: "warning"
          });
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  canceljob() {
    let data_json = Array();
    data_json = {
      incentive_code: this.props.match.params.id,
      jobstatus: 8
    };
    this.ApiCall.updateStatusIncentive(data_json)
      .then(res => {
        if (res.success == true) {
          this.props.enqueueSnackbar(
            "บันทึกข้อมูลสำเร็จแล้ว ตรวจสอบข้อมูลของคุณได้เลยค่ะ",
            {
              variant: "success"
            }
          );
          // this.reset_data();
          this.getDataEdit();
        } else {
          this.props.enqueueSnackbar("ไม่สำเร็จ.." + res.err, {
            variant: "warning"
          });
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  editfield() {
    this.setState(
      {
        edit1: !this.state.edit1
      },
      () => {
        if (this.state.edit1 == true) {
          this.updateConfirm();
        }
      }
    );
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
  render() {
    const { completed } = this.state;
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
        <MDBCard>
          <MDBCardHeader>
            <MDBRow>
              <MDBCol md="6">
                <h5 style={{ paddingTop: 15, color: "black" }}>
                  <MDBIcon icon="barcode" className="pr-3" />
                  &nbsp;ข้อมูลเอกสาร INCENTIVE รหัส{" "}
                  <k style={{ color: "green" }}>{this.props.match.params.id}</k>
                </h5>
              </MDBCol>
              <MDBCol md="6" className="text-right">
                {this.state.edit1 == true &&
                  this.state.jobstatus != 1 &&
                  this.state.jobstatus != 8 && (
                    <MDBBtn
                      target="_blank"
                      color="secondary"
                      onClick={this.editfield}
                    >
                      <MDBIcon icon="edit" /> แก้ไขเอกสาร
                    </MDBBtn>
                  )}
                {this.state.edit1 == false && (
                  <MDBBtn
                    target="_blank"
                    color="success"
                    onClick={this.editfield}
                  >
                    <MDBIcon icon="save" /> บันทึกเอกสาร
                  </MDBBtn>
                )}
                {this.state.jobstatus != 8 && this.state.jobstatus != 1 && (
                  <MDBBtn
                    target="_blank"
                    // color="danger"
                    onClick={this.finnish_job}
                  >
                    <MDBIcon icon="edit" /> JOB FINNISH
                  </MDBBtn>
                )}
                {this.state.jobstatus != 1 && this.state.jobstatus != 8 && (
                  <MDBBtn
                    target="_blank"
                    color="danger"
                    onClick={this.canceljob}
                  >
                    <MDBIcon icon="edit" /> ยกเลิกเอกสาร
                  </MDBBtn>
                )}
              </MDBCol>
            </MDBRow>
          </MDBCardHeader>
          <MDBCardBody style={{ paddingTop: 0 }}>
            <MDBRow style={{ color: "#2f2f4a", padding: 5, paddingBottom: 10 }}>
              <MDBCol
                md="12"
                className="text-right"
                style={{ padding: 0, paddingTop: 0 }}
              >
                {this.state.jobstatus == 0 && (
                  <h5 style={{ color: "#8089a0", fontSize: 14 }}>
                    สถานะเอกสาร :{" "}
                    <k style={{ color: "#aa66cc" }}>
                      <MDBIcon fab icon="buffer" /> ตั้งเอกสาร
                    </k>{" "}
                  </h5>
                )}
                {this.state.jobstatus == 1 && (
                  <h5 style={{ color: "#8089a0", fontSize: 14 }}>
                    สถานะเอกสาร :{" "}
                    <k style={{ color: "#2bbbad" }}>
                      <MDBIcon fab icon="buffer" /> ปิดจ๊อบแล้ว
                    </k>{" "}
                  </h5>
                )}
                {this.state.jobstatus == 8 && (
                  <h5 style={{ color: "#8089a0", fontSize: 14 }}>
                    สถานะเอกสาร :{" "}
                    <k style={{ color: "red" }}>
                      <MDBIcon far icon="window-close" /> ยกเลิกเอกสาร
                    </k>{" "}
                  </h5>
                )}
              </MDBCol>
            </MDBRow>
            <fieldset disabled={this.state.edit1}>
              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol
                  md="2"
                  className="text-right"
                  style={{ padding: 0, paddingTop: 10 }}
                >
                  <h5 style={{ color: "green", fontSize: 14 }}>วันที่เอกสาร</h5>
                </MDBCol>
                <MDBCol md="2">
                  <Datetime1
                    Updatedata={this.Updatedata}
                    type={1}
                    dataVal={this.state.dateselect1}
                  />
                </MDBCol>
                <MDBCol md="1"></MDBCol>
                <MDBCol md="1" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>
                    Quarter. month
                  </h5>
                </MDBCol>
                <MDBCol md="4">
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
                <MDBCol
                  md="2"
                  className="text-right"
                  style={{ padding: 0, paddingTop: 10 }}
                >
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
                <MDBCol md="1"></MDBCol>
                <MDBCol
                  md="2"
                  className="text-center"
                  style={{ padding: 0, paddingTop: 10 }}
                >
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
              </MDBRow>
              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol
                  md="2"
                  className="text-right"
                  style={{ padding: 0, paddingTop: 10 }}
                >
                  <h5 style={{ color: "green", fontSize: 14 }}>ผู้ติดต่อ</h5>
                </MDBCol>
                <MDBCol md="9">
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
                <MDBCol
                  md="2"
                  className="text-right"
                  style={{ padding: 0, paddingTop: 10 }}
                >
                  <h5 style={{ color: "green", fontSize: 14 }}>
                    Supplier/Vender
                  </h5>
                </MDBCol>
                <MDBCol md="4">
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
                <MDBCol
                  md="1"
                  className="text-right"
                  style={{ padding: 0, paddingTop: 10 }}
                >
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
                <MDBCol
                  md="2"
                  className="text-right"
                  style={{ padding: 0, paddingTop: 10 }}
                >
                  <h5 style={{ color: "green", fontSize: 14 }}>
                    ประเภทของสินค้า
                  </h5>
                </MDBCol>
                <MDBCol md="4">
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
                <MDBCol
                  md="1"
                  className="text-right"
                  style={{ padding: 0, paddingTop: 10 }}
                >
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
                <MDBCol
                  md="2"
                  className="text-right"
                  style={{ padding: 0, paddingTop: 10 }}
                >
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
                <MDBCol md="3">
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
                <MDBCol
                  md="1"
                  className="text-right"
                  style={{ padding: 0, paddingTop: 10 }}
                >
                  <h5 style={{ color: "green", fontSize: 14 }}>วันที่เริ่ม</h5>
                </MDBCol>
                <MDBCol md="2">
                  <Datetime1
                    Updatedata={this.Updatedata}
                    type={2}
                    dataVal={this.state.dateselect2}
                  />
                </MDBCol>
                <MDBCol
                  md="1"
                  className="text-right"
                  style={{ padding: 0, paddingTop: 10 }}
                >
                  <h5 style={{ color: "green", fontSize: 14 }}>วันสิ้นสุด</h5>
                </MDBCol>
                <MDBCol md="2">
                  <Datetime1
                    Updatedata={this.Updatedata}
                    type={3}
                    dataVal={this.state.dateselect3}
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow style={{ color: "#2f2f4a", padding: 5, paddingTop: 20 }}>
                <MDBCol
                  md="2"
                  className="text-right"
                  style={{ padding: 0, paddingTop: 10 }}
                >
                  <h5 style={{ color: "green", fontSize: 14 }}>กำหนดจ่าย</h5>
                </MDBCol>
                <MDBCol md="2">
                  <Datetime1
                    Updatedata={this.Updatedata}
                    type={4}
                    dataVal={this.state.dateselect4}
                  />
                </MDBCol>
                <MDBCol
                  md="2"
                  className="text-right"
                  style={{ padding: 0, paddingTop: 10 }}
                >
                  <h5 style={{ color: "green", fontSize: 14 }}>ส่งเอกสาร</h5>
                </MDBCol>
                <MDBCol md="2">
                  <Datetime1
                    Updatedata={this.Updatedata}
                    type={5}
                    dataVal={this.state.dateselect5}
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol md="1"></MDBCol>
                <MDBCol md="2">
                  <MDBInput
                    label="ยอดลงบัญชี"
                    icon="adjust"
                    type="text"
                    value={this.state.money_est}
                    onChange={event =>
                      this.setState({
                        money_est: event.target.value,
                        diff_est: event.target.value - this.state.money_true
                      })
                    }
                    validate
                    error="wrong"
                    success="right"
                    style={{ marginTop: 0, marginBottom: 0 }}
                  />
                </MDBCol>
                <MDBCol md="2">
                  <MDBInput
                    label="ยอด COMMIT SUP"
                    icon="adjust"
                    type="text"
                    value={this.state.money_commit}
                    onChange={event =>
                      this.setState({
                        money_commit: event.target.value,
                        diff_commit: event.target.value - this.state.money_true
                      })
                    }
                    validate
                    error="wrong"
                    success="right"
                    style={{ marginTop: 0, marginBottom: 0 }}
                  />
                </MDBCol>
                <MDBCol md="2">
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
                <MDBCol md="2">
                  <MDBInput
                    label="ส่วนต่างลงบัญชี"
                    icon="bacon"
                    disabled={true}
                    type="text"
                    value={this.state.diff_est}
                    validate
                    error="wrong"
                    success="right"
                    style={{ marginTop: 0, marginBottom: 0, color: "red" }}
                  />
                </MDBCol>

                <MDBCol md="2">
                  <MDBInput
                    label="ส่วนต่าง COMMIT SUP"
                    icon="bacon"
                    disabled={true}
                    type="text"
                    value={this.state.diff_commit}
                    validate
                    error="wrong"
                    success="right"
                    style={{ marginTop: 0, marginBottom: 0, color: "red" }}
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol
                  md="1"
                  className="text-right"
                  style={{ padding: 0, paddingTop: 10 }}
                >
                  <h5 style={{ color: "green", fontSize: 14 }}>จ่ายเป็น</h5>
                </MDBCol>
                <MDBCol md="2" className="text-left">
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
                  </MDBBtnGroup>*/}
                </MDBCol>
                <MDBCol
                  md="1"
                  className="text-right"
                  style={{ padding: 0, paddingTop: 10 }}
                >
                  <h5 style={{ color: "green", fontSize: 14 }}>เอกสารยืนยัน</h5>
                </MDBCol>
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
                <MDBCol md="2">
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
                <MDBCol
                  md="1"
                  className="text-right"
                  style={{ padding: 0, paddingTop: 10 }}
                >
                  <h5 style={{ color: "green", fontSize: 14 }}>ได้รับเอกสาร</h5>
                </MDBCol>
                <MDBCol md="2">
                  <Datetime1
                    Updatedata={this.Updatedata}
                    type={6}
                    dataVal={this.state.dateselect6}
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol
                  md="2"
                  className="text-right"
                  style={{ padding: 0, paddingTop: 10 }}
                >
                  <h5 style={{ color: "green", fontSize: 14 }}>
                    เงื่อนไขการเคลมสินค้า
                  </h5>
                </MDBCol>
                <MDBCol md="5">
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
                <MDBCol
                  md="1"
                  className="text-right"
                  style={{ padding: 0, paddingTop: 10 }}
                >
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
                <MDBCol
                  md="2"
                  className="text-center"
                  style={{ padding: 0, paddingTop: 10 }}
                >
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
                <MDBCol
                  md="2"
                  className="text-center"
                  style={{ padding: 0, paddingTop: 10 }}
                >
                  <h5 style={{ color: "green", fontSize: 14 }}>
                    อัพโหลดไฟล์อ้างอิง
                  </h5>
                </MDBCol>
                <MDBCol md="3" style={{ paddingTop: 20 }}>
                  {this.state.path_files == "NO" && (
                    <div>
                      <input
                        type="file"
                        name="file"
                        onChange={this.handleFileChange}
                      />

                      <MDBBtn color="secondary" onClick={this.handleUpload}>
                        อัพโหลดไฟล์ <MDBIcon icon="plus" className="ml-1" />
                      </MDBBtn>
                    </div>
                  )}
                  {this.state.path_files!="NO"  && (
                    <div>
                      <a
                        href={
                          "http://172.18.0.135:5001/fileview/" +
                          this.state.path_files
                        }
                        style={{ paddingTop: 20 }}
                      >
                        <MDBIcon icon="file-pdf" /> {this.props.match.params.id}
                      </a>
                      <MDBBtn size="md" color="danger">
                        ลบ
                        <MDBIcon icon="ban" className="ml-2" />
                      </MDBBtn>
                    </div>
                  )}
                </MDBCol>
              </MDBRow>
            </fieldset>

            <MDBRow
              style={{
                color: "#2f2f4a",
                margin: 30,
                marginBottom: 50,
                marginTop: 50
              }}
            >
              <MDBCol
                md="12"
                // className="text-center"
                style={{ padding: 0, paddingTop: 10 }}
              >
                <AppBar position="static">
                  <Tabs value={this.state.value} onChange={this.handleChange}>
                    <Tab
                      style={{
                        fontSize: 16,
                        fontFamily: "Prompt",
                        background: "#040040"
                      }}
                      label="เพิ่มสินค้า/จัดการสินค้า"
                    />
                    <Tab
                      style={{
                        fontSize: 16,
                        fontFamily: "Prompt",
                        background: "#040040"
                      }}
                      label="จัดการ Serial"
                    />
                    <Tab
                      style={{
                        fontSize: 16,
                        fontFamily: "Prompt",
                        background: "#040040"
                      }}
                      label="จำนวนเงินที่ส่งเคลม"
                    />
                    <Tab
                      style={{
                        fontSize: 16,
                        fontFamily: "Prompt",
                        background: "#040040"
                      }}
                      label="บันทึกจำนวนเงินที่ได้รับ"
                    />
                    <Tab
                      style={{
                        fontSize: 16,
                        fontFamily: "Prompt",
                        background: "#040040"
                      }}
                      label="Express / อัพโหลดไฟล์"
                    />
                  </Tabs>
                </AppBar>
                {this.state.value === 0 && (
                  <TabContainer>
                    <SnackbarProvider
                      maxSnack={3}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right"
                      }}
                    >
                      <Form1 />
                    </SnackbarProvider>
                  </TabContainer>
                )}
                {this.state.value === 1 && (
                  <TabContainer>
                    <SnackbarProvider
                      maxSnack={3}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right"
                      }}
                    >
                      <Form2 doc_id={this.props.match.params.id} />
                    </SnackbarProvider>
                  </TabContainer>
                )}
                {this.state.value === 2 && (
                  <TabContainer>
                    <SnackbarProvider
                      maxSnack={3}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right"
                      }}
                    >
                      <Form3 />
                    </SnackbarProvider>
                  </TabContainer>
                )}
                {this.state.value === 3 && (
                  <TabContainer>
                    <SnackbarProvider
                      maxSnack={3}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right"
                      }}
                    >
                      <Form4
                        style={{ marginTop: 0 }}
                        dataEdit={this.state.dataEdit}
                      />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </SnackbarProvider>
                  </TabContainer>
                )}
                {this.state.value === 4 && (
                  <TabContainer>
                    <SnackbarProvider
                      maxSnack={3}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right"
                      }}
                    >
                      <Form5 />
                    </SnackbarProvider>
                  </TabContainer>
                )}
              </MDBCol>
            </MDBRow>
            <br />
            <br />
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}

export default withSnackbar(Editp_page);
