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
import Product from "./product.tsx";
//API connect
import ApiService from "../actions/apidata";
export default class Addproduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 0
    };
    this.ApiCall = new ApiService();
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
              &nbsp;จัดการสินค้า
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
              color="success"
              onClick={() => {
                // this.setBoxnow();
                // this.toggle();
              }}
            >
              บันทึกข้อมูล <MDBIcon icon="save" className="ml-1" />
            </MDBBtn>
            <MDBBtn
              color="secondary"
              onClick={() => {
                // this.setBoxnow();
                // this.toggle();
              }}
            >
              อัพโหลดไฟล์ .csv <MDBIcon icon="plus" className="ml-1" />
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
            <Product />
          </Grid>
        </Grid>
      </div>
    );
  }
}
