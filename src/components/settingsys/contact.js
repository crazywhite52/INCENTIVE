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
import Select from "react-select";
import Contact from "./contact.tsx";
//API connect
import ApiService from "../actions/apidata";
const orderOptions = values => {
  return values.filter(v => v.isFixed).concat(values.filter(v => !v.isFixed));
};
class conTact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 0,
      addtype: false,
      category:[],
      pmmaster:[],
      supplier:[],
      brand:[],
      category_select:'',
      sup_select:'',
      pm_select:'',
      brand_select:'',
      vender_name:'',
      vender_nickname:'',
      vender_tel:'',
      vender_email:'',
      contactnow:[]


    };
    this.ApiCall = new ApiService();
    this.toggle = this.toggle.bind(this);
    this.ddContactSearch = this.ddContactSearch.bind(this);
    this.onChangeDDlCTR = this.onChangeDDlCTR.bind(this);
    this.searchBrand = this.searchBrand.bind(this);
    this.onChangeDDlbrand = this.onChangeDDlbrand.bind(this);
    this.onChangeDDlsup = this.onChangeDDlsup.bind(this);
    this.onChangeDDlpm = this.onChangeDDlpm.bind(this);
    this.confirmContact = this.confirmContact.bind(this);
    this.showContactnow = this.showContactnow.bind(this);
    this.onUpdatedata = this.onUpdatedata.bind(this);
  }
  onUpdatedata(rowdata){
    let datasend = Array();
    datasend = {
      c_id: rowdata.id,
      status:rowdata.status
    };
    // console.log(datasend)
    this.ApiCall.updateContact(datasend)
      .then(res => {
        console.log(res);
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
  onChangeDDlCTR(value) {
    this.setState({category_select:value},()=>{
      this.searchBrand()
    })
  }
  onChangeDDlsup(value) {
    this.setState({sup_select:value},()=>{
      // this.searchBrand()
    })
  }
  onChangeDDlpm(value) {
    this.setState({pm_select:value},()=>{
      // this.searchBrand()
    })
  }
  onChangeDDlbrand(value, { action, removedValue }) {
    switch (action) {
      case "remove-value":
      case "pop-value":
        if (removedValue.isFixed) {
          return;
        }
        break;
      case "clear":
        value = this.state.category.filter(v => v.isFixed);
        break;
    }
    value = orderOptions(value);
      this.setState({ brand_select: value }, () => {
        // this.getDataContentFull();
      });
   
  }
  confirmContact(){
    let datasend=Array();
       
        if (
          this.state.vender_name == '' ||
          this.state.vender_nickname == '' ||
          this.state.pm_nickname == 0
        ) {
          this.props.enqueueSnackbar("ไม่สามารถบันทึกข้อมูลได้ ตรวจสอบข้อมูล??", {
            variant: "error"
          });
        } else {
          let datasend = Array();
          datasend={
            vender_name:this.state.vender_name,
            vender_nickname:this.state.vender_nickname,
            vender_tel:this.state.vender_tel,
            vender_email:this.state.vender_email,
            sup_select:this.state.sup_select,
            category_select:this.state.category_select,
            brand_select:this.state.brand_select,
            pm_select:this.state.pm_select
          }
          this.ApiCall.saveDataContact(datasend)
            .then(res => {
              if (res.success == true) {
                this.props.enqueueSnackbar("OK บันทึกข้อมูลได้  ??", {
                  variant: "success"
                });
                this.setState(
                  {
                    addtype: !this.state.addtype,
                   
                    category_select:'',
                    sup_select:'',
                    pm_select:'',
                    brand_select:'',
                    vender_name:'',
                    vender_nickname:'',
                    vender_tel:'',
                    vender_email:''
                  },
                  () => {
                    // this.searchSuplier();
                    this.showContactnow();
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

  searchBrand() {
    this.ApiCall.getDDlbrand(this.state.category_select.value)
    .then(res => {
      // console.log(res);
      if (res.success == true) {
        // console.log(res)
        this.setState({ brand: res.data });
      } else {
        console.log(res.message);
      }
    })
    .catch(error => {
      console.error(error.message);
    });
  }

  showContactnow() {
    this.ApiCall.showContactnow()
    .then(res => {
      // console.log(res);
      if (res.success == true) {
        // console.log(res)
        this.setState({ contactnow: res.data });
      } else {
        console.log(res.message);
      }
    })
    .catch(error => {
      console.error(error.message);
    });
  }
  
  toggle() {
    this.setState({
      addtype: !this.state.addtype
    });
  }
  componentDidMount(){
    this.ddContactSearch()
  }

  ddContactSearch(){
    this.ApiCall.getDDlcontact()
    .then(res => {
      // console.log(res);
      if (res.success == true) {
        // console.log(res)
        this.setState({ supplier: res.supplier,category:res.category,pmmaster:res.pmmaster },()=>{
          this.showContactnow()
        });
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
              &nbsp;กำหนด ผู้ติดต่อ (Vender Pm and Brand)
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
                this.toggle();
              }}
            >
              เพิ่มผู้ติดต่อใหม่ <MDBIcon icon="plus" className="ml-1" />
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
            <Contact contactnow={this.state.contactnow} onUpdatedata={this.onUpdatedata} />
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
            <MDBIcon icon="plus" className="ml-1" /> เพิ่มผู้ติดต่อใหม่
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
                  label="ชื่อ-นามสกุล (ผู้ติดต่อ)"
                  icon="address-book"
                  type="text"
                  value={this.state.vender_name}
                  onChange={event =>
                    this.setState({ vender_name: event.target.value }, () => {
                      // this.chkPmtatus();
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
                  label="ชื่อเล่น ('คุณ' title)"
                  icon="address-book"
                  type="text"
                  value={this.state.vender_nickname}
                  onChange={event =>
                    this.setState({ vender_nickname: event.target.value }, () => {
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
                  value={this.state.vender_tel}
                  onChange={event =>
                    this.setState({ vender_tel: event.target.value }, () => {
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
                  value={this.state.vender_email}
                  onChange={event =>
                    this.setState({ vender_email: event.target.value }, () => {
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
            <Grid
                item
                lg={2}
                xl={2}
                xs={2}
                sm={2}
                md={2}
                style={{ paddingTop:3, margin: 0 }}
              >Suplier</Grid>
              <Grid
                item
                lg={12}
                xl={12}
                xs={12}
                sm={12}
                md={12}
                style={{ paddingTop:3, margin: 0 }}
              >
                <Select
                  // defaultValue={[colourOptions[2], colourOptions[3]]}
                  // isMulti
                  name="colors"
                  options={this.state.supplier}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={this.onChangeDDlsup}
                />
              </Grid>
            <Grid
                item
                lg={2}
                xl={2}
                xs={2}
                sm={2}
                md={2}
                style={{ paddingTop:3, margin: 0 }}
              >สินค้า</Grid>
              <Grid
                item
                lg={12}
                xl={12}
                xs={12}
                sm={12}
                md={12}
                style={{ paddingTop:3, margin: 0 }}
              >
                <Select
                  // defaultValue={[colourOptions[2], colourOptions[3]]}
                  // isMulti
                  name="colors"
                  options={this.state.category}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={this.onChangeDDlCTR}
                />
              </Grid>
              <Grid
                item
                lg={2}
                xl={2}
                xs={2}
                sm={2}
                md={2}
                style={{ paddingTop:3, margin: 0 }}
              >แบนด์</Grid>
              <Grid
                item
                lg={12}
                xl={12}
                xs={12}
                sm={12}
                md={12}
                style={{ paddingTop:3, margin: 0 }}
              >
                <Select
                  // defaultValue={[colourOptions[2], colourOptions[3]]}
                  isMulti
                  name="colors"
                  options={this.state.brand}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={this.onChangeDDlbrand}
                />
              </Grid>
              <Grid
                item
                lg={2}
                xl={2}
                xs={2}
                sm={2}
                md={2}
                style={{ paddingTop:3, margin: 0 }}
              >จัดซื้อ</Grid>
              <Grid
                item
                lg={12}
                xl={12}
                xs={12}
                sm={12}
                md={12}
                style={{ paddingTop:3, margin: 0 }}
              >
                <Select
                  // defaultValue={[colourOptions[2], colourOptions[3]]}
                  // isMulti
                  name="colors"
                  options={this.state.pmmaster}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={this.onChangeDDlpm}
                />
              </Grid>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="warning" onClick={this.toggle}>
              ยกเลิก
            </MDBBtn>
            <MDBBtn color="primary" onClick={this.confirmContact}>
              บันทึกข้อมูล
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </div>
    );
  }
}

export default withSnackbar(conTact);