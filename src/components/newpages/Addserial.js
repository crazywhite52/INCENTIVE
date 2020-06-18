import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import { TextInput } from "grommet";
import { withSnackbar } from "notistack";
import axios from "axios";
import LoadingOverlay from "react-loading-overlay";
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
import Serial from "./serial.tsx";
//API connect
import ApiService from "../actions/apidata";
class Addserial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 0,
      selectedFile: null,
      active: true,
      Serialdata:[]
    };
    this.ApiCall = new ApiService();
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.Searchserial = this.Searchserial.bind(this);
  }
  componentDidMount(){
    this.Searchserial()
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
  Searchserial(){
    this.ApiCall.callSerial(this.props.doc_id)
      .then(res => {
        if (res.success == true) {
          // console.log(res.data)
          this.setState({ Serialdata: res.data, active: false });
        } else {
          console.log(res.message);
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }
  handleUpload(){
    let currentComponent = this;
    this.setState({
      active:true
    })
    const data = new FormData();
    data.append("filesupload", this.state.selectedFile);
    data.append("incentive", this.props.doc_id);
    axios
      .post("http://172.18.0.135:5001/rebate/upload/uploadfile_serial", data)
      .then(function(response) {
        // console.log(response.data);
        currentComponent.Searchserial()
        // currentComponent.setState({
        //   active:false
        // })
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    const { completed } = this.state;
    return (
      <div>
       
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
                  &nbsp;UPLOAD SERIAL {this.props.doc_id}
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
                {/* <MDBBtn
              color="success"
              onClick={() => {
                // this.setBoxnow();
                // this.toggle();
              }}
            >
              บันทึกข้อมูล <MDBIcon icon="save" className="ml-1" />
            </MDBBtn> */}
                <input
                  type="file"
                  name="file"
                  
                  onChange={this.handleFileChange}
                />
                {/* <button >Upload</button> */}
                <MDBBtn color="secondary" onClick={this.handleUpload}>
                  อัพโหลดไฟล์ <MDBIcon icon="plus" className="ml-1" />
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
               <LoadingOverlay  active={this.state.active} spinner text="กำลังอัพโหลด...">
                <Serial Serialdata={this.state.Serialdata} />
                </LoadingOverlay>
              </Grid>
            </Grid>
          </div>
        
      </div>
    );
  }
}
export default withSnackbar(Addserial);
