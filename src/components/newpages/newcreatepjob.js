import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Select from "react-select";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import { SnackbarProvider } from "notistack";
import {
  MDBIcon,
  MDBBtnGroup,
  MDBDropdown,
  MDBBtn,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import { withSnackbar } from "notistack";
// import Background from "../../assets/bg/BG-test2.jpg";
import ApiService from "../actions/apidataCreate";
import AuthService from "../authlogin/AuthService";
export default class newcreatePjob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 0,
      prodata:[],
      typenameselect:'เลือก Promotion',
      promotion:''

    };
    this.ApiCall = new ApiService();
    this.searchPro = this.searchPro.bind(this);
    this.setValueddl = this.setValueddl.bind(this);
    // this.toggleCreate = this.toggleCreate.bind(this);
  }
  componentDidMount() {
    this.searchPro();
  }

  searchPro() {
    this.ApiCall.getPromo(this.props.match.params.typename)
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

  setValueddl(label){
    // console.log(label.target.value)
    this.setState({
      typenameselect:label.target.name,
      promotion:label.target.value,
    })
  }

  render() {
    const { completed } = this.state;
    const listtype = this.state.prodata.map(rowdata => (
       <MDBDropdownItem onClick={this.setValueddl} value={rowdata.value} name={rowdata.label}>{rowdata.label}</MDBDropdownItem>

    ));

    return (
      <MDBRow>
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody
              style={{
                fontFamily: "Prompt",
                // backgroundImage: `url(${Background})`,
                backgroundSize: "stretch"
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
                      &nbsp;สร้างเอกสาร ( {this.props.match.params.typename} )
                    </h4>
                  </Grid>
                  
                  <Grid
                    item
                    lg={6}
                    xl={6}
                    xs={6}
                    sm={6}
                    md={6}
                    style={{ padding: 3, paddingLeft: 20 }}
                  >
                    <MDBBtnGroup>
                      <MDBDropdown>
                        <MDBDropdownToggle
                          caret
                          color="secondary"
                          className="h-100"
                        >
                          <MDBIcon icon="plus" className="ml-1" />{" "}
                          {this.state.typenameselect}
                        </MDBDropdownToggle>
                        <MDBDropdownMenu basic color="secondary">
                          &nbsp;&nbsp;&nbsp;{listtype}
                        </MDBDropdownMenu>
                      </MDBDropdown>
                    </MDBBtnGroup>
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
                  ></Grid>
                  <Grid
                    item
                    lg={7}
                    xl={7}
                    xs={7}
                    sm={7}
                    md={7}
                    style={{ paddingTop: 20 }}
                  >
                    {/* <h5 style={{ color: "rgba(140, 139, 139, 0.87)" }}>
                      PROMOTION{" "}
                      <k style={{ color: "green" }}>{this.state.typeSelect}</k>
                    </h5> */}
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
                    {/* <Type
                      updateGrid={this.updateGrid}
                      typedata={this.state.typedata}
                    /> */}
                  </Grid>
                  <Grid
                    item
                    lg={7}
                    xl={7}
                    xs={7}
                    sm={7}
                    md={7}
                    style={{ padding: 3 }}
                  ></Grid>
                </Grid>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }
}
