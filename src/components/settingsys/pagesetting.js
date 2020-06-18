import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { SnackbarProvider } from "notistack";
import Form1 from "./incenType";
import Form2 from "./supplier";
import Form3 from "./category";
import Form4 from "./pmanager";
import Form5 from "./contact";
import { withSnackbar } from "notistack";
// import Background from "../../assets/bg/BG-test2.jpg";
import ApiService from "../actions/apidata";
import AuthService from "../authlogin/AuthService";
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
class Pagesetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    // this.getRoutetitle = this.getRoutetitle.bind(this);
    this.Auth = new AuthService();
    this.ApiCall = new ApiService();
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };
  componentDidMount(){
    if (!this.Auth.loggedIn()) {
      window.location.href = "/Login";
    }
  }
  render() {
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
              <AppBar position="static">
                <Tabs value={this.state.value} onChange={this.handleChange}>
                  <Tab
                    style={{
                      fontSize: 16,
                      fontFamily: "Prompt",
                      background: "#040040"
                    }}
                    label="ประเภท INCENTIVE"
                  />
                  {/* <Tab
                    style={{
                      fontSize: 16,
                      fontFamily: "Prompt",
                      background: "#040040"
                    }}
                    label="ประเภท PROMOTION"
                  /> */}
                  <Tab
                    style={{
                      fontSize: 16,
                      fontFamily: "Prompt",
                      background: "#040040"
                    }}
                    label="จัดการ Supplier"
                  />
                  <Tab
                    style={{
                      fontSize: 16,
                      fontFamily: "Prompt",
                      background: "#040040"
                    }}
                    label="ข้อมูลประเภทสินค้า"
                  />
                  <Tab
                    style={{
                      fontSize: 16,
                      fontFamily: "Prompt",
                      background: "#040040"
                    }}
                    label="ข้อมูลจัดซื้อ"
                  />
                  <Tab
                    style={{
                      fontSize: 16,
                      fontFamily: "Prompt",
                      background: "#040040"
                    }}
                    label="ผู้ติดต่อ"
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
                    <Form2 />
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
                    <Form4 />
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
             
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }
}
export default withSnackbar(Pagesetting);
