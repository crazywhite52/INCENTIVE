import React, { Component } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import LoadingOverlay from "react-loading-overlay";
import Typography from "@material-ui/core/Typography";
import Select from "react-select";
import axios from 'axios'
import {
    MDBIcon,
    MDBBtnGroup,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBContainer,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter,
    MDBListGroup,
    MDBListGroupItem,
} from "mdbreact";

import AntSwitch from "@material-ui/core/Switch";
import { withSnackbar } from "notistack";
import ApiService from "../actions/apidata";
import JqxGridmarket from "./jqxGrid/jqxGridmarket.tsx";

class Marketplace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: 0,
            load: false,
            DropdownName: "เลือก",
            ColorDropdown: "primary",
            Uploadfile: [],
            Uploadname: "เลือกไฟล์",
            Uploadvalue: "",
            data: [],
        };
        this.ApiCall = new ApiService()
        this.Dropdown = this.Dropdown.bind(this);
    }

    componentDidMount() {
        this.getmkp_DataCURDATE();
    }
    getUpload = (event) => {
        // console.log(event.target.files);
        if (event.target.files[0]) {
            this.setState({
                Uploadfile: event.target.files[0],
                Uploadname: event.target.files[0].name,
                Uploadvalue: event.target.value,
            }, () => {
                setTimeout(() => {
                    // this.uploadfile_mkp();
                    // console.log(this.state.Uploadfile);
                    // console.log(this.state.Uploadname);
                    console.log(this.state.Uploadvalue);
                }, 1000);
            });
        } else {
            console.log(0);
        }
    }
    uploadfile_mkp = () => {
        if (this.state.DropdownName == "เลือก") {
            this.props.enqueueSnackbar("กรุณาเลือก sub!", { variant: "error" })
        } else {
            this.setState({ load: !this.state.load });
            const data = new FormData();
            data.append("filesupload", this.state.Uploadfile);
            data.append("Marketplace", this.state.DropdownName);
            axios
                .post("http://172.18.0.135:5001/rebate/upload/uploadfile_mkp", data)
                .then((response) => {
                    // console.log(response.data);
                    if (response.data.status === true) {
                        this.setState({
                            data: response.data.results,
                        }, () => {
                            this.props.enqueueSnackbar("อัพโหลดไฟล์สำเร็จ!", { variant: "success" })                            
                            setTimeout(() => { window.location.reload(); }, 1000);
                        });
                    } else {
                        this.props.enqueueSnackbar("กรุณาเลือกไฟล์!", { variant: "error" })
                        setTimeout(() => { this.setState({ load: !this.state.load }); }, 2000);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    setTimeout(() => { this.setState({ load: !this.state.load }); }, 2000);
                });
        }
    }
    getmkp_DataCURDATE() {//แก้เป็น axios เหมือน uploadfile_mkp()
        this.setState({ load: !this.state.load });
        this.ApiCall.getmkp_DataCURDATE()
            .then(res => {
                // console.log(res);                
                if (res.status == true) {
                    if (res.results == "") {
                        setTimeout(() => {
                            this.props.enqueueSnackbar("ไม่พบข้อมูลในวันนี้", { variant: "warning" });
                            this.setState({ load: !this.state.load });
                        }, 2000);
                    } else {
                        this.setState({
                            data: res.results,
                        }, () => {
                            setTimeout(() => { this.setState({ load: !this.state.load }); }, 1000);
                        });
                    }
                } else {
                    setTimeout(() => { this.setState({ load: !this.state.load }); }, 2000);
                }
            });
    }
    Dropdown(event) {
        let selectvalue = event.target.value
        this.setState({ DropdownName: selectvalue }, () => { });
        if (selectvalue == 'Shopee') {
            this.setState({ ColorDropdown: "deep-orange" })
        } else if (selectvalue == 'Lazada') {
            this.setState({ ColorDropdown: "red darken-3" })
        } else if (selectvalue == 'JD') {
            this.setState({ ColorDropdown: "yellow accent-4" })
        }
    }
    render() {

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
                                    <Grid item lg={12} xl={12} xs={12} sm={12} md={12} style={{ padding: 0 }} />
                                    <Grid item lg={12} xl={12} xs={12} sm={12} md={12} style={{ padding: 3, paddingLeft: 20 }}>
                                        <h4 style={{ color: "green" }}><br />
                                            <MDBIcon icon="clipboard" className="cyan-text pr-3" />&nbsp;Marketplace
                                        </h4>
                                    </Grid>
                                    <Grid item lg={12} xl={12} xs={12} sm={12} md={12} style={{ padding: 3 }}>
                                        <LinearProgress
                                            color="secondary"
                                            variant="determinate"
                                            value={this.state.completed}
                                        />
                                        <hr />
                                    </Grid>

                                    {/* <div style={{ width }}> */}
                                    <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3, textAlign: "center" }}>
                                        <MDBDropdown>
                                            <MDBDropdownToggle caret color={this.state.ColorDropdown}>{this.state.DropdownName}&nbsp;&nbsp;&nbsp;</MDBDropdownToggle>
                                            {/* <div onChange={this.Dropdown.bind(this)}> */}
                                            <MDBDropdownMenu basic>
                                                <MDBDropdownItem value="Shopee" onClick={this.Dropdown}>Shopee</MDBDropdownItem>
                                                <MDBDropdownItem divider />
                                                <MDBDropdownItem value="Lazada" onClick={this.Dropdown}>Lazada</MDBDropdownItem>
                                                <MDBDropdownItem divider />
                                                <MDBDropdownItem value="JD" onClick={this.Dropdown}>JD</MDBDropdownItem>
                                            </MDBDropdownMenu>
                                            {/* </div> */}
                                        </MDBDropdown>
                                    </Grid>
                                    <Grid item lg={6} xl={6} xs={6} sm={6} md={6}>
                                        <div className="input-group">
                                            <text></text>
                                            {/* <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroupFileAddon01">อัพโหลด[Excel]</span>
                                            </div> */}
                                            <div className="custom-file">
                                                <input
                                                    type="file"
                                                    value={this.state.Uploadvalue}
                                                    className="custom-file-input"
                                                    id="inputGroupFile01"
                                                    aria-describedby="inputGroupFileAddon01"
                                                    onChange={this.getUpload}
                                                />
                                                <label className="custom-file-label" htmlFor="inputGroupFile01">
                                                    {this.state.Uploadname}
                                                </label>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item lg={4} xl={4} xs={4} sm={4} md={4} style={{ padding: 3, textAlign: "center" }}>
                                        <MDBBtn
                                            color="deep-purple"
                                            onClick={this.uploadfile_mkp}
                                        >
                                            อัพโหลดไฟล์ <MDBIcon icon="cloud-upload-alt" className="ml-1" />
                                        </MDBBtn>
                                    </Grid>
                                    <Grid item lg={12} xl={12} xs={12} sm={12} md={12} style={{ paddingTop: 20 }}>
                                        <LoadingOverlay
                                            active={this.state.load}
                                            spinner
                                            text=' กำลังโหลด...'
                                        >
                                            <JqxGridmarket data={this.state.data} />
                                        </LoadingOverlay>
                                    </Grid>
                                    {/* <Grid item lg={12} xl={12} xs={12} sm={12} md={12} style={{ paddingTop: 20 }}>
                                        <MDBListGroup style={{ width: "22rem" }}>
                                            <MDBListGroupItem href="#" active={true} hover>
                                                <div className="d-flex w-100 justify-content-between">
                                                    <h5 className="mb-1">List group item heading</h5>
                                                </div>
                                                <small>Donec id elit non mi porta.</small>
                                            </MDBListGroupItem>
                                            <MDBListGroupItem href="#" hover active={true}>
                                                <div className="d-flex w-100 justify-content-between">
                                                    <h5 className="mb-1">List group item heading</h5>
                                                </div>
                                                <small className="text-muted">Donec id elit non mi porta.</small>
                                            </MDBListGroupItem>
                                            <MDBListGroupItem href="#" hover active={true}>
                                                <div className="d-flex w-100 justify-content-between">
                                                    <h5 className="mb-1">List group item heading</h5>
                                                </div>
                                                <small className="text-muted">Donec id elit non mi porta.</small>
                                            </MDBListGroupItem>
                                        </MDBListGroup>
                                    </Grid> */}
                                </Grid>
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow>
            </div >
        );
    }
}
export default withSnackbar(Marketplace);
