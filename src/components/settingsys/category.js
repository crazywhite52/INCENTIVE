import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import { TextInput } from "grommet";
import { withSnackbar } from "notistack";
import { MDBBtn, MDBIcon } from "mdbreact";
import Classcat from "./class.tsx";
import Band from "./band.tsx";
//API connect
import ApiService from "../actions/apidata";

class cateTegory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 0,
      categoryData: [],
      categorySelect: "",
      brandData: [],
      txtSearch: ""
    };
    this.ApiCall = new ApiService();
    this.searchCategory = this.searchCategory.bind(this);
    this.updateGrid = this.updateGrid.bind(this);
    this.searchBrand = this.searchBrand.bind(this);
    this.onUpdatedata = this.onUpdatedata.bind(this);
    this.searchCategory = this.searchCategory.bind(this);
  }
  componentDidMount() {
    this.searchCategory();
  }
  updateGrid(value) {
    this.setState({ categorySelect: value.classid }, () => {
      this.searchBrand();
    });
  }
  searchCategorySearch() {
    let datasend = Array();
    datasend = {
      txtsearch: this.state.txtSearch
    };
    this.ApiCall.postCategory(datasend)
      .then(res => {
        // console.log(res);
        if (res.success == true) {
          this.setState({ categoryData: res.data });
        } else {
          console.log(res.message);
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }
  onUpdatedata(table, rowdata) {
    if (table == "class") {
      let datasend = Array();
      datasend = {
        classid: rowdata.classid,
        status: rowdata.status
      };
      this.ApiCall.updateClass(datasend)
        .then(res => {
          // console.log(res);
          if (res.success == true) {
            this.props.enqueueSnackbar("อัพเดทข้อมูล สำเร็จ..", {
              variant: "success"
            });
          } else {
            console.log(res.message);
          }
        })
        .catch(error => {
          console.error(error.message);
        });
    } else {
      let datasend = Array();
      datasend = {
        classid: this.state.categorySelect,
        brand: rowdata.brand,
        status: rowdata.status
      };
      this.ApiCall.updateBrand(datasend)
        .then(res => {
          // console.log(res);
          if (res.success == true) {
            this.props.enqueueSnackbar("อัพเดทข้อมูล สำเร็จ..", {
              variant: "success"
            });
          } else {
            console.log(res.message);
          }
        })
        .catch(error => {
          console.error(error.message);
        });
    }
  }

  searchBrand() {
    this.ApiCall.getDataBrand(this.state.categorySelect)
      .then(res => {
        // console.log(res)
        if (res.success == true) {
          this.setState({ brandData: res.data });
        } else {
          console.log(res.message);
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  searchCategory() {
    this.ApiCall.getDataCategory()
      .then(res => {
        // console.log(res)
        if (res.success == true) {
          this.setState({ categoryData: res.data });
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
              &nbsp;แสดงประเภทสินค้า และ แบนด์สินค้า
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
            lg={12}
            xl={12}
            xs={12}
            sm={12}
            md={12}
            style={{ padding: 3 }}
          ></Grid>
          <Grid
            item
            lg={10}
            xl={10}
            xs={10}
            sm={10}
            md={10}
            style={{ paddingTop: 0 }}
          >
            <h5 style={{ color: "rgba(140, 139, 139, 0.87)" }}>
              CATEGORY{" "}
              <k style={{ color: "green" }}>{this.state.categorySelect}</k>
            </h5>
          </Grid>
          <Grid item lg={2} xl={2} xs={2} sm={2} md={2} style={{ padding: 3 }}>
            <h6 style={{ textAlign: "right" }}>
              <strong style={{ fontSize: 16 }}>
                ค้นหา รหัส / ชื่อประเภทสินค้า
              </strong>
            </h6>
            <TextInput
              style={{ width: "100%", fontSize: 14 }}
              size="xsmall"
              value={this.state.txtSearch}
              placeholder="คำค้น....."
              ref={input => {
                this.code_route = input;
              }}
              onChange={event =>
                this.setState({ txtSearch: event.target.value }, () => {})
              }
              onKeyPress={event => {
                if (event.key === "Enter") {
                  this.searchCategorySearch();
                }
              }}
            />
          </Grid>
          <Grid item lg={8} xl={8} xs={8} sm={8} md={8} style={{ padding: 3 }}>
            <Classcat
              updateGrid={this.updateGrid}
              onUpdatedata={this.onUpdatedata}
              categoryData={this.state.categoryData}
            />
          </Grid>
          <Grid item lg={4} xl={4} xs={4} sm={4} md={4} style={{ padding: 3 }}>
            <Band brandData={this.state.brandData}  onUpdatedata={this.onUpdatedata}/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withSnackbar(cateTegory);
