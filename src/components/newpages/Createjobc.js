import React, { Component } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Select from "react-select";
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

import AntSwitch from "@material-ui/core/Switch";
import { withSnackbar } from "notistack";
import ApiService from "../actions/apidataCreate";
import AuthService from "../authlogin/AuthService";
import Datetime1 from "./datetime1.tsx";
import Indexjobc from "./indexjobp.tsx";

const orderOptions = values => {
  return values.filter(v => v.isFixed).concat(values.filter(v => !v.isFixed));
};

class createJobc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 0,
      addPopCn: false,
      addPopCnl: false,
      typedata: [],
      val_holding: 3,
      txt_holding: "หัก ณ ที่จ่าย 3%",
      typenameselect: "เลือกประเภทเอกสาร",
      // typenameselect: "CNL",
      dateselect1: this.getDatenow(),
      use_cn_txt: "ใช้เป็น CN ลดหนี้",
      category_select:[],
      band_select:[],
      use_cn_val: 1,
      txt_saveraidai: "",
      txt_nosaveraidai: "",
      bandlist: [],
      remark_log: "",
      categorylist: [],
      supplier: [],
      code_invoice: "",
      reseive_orderno: "",
      cntype_text: "เลือกประเภท",
      cntype_value:"0",
      remark_text: "เลือกอ้างอิง",
      remark_value: "0",
      money_bfv: "",
      holding: "",
      system_money: "",
      system_money2: "",
      discount: "",
      mess1: "",
      checkedVat: false,
      checkedVattype: false,
      holdingCheck: false,
      pay_condition: "",
      cn_no:"",
      files:"",
      txt_express:"",
      txt_fs:"",
      incenno_condition:"",

    };
    this.ApiCall = new ApiService();
    this.toggle = this.toggle.bind(this);
    this.searchType = this.searchType.bind(this);
    this.setValueddl = this.setValueddl.bind(this);
    this.setValueddl3 = this.setValueddl3.bind(this);
    this.setValueddl4 = this.setValueddl4.bind(this);
    this.setValueddl_lodnee = this.setValueddl_lodnee.bind(this);
    this.setValueddl_holding = this.setValueddl_holding.bind(this);
    this.Updatedata = this.Updatedata.bind(this);
    this.getDatenow = this.getDatenow.bind(this);
    this.handleCheckedVat = this.handleCheckedVat.bind(this);
    this.handleCheckedVattype = this.handleCheckedVattype.bind(this);
    this.searchCateBrand = this.searchCateBrand.bind(this);
    this.onChangeDDlcate = this.onChangeDDlcate.bind(this);
    this.searchBrand = this.searchBrand.bind(this);
    this.onChangeDDlband = this.onChangeDDlband.bind(this);
    this.confirm_cn = this.confirm_cn.bind(this);
    this.confirm_cnl = this.confirm_cnl.bind(this);
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
    }
  }
  toggle() {
    if (this.state.typenameselect == "เลือกประเภทเอกสาร") {
      this.props.enqueueSnackbar("เลือกประเภทเอกสาร ด้วยค่ะ...", {
        variant: "warning"
      });
    } else if (this.state.typenameselect == "CN") {
      this.setState({
        addPopCn: !this.state.addPopCn
      });
    } else {
      this.setState({
        addPopCnl: !this.state.addPopCnl
      });
    }
  }
  handleCheckedVat() {
    this.setState(
      {
        checkedVat: !this.state.checkedVat
      },
      () => {}
    );
  }
  handleCheckedVattype() {
    this.setState(
      {
        checkedVattype: !this.state.checkedVattype
      },
      () => {}
    );
  }
  componentDidMount() {
    this.searchType();
    this.searchCateBrand();
  }
  searchType() {
    this.ApiCall.getType("C")
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
  onChangeDDlcate(value) {
    this.setState({ category_select: value }, () => {
      this.searchBrand(this.state.category_select.value);
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
    this.setState({ band_select: value }, () => {});
  }
  setValueddl(label) {
    this.setState(
      {
        typenameselect: label.target.value
      },
      () => {}
    );
  }
  setValueddl3(label) {
    this.setState(
      {
        cntype_text: label.target.name,
        cntype_value: label.target.value,
      },
      () => {}
    );
  }
  setValueddl4(label) {
    this.setState(
      {
        remark_text: label.target.name,
        remark_value: label.target.value,
      },
      () => {}
    );
  }
  setValueddl_lodnee(label) {
    this.setState(
      {
        use_cn_val: label.target.value,
        use_cn_txt: label.target.name
      },
      () => {}
    );
  }
  setValueddl_holding(label) {
    this.setState(
      {
        val_holding: label.target.value,
        txt_holding: label.target.name
      },
      () => {}
    );
  }
  confirm_cn() {
    var data_json = Array();
    data_json = {
      day_job:this.state.dateselect1,
      category:this.state.category_select,
      brand:this.state.band_select,
      invoice:this.state.code_invoice,
      cn_sup_no:this.state.cn_no,
      cn_sup_type:this.state.cntype_value,
      cn_ref:this.state.remark_value,
      cn_ref_other:this.state.remark_log,
      files:this.state.files,
      incenno_condition:this.state.incenno_condition,
      pay_condition:this.state.pay_condition,
      money_bfv:this.state.money_bfv,
      vat_con:this.state.checkedVat,
      holding:this.state.val_holding,
      holding_value:this.state.holding,
      discount:this.state.discount,
      checkedVattype:this.state.checkedVattype,
      system_money:this.state.system_money,
      reduction : this.state.use_cn_val,
      txt_nosaveraidai:this.state.txt_nosaveraidai,
      txt_saveraidai:this.state.txt_saveraidai,
      fs_no:this.state.txt_fs,
      express_no:this.state.txt_express,
      reseive_orderno:this.state.reseive_orderno

    };
    console.log(data_json);
  }
  confirm_cnl() {
    var data_json = Array();
    data_json = {
      day_job:this.state.dateselect1,
      category:this.state.category_select,
      brand:this.state.band_select,
      invoice:this.state.code_invoice,
      cn_sup_no:this.state.cn_no,
      cn_sup_type:this.state.cntype_value,
      cn_ref:this.state.remark_value,
      cn_ref_other:this.state.remark_log,
      files:this.state.files,
      incenno_condition:this.state.incenno_condition,
      pay_condition:this.state.pay_condition,
      money_bfv:this.state.money_bfv,
      vat_con:this.state.checkedVat,
      holding:this.state.val_holding,
      holding_value:this.state.holding,
      discount:this.state.discount,
      checkedVattype:this.state.checkedVattype,
      system_money:this.state.system_money,
      reduction : this.state.use_cn_val,
      txt_nosaveraidai:this.state.txt_nosaveraidai,
      txt_saveraidai:this.state.txt_saveraidai,
      fs_no:this.state.txt_fs,
      express_no:this.state.txt_express,
      reseive_orderno:this.state.reseive_orderno

    };
    console.log(data_json);
  }
  render() {
    const { completed } = this.state;
    const listtype = this.state.typedata.map(rowdata => (
      <MDBDropdownItem onClick={this.setValueddl} value={rowdata.type_name}>
        {rowdata.type_name}
      </MDBDropdownItem>
    ));

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
                      &nbsp;รายการเอกสาร INCENTIVE ( CN && CNL )
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
                  <Grid item lg={8} xl={8} xs={8} sm={8} md={8}>
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
                    <MDBBtn color="deep-purple">
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
                    <Indexjobc />
                  </Grid>
                </Grid>
              </div>
            </div>
          </MDBCol>
        </MDBRow>

        {/* CNJOB */}
        <MDBModal isOpen={this.state.addPopCn} size="xl">
          <MDBModalHeader toggle={this.toggle}>
            <MDBIcon icon="book-open" size="1x" className="green-text pr-3" />{" "}
            สร้างเอกสารประเภท
            <k style={{ color: "#2f2f4a" }}> {this.state.typenameselect}</k>
          </MDBModalHeader>
          <MDBModalBody style={{ overlfow: "scroll" }}>
            <MDBContainer fluid>
              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>วันที่เอกสาร</h5>
                </MDBCol>
                <MDBCol md="3">
                  <Datetime1 Updatedata={this.Updatedata} type={1} />
                </MDBCol>
                <MDBCol md="1"></MDBCol>
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
                      name="colors"
                      options={this.state.categorylist}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      style={{ padding: 0, marginTop: 0, marginBottom: 0 }}
                      onChange={this.onChangeDDlcate}
                    />
                  </k>
                </MDBCol>
                <MDBCol md="1" style={{ padding: 0, paddingTop: 10 }}>
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
                  <h5 style={{ color: "green", fontSize: 14 }}>INVOICE</h5>
                </MDBCol>
                <MDBCol md="5">
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.code_invoice}
                    onChange={event =>
                      this.setState(
                        { code_invoice: event.target.value },
                        () => {}
                      )
                    }
                  />
                </MDBCol>
                <MDBCol md="1"></MDBCol>
              </MDBRow>
              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>
                    เลขที่ CN (จากซับ)
                  </h5>
                </MDBCol>
                <MDBCol md="3">
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.cn_no}
                    onChange={event =>
                      this.setState({ cn_no: event.target.value }, () => {})
                    }
                  />
                </MDBCol>
                <MDBCol md="1"></MDBCol>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>ประเภท CN</h5>
                </MDBCol>
                <MDBCol md="3">
                  <MDBBtnGroup>
                    <MDBDropdown>
                      <MDBDropdownToggle
                        caret
                        color="blue-grey"
                        className="h-100"
                      >
                        {this.state.cntype_text}
                      </MDBDropdownToggle>
                      <MDBDropdownMenu basic color="blue-grey">
                        <MDBDropdownItem
                          onClick={this.setValueddl3}
                          value={1}
                          name={"เงินสด"}
                        >
                          เงินสด
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl3}
                          value={2}
                          name={"เงินโอน"}
                        >
                          เงินโอน
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl3}
                          value={3}
                          name={"เช็ค"}
                        >
                          เช็ค
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl3}
                          value={4}
                          name={"ใบลดหนี้"}
                        >
                          ใบลดหนี้
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl3}
                          value={5}
                          name={"สินค้า"}
                        >
                          สินค้า
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl3}
                          value={6}
                          name={"Voucher"}
                        >
                          Voucher
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl3}
                          value={7}
                          name={"ส่วนลดสินค้า"}
                        >
                          ส่วนลดสินค้า
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl3}
                          value={8}
                          name={"ทองคำ"}
                        >
                          ทองคำ
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl3}
                          value={9}
                          name={"อื่นๆ"}
                        >
                          อื่นๆ
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBBtnGroup>
                </MDBCol>
                <MDBCol md="1"></MDBCol>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>อ้างอิง</h5>
                </MDBCol>
                <MDBCol md="2">
                  <MDBBtnGroup>
                    <MDBDropdown>
                      <MDBDropdownToggle
                        caret
                        color="blue-grey"
                        className="h-100"
                      >
                        {this.state.remark_text}
                      </MDBDropdownToggle>
                      <MDBDropdownMenu basic color="blue-grey">
                        <MDBDropdownItem
                          onClick={this.setValueddl4}
                          value={1}
                          name={"คืนสินค้า"}
                        >
                          คืนสินค้า
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl4}
                          value={2}
                          name={"INCENTIVE"}
                        >
                          INCENTIVE
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl4}
                          value={3}
                          name={"CLAIM"}
                        >
                          CLAIM
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl4}
                          value={4}
                          name={"ของแถม"}
                        >
                          ของแถม
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl4}
                          value={5}
                          name={"คูปองน้ำมัน"}
                        >
                          คูปองน้ำมัน
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl4}
                          value={6}
                          name={"ส่วนลดสินค้า"}
                        >
                          ส่วนลดสินค้า
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl4}
                          value={7}
                          name={"อื่นๆ"}
                        >
                          อื่นๆ
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBBtnGroup>
                </MDBCol>
                <MDBCol md="3" style={{ paddingTop: 5 }}>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.remark_log}
                    onChange={event =>
                      this.setState(
                        { remark_log: event.target.value },
                        () => {}
                      )
                    }
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow style={{ color: "#2f2f4a", padding: 5, paddingTop: 25 }}>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>
                    อัพโหลดไฟล์อ้างอิง
                  </h5>
                </MDBCol>
                <MDBCol md="3">
                  <input type="file" />
                </MDBCol>
                <MDBCol md="1"></MDBCol>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>
                    เลขที่ PC | NB | MK
                  </h5>
                </MDBCol>
                <MDBCol md="4">
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.incenno_condition}
                    onChange={event =>
                      this.setState(
                        { incenno_condition: event.target.value },
                        () => {}
                      )
                    }
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>
                    เงื่อนไขการชำระเงิน
                  </h5>
                </MDBCol>
                <MDBCol md="10">
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.pay_condition}
                    onChange={event =>
                      this.setState(
                        { pay_condition: event.target.value },
                        () => {}
                      )
                    }
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>
                    จำนวนเงินก่อน VAT
                  </h5>
                </MDBCol>
                <MDBCol md="2">
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.money_bfv}
                    onChange={event => {
                      this.setState(
                        { money_bfv: event.target.value },
                        () => {}
                      );
                    }}
                  />
                </MDBCol>
                <MDBCol md="3">
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
                          ไม่มี VAT
                        </k>
                      </Grid>
                      <Grid item>
                        <AntSwitch
                          checked={this.state.checkedVat}
                          onChange={this.handleCheckedVat}
                          value={this.state.checkedVat}
                        />
                      </Grid>
                      <Grid item>
                        <k
                          style={{
                            fontFamily: "Prompt"
                          }}
                        >
                          มี VAT
                        </k>
                      </Grid>
                    </Grid>
                  </Typography>
                </MDBCol>

                <MDBCol md="3">
                  <MDBBtnGroup>
                    <MDBDropdown>
                      <MDBDropdownToggle
                        caret
                        color="blue-grey"
                        className="h-100"
                      >
                        {this.state.txt_holding}
                      </MDBDropdownToggle>
                      <MDBDropdownMenu basic color="blue-grey">
                        <MDBDropdownItem
                          onClick={this.setValueddl_holding}
                          value={1}
                          name={"หัก ณ ที่จ่าย 1 %"}
                        >
                          หัก ณ ที่จ่าย 1 %
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl_holding}
                          value={2}
                          name={"หัก ณ ที่จ่าย 2 %"}
                        >
                          หัก ณ ที่จ่าย 2 %
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl_holding}
                          value={3}
                          name={"หัก ณ ที่จ่าย 3 %"}
                        >
                          หัก ณ ที่จ่าย 3 %
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl_holding}
                          value={4}
                          name={"หัก ณ ที่จ่าย 4 %"}
                        >
                          หัก ณ ที่จ่าย 4 %
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl_holding}
                          value={5}
                          name={"หัก ณ ที่จ่าย 5 %"}
                        >
                          หัก ณ ที่จ่าย 5 %
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBBtnGroup>
                </MDBCol>
                <MDBCol md="2">
                  {" "}
                  <input
                    type="text"
                    readOnly={true}
                    className="form-control"
                    value={this.state.holding}
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>ส่วนลด(บาท)</h5>
                </MDBCol>
                <MDBCol md="3">
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.discount}
                    onChange={event => {
                      this.setState({ discount: event.target.value }, () => {});
                    }}
                  />
                </MDBCol>

                <MDBCol md="3">
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
                          ก่อนหัก
                        </k>
                      </Grid>
                      <Grid item>
                        <AntSwitch
                          checked={this.state.checkedVattype}
                          onChange={this.handleCheckedVattype}
                          value={this.state.checkedVattype}
                        />
                      </Grid>
                      <Grid item>
                        <k
                          style={{
                            fontFamily: "Prompt"
                          }}
                        >
                          หลังหัก
                        </k>
                      </Grid>
                    </Grid>
                  </Typography>
                </MDBCol>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>
                    จำนวนเงินในระบบ
                  </h5>
                </MDBCol>
                <MDBCol md="2">
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.system_money}
                    onChange={event => {
                      this.setState(
                        { system_money: event.target.value },
                        () => {}
                      );
                    }}
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol md="2"></MDBCol>
                <MDBCol md="3">
                  <MDBBtnGroup>
                    <MDBDropdown>
                      <MDBDropdownToggle
                        caret
                        color="blue-grey"
                        className="h-100"
                      >
                        {this.state.use_cn_txt}
                      </MDBDropdownToggle>
                      <MDBDropdownMenu basic color="blue-grey">
                        <MDBDropdownItem
                          onClick={this.setValueddl_lodnee}
                          value={1}
                          name={"ใช้เป็น CN ลดหนี้"}
                        >
                          ใช้เป็น CN ลดหนี้
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl_lodnee}
                          value={2}
                          name={"ไม่ใช้เป็น CN ลดหนี้"}
                        >
                          ไม่ใช้เป็น CN ลดหนี้
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBBtnGroup>
                </MDBCol>
                <MDBCol md="1"></MDBCol>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>
                    บันทึกเป็นรายได้จำนวน
                  </h5>
                </MDBCol>
                <MDBCol md="3">
                  {" "}
                  <input
                    type="text"
                    readOnly={false}
                    className="form-control"
                    value={this.state.txt_saveraidai}
                    onChange={event => {
                      this.setState({ txt_saveraidai: event.target.value }, () => {});
                    }}
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol md="5"></MDBCol>
                <MDBCol md="1"></MDBCol>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>
                    ไม่บันทึกเป็นรายได้จำนวน
                  </h5>
                </MDBCol>
                <MDBCol md="3">
                  {" "}
                  <input
                    type="text"
                    readOnly={false}
                    className="form-control"
                    value={this.state.txt_nosaveraidai}
                    onChange={event => {
                      this.setState({ txt_nosaveraidai: event.target.value }, () => {});
                    }}
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "#000200", fontSize: 14 }}>
                    เลขที่อนุมัติ FS
                  </h5>
                </MDBCol>
                <MDBCol md="3">
                  {" "}
                  <input
                    type="text"
                    readOnly={false}
                    className="form-control"
                    value={this.state.txt_fs}
                    onChange={event => {
                      this.setState({ txt_fs: event.target.value }, () => {});
                    }}
                  />
                </MDBCol>
                <MDBCol md="1"></MDBCol>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "#000200", fontSize: 14 }}>
                    เลขที่ Express
                  </h5>
                </MDBCol>
                <MDBCol md="4">
                  {" "}
                  <input
                    type="text"
                    readOnly={false}
                    className="form-control"
                    value={this.state.txt_express}
                    onChange={event => {
                      this.setState(
                        { txt_express: event.target.value },
                        () => {}
                      );
                    }}
                  />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="deep-orange" onClick={this.toggle}>
              <MDBIcon icon="reply" className="ml-1" /> ยกเลิก
            </MDBBtn>
            <MDBBtn color="deep-purple" onClick={this.confirm_cn}>
              <MDBIcon icon="save" className="ml-1" /> บันทึก เอกสาร
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>

        {/* CNL JOB */}

        {/* ----------------------------------------------------------------- */}
        {/* CNJOB */}
        <MDBModal isOpen={this.state.addPopCnl} size="xl">
          <MDBModalHeader toggle={this.toggle}>
            <MDBIcon icon="book-open" size="1x" className="green-text pr-3" />{" "}
            สร้างเอกสารประเภท
            <k style={{ color: "#2f2f4a" }}> {this.state.typenameselect}</k>
          </MDBModalHeader>
          <MDBModalBody style={{ overlfow: "scroll" }}>
            <MDBContainer fluid>
              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>วันที่เอกสาร</h5>
                </MDBCol>
                <MDBCol md="3">
                  <Datetime1 Updatedata={this.Updatedata} type={1} />
                </MDBCol>
                <MDBCol md="1"></MDBCol>
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
                      name="colors"
                      options={this.state.categorylist}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      style={{ padding: 0, marginTop: 0, marginBottom: 0 }}
                      onChange={this.onChangeDDlcate}
                    />
                  </k>
                </MDBCol>
                <MDBCol md="1" style={{ padding: 0, paddingTop: 10 }}>
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
                  <h5 style={{ color: "green", fontSize: 14 }}>INVOICE</h5>
                </MDBCol>
                <MDBCol md="3">
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.code_invoice}
                    onChange={event =>
                      this.setState(
                        { code_invoice: event.target.value },
                        () => {}
                      )
                    }
                  />
                </MDBCol>
                <MDBCol md="1"></MDBCol>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>
                    อ้างถึงใบสำคัญรับสินค้าเลขที่
                  </h5>
                </MDBCol>
                <MDBCol md="4">
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.reseive_orderno}
                    onChange={event =>
                      this.setState(
                        { reseive_orderno: event.target.value },
                        () => {}
                      )
                    }
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>
                    เลขที่ CN (ซับ)
                  </h5>
                </MDBCol>
                <MDBCol md="3">
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.cn_no}
                    onChange={event =>
                      this.setState({ cn_no: event.target.value }, () => {})
                    }
                  />
                </MDBCol>
                <MDBCol md="1"></MDBCol>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>ประเภท CN </h5>
                </MDBCol>
                <MDBCol md="3">
                  <MDBBtnGroup>
                    <MDBDropdown>
                      <MDBDropdownToggle
                        caret
                        color="blue-grey"
                        className="h-100"
                      >
                        {this.state.cntype_text}
                      </MDBDropdownToggle>
                      <MDBDropdownMenu basic color="blue-grey">
                        <MDBDropdownItem
                          onClick={this.setValueddl3}
                          value={1}
                          name={"เงินสด"}
                        >
                          เงินสด
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl3}
                          value={2}
                          name={"เงินโอน"}
                        >
                          เงินโอน
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl3}
                          value={3}
                          name={"เช็ค"}
                        >
                          เช็ค
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl3}
                          value={4}
                          name={"ใบลดหนี้"}
                        >
                          ใบลดหนี้
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl3}
                          value={5}
                          name={"สินค้า"}
                        >
                          สินค้า
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl3}
                          value={6}
                          name={"Voucher"}
                        >
                          Voucher
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl3}
                          value={7}
                          name={"ส่วนลดสินค้า"}
                        >
                          ส่วนลดสินค้า
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl3}
                          value={8}
                          name={"ทองคำ"}
                        >
                          ทองคำ
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl3}
                          value={9}
                          name={"อื่นๆ"}
                        >
                          อื่นๆ
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBBtnGroup>
                </MDBCol>
              </MDBRow>
              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>อ้างอิง</h5>
                </MDBCol>
                <MDBCol md="2">
                  <MDBBtnGroup>
                    <MDBDropdown>
                      <MDBDropdownToggle
                        caret
                        color="blue-grey"
                        className="h-100"
                      >
                        {this.state.remark_text}
                      </MDBDropdownToggle>
                      <MDBDropdownMenu basic color="blue-grey">
                        <MDBDropdownItem
                          onClick={this.setValueddl4}
                          value={1}
                          name={"คืนสินค้า"}
                        >
                          คืนสินค้า
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl4}
                          value={2}
                          name={"INCENTIVE"}
                        >
                          INCENTIVE
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl4}
                          value={3}
                          name={"CLAIM"}
                        >
                          CLAIM
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl4}
                          value={4}
                          name={"ของแถม"}
                        >
                          ของแถม
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl4}
                          value={5}
                          name={"คูปองน้ำมัน"}
                        >
                          คูปองน้ำมัน
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl4}
                          value={6}
                          name={"ส่วนลดสินค้า"}
                        >
                          ส่วนลดสินค้า
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl4}
                          value={7}
                          name={"อื่นๆ"}
                        >
                          อื่นๆ
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBBtnGroup>
                </MDBCol>
                <MDBCol md="4" style={{ marginTop: 5 }}>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.remark_log}
                    onChange={event =>
                      this.setState(
                        { remark_log: event.target.value },
                        () => {}
                      )
                    }
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow style={{ color: "#2f2f4a", padding: 5, paddingTop: 20 }}>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>
                    อัพโหลดไฟล์อ้างอิง
                  </h5>
                </MDBCol>
                <MDBCol md="3">
                  <input type="file" />
                </MDBCol>
                <MDBCol md="1"></MDBCol>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>
                    เลขที่ PC | NB | MK
                  </h5>
                </MDBCol>
                <MDBCol md="4">
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.incenno_condition}
                    onChange={event =>
                      this.setState(
                        { incenno_condition: event.target.value },
                        () => {}
                      )
                    }
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>
                    เงื่อนไขการชำระเงิน
                  </h5>
                </MDBCol>
                <MDBCol md="10">
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.pay_condition}
                    onChange={event =>
                      this.setState(
                        { pay_condition: event.target.value },
                        () => {}
                      )
                    }
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>
                    เงินที่ได้จากซับ
                  </h5>
                </MDBCol>
                <MDBCol md="3">
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.money_bfv}
                    onChange={event => {
                      this.setState(
                        { money_bfv: event.target.value },
                        () => {}
                      );
                    }}
                  />
                </MDBCol>
                <MDBCol md="3">
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
                          ไม่มี VAT
                        </k>
                      </Grid>
                      <Grid item>
                        <AntSwitch
                          checked={this.state.checkedVat}
                          onChange={this.handleCheckedVat}
                          value={this.state.checkedVat}
                        />
                      </Grid>
                      <Grid item>
                        <k
                          style={{
                            fontFamily: "Prompt"
                          }}
                        >
                          มี VAT
                        </k>
                      </Grid>
                    </Grid>
                  </Typography>
                </MDBCol>
              </MDBRow>
              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>ส่วนลด(บาท)</h5>
                </MDBCol>
                <MDBCol md="3">
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.discount}
                    onChange={event => {
                      this.setState({ discount: event.target.value }, () => {});
                    }}
                  />
                </MDBCol>

                <MDBCol md="1"></MDBCol>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>
                    เงินที่จ่ายให้ลูกค้า
                  </h5>
                </MDBCol>
                <MDBCol md="3">
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.emp_money}
                    onChange={event => {
                      this.setState(
                        { emp_money: event.target.value },
                        () => {}
                      );
                    }}
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>
                    จำนวนเงินในระบบ(กำไร)
                  </h5>
                </MDBCol>
                <MDBCol md="3">
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.system_money}
                    onChange={event => {
                      this.setState(
                        { system_money: event.target.value },
                        () => {}
                      );
                    }}
                  />
                </MDBCol>
                <MDBCol md="1"></MDBCol>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>
                    จำนวนเงินในระบบ(ขาดทุน)
                  </h5>
                </MDBCol>
                <MDBCol md="3">
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.system_money2}
                    onChange={event => {
                      this.setState(
                        { system_money2: event.target.value },
                        () => {}
                      );
                    }}
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow style={{ color: "#2f2f4a", padding: 5, paddingTop: 10 }}>
                <MDBCol md="2"></MDBCol>
                <MDBCol md="3">
                  <MDBBtnGroup>
                    <MDBDropdown>
                      <MDBDropdownToggle
                        caret
                        color="blue-grey"
                        className="h-100"
                      >
                        {this.state.use_cn_txt}
                      </MDBDropdownToggle>
                      <MDBDropdownMenu basic color="blue-grey">
                        <MDBDropdownItem
                          onClick={this.setValueddl_lodnee}
                          value={1}
                          name={"ใช้เป็น CN ลดหนี้"}
                        >
                          ใช้เป็น CN ลดหนี้
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={this.setValueddl_lodnee}
                          value={2}
                          name={"ไม่ใช้เป็น CN ลดหนี้"}
                        >
                          ไม่ใช้เป็น CN ลดหนี้
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBBtnGroup>
                </MDBCol>
                <MDBCol md="1"></MDBCol>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>
                    บันทึกเป็นรายได้จำนวน
                  </h5>
                </MDBCol>
                <MDBCol md="3">
                  {" "}
                  <input
                    type="text"
                    readOnly={false}
                    className="form-control"
                    value={this.state.txt_saveraidai}
                    onChange={event => {
                      this.setState(
                        { txt_saveraidai: event.target.value },
                        () => {}
                      );
                    }}
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol md="5"></MDBCol>
                <MDBCol md="1"></MDBCol>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "green", fontSize: 14 }}>
                    ไม่บันทึกเป็นรายได้จำนวน
                  </h5>
                </MDBCol>
                <MDBCol md="3">
                  {" "}
                  <input
                    type="text"
                    readOnly={false}
                    className="form-control"
                    value={this.state.txt_nosaveraidai}
                    onChange={event => {
                      this.setState(
                        { txt_nosaveraidai: event.target.value },
                        () => {}
                      );
                    }}
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow style={{ color: "#2f2f4a", padding: 5 }}>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "#000200", fontSize: 14 }}>
                    เลขที่อนุมัติ FS
                  </h5>
                </MDBCol>
                <MDBCol md="3">
                  {" "}
                  <input
                    type="text"
                    readOnly={false}
                    className="form-control"
                    value={this.state.txt_fs}
                    onChange={event => {
                      this.setState({ txt_fs: event.target.value }, () => {});
                    }}
                  />
                </MDBCol>
                <MDBCol md="1"></MDBCol>
                <MDBCol md="2" style={{ padding: 0, paddingTop: 10 }}>
                  <h5 style={{ color: "#000200", fontSize: 14 }}>
                    เลขที่ Express
                  </h5>
                </MDBCol>
                <MDBCol md="4">
                  {" "}
                  <input
                    type="text"
                    readOnly={false}
                    className="form-control"
                    value={this.state.txt_express}
                    onChange={event => {
                      this.setState(
                        { txt_express: event.target.value },
                        () => {}
                      );
                    }}
                  />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="deep-orange" onClick={this.toggle}>
              <MDBIcon icon="reply" className="ml-1" /> ยกเลิก
            </MDBBtn>
            <MDBBtn color="deep-purple" onClick={this.confirm_cnl}>
              <MDBIcon icon="save" className="ml-1" /> บันทึก เอกสาร
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </div>
    );
  }
}
export default withSnackbar(createJobc);
