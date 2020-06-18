import React from "react";
import logo from "./img/incentiveLogo.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from "mdbreact";
import { NavLink } from "react-router-dom";

import AuthService from "./authlogin/AuthService";

// const Auth = new AuthService();

class TopNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accessapp: [],
      accessadmin: 0
    };
    this.Auth = new AuthService();
    // this.getRoutetitle = this.getRoutetitle.bind(this);
  }

  componentDidMount() {
    let Access = this.Auth.getAccess();
    let Accessadmin = this.Auth.getAccessadmin();
    if (Access != 0) {
      let Accessapp = JSON.parse(Access);
      this.setState({ accessapp: Accessapp, accessadmin: Accessadmin }, () => {
        // console.log(this.state.accessapp);
      });
    } else {
      this.setState({ accessapp: [], accessadmin: [] }, () => {
        // console.log(this.state.accessapp);
      });
    }
  }
  render() {
    return (
      <div
        className="sidebar-fixed position-fixed ollapsible-body"
        style={{ fontFamily: "Prompt" }}
      >
        <a href="#!" className="logo-wrapper waves-effect">
          <img alt="MDB React Logo" className="img-fluid" src={logo} />
        </a>

        <MDBListGroup className="list-group-flush">
          {/* USER ACCESS */}
          {this.state.accessapp.length != 0 &&
            this.state.accessapp[0].views == 1 && (
              <NavLink to="/createnewjob" activeClassName="activeClass">
                <MDBListGroupItem>
                  <MDBIcon icon="clipboard-list" className="mr-3" />
                  &nbsp;เอกสาร P
                </MDBListGroupItem>
              </NavLink>
            )}

          {this.state.accessapp.length != 0 &&
            this.state.accessapp[1].views == 1 && (
              <NavLink to="/createnewjob_claim" activeClassName="activeClass">
                <MDBListGroupItem>
                  <MDBIcon icon="clipboard-list" className="mr-3" />
                  &nbsp;เอกสาร C
                </MDBListGroupItem>
              </NavLink>
            )}

          {this.state.accessapp.length != 0 &&
            this.state.accessapp[3].views == 1 && (
              <NavLink to="/reportincentive" activeClassName="activeClass">
                <MDBListGroupItem>
                  <MDBIcon icon="clipboard-list" className="mr-3" />
                    &nbsp;ระบบรายงาน
                  </MDBListGroupItem>
              </NavLink>
            )}


          {this.state.accessapp.length != 0 &&
            this.state.accessapp[2].views == 1 && (
              <NavLink to="/settingsys" activeClassName="activeClass">
                <MDBListGroupItem>
                  <MDBIcon icon="exclamation" className="mr-3" />
                  &nbsp;ตั้งค่าระบบ
                </MDBListGroupItem>
              </NavLink>
            )}

          {this.state.accessapp.length != 0 &&

            <NavLink to="/Login" activeClassName="activeClass">
              <MDBListGroupItem>
                <MDBIcon icon="user-times" className="mr-3" />
                  ออกจากระบบ
                </MDBListGroupItem>
            </NavLink>
          }

          {/* ADMIN ACCESS */}

          {this.state.accessadmin == 1 && (
            <NavLink to="/createnewjob" activeClassName="activeClass">
              <MDBListGroupItem>
                <MDBIcon icon="clipboard-list" className="mr-3" />
                &nbsp;เอกสาร P
              </MDBListGroupItem>
            </NavLink>
          )}

          {this.state.accessadmin == 1 && (
            <NavLink to="/createnewjob_claim" activeClassName="activeClass">
              <MDBListGroupItem>
                <MDBIcon icon="clipboard-list" className="mr-3" />
                &nbsp;เอกสาร C
              </MDBListGroupItem>
            </NavLink>
          )}

          {this.state.accessadmin == 1 && (
            <NavLink to="/reportincentive" activeClassName="activeClass">
              <MDBListGroupItem>
                <MDBIcon icon="clipboard-list" className="mr-3" />
                &nbsp;ระบบรายงาน
              </MDBListGroupItem>
            </NavLink>
          )}

          {this.state.accessadmin == 1 && (
            <NavLink to="/marketplace" activeClassName="activeClass">
              <MDBListGroupItem>
                <MDBIcon icon="clipboard-list" className="mr-3" />
                &nbsp;Marketplace
              </MDBListGroupItem>
            </NavLink>
          )}

          {this.state.accessadmin == 1 && (
            <NavLink to="/settingsys" activeClassName="activeClass">
              <MDBListGroupItem>
                <MDBIcon icon="exclamation" className="mr-3" />
                &nbsp;ตั้งค่าระบบ
              </MDBListGroupItem>
            </NavLink>
          )}

          {this.state.accessadmin == 1 && (
            <NavLink to="/Login" activeClassName="activeClass">
              <MDBListGroupItem>
                <MDBIcon icon="user-times" className="mr-3" />
                ออกจากระบบ
              </MDBListGroupItem>
            </NavLink>
          )}
        </MDBListGroup>
      </div>
    );
  }
}

export default TopNavigation;
