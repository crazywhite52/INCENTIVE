import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBIcon
} from "mdbreact";
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
// import jiblogo from "../assets/worktime.png";
import { MDBBtn } from "mdbreact";
// import helps from '../assets/help.jpg';

class TopNavigation extends Component {
  state = {
    collapse: false,
    modal: false
  };
  togglehelp = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  onClick = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };

  clickhelp = () => {
    this.setState({
        modal: !this.state.modal
      });
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    return (
      <div>
        <MDBNavbar
          style={{ background: "#002369" }}
          className="flexible-navbar"
          light
          expand="md"
          scrolling
        >
          <MDBNavbarBrand>
            {/* <a href={"/Scanwork"}>
              <img
                style={{ height: 50, marginLeft: 10 }}
                alt="MDB React Logo"
                className="img-fluid"
                src={jiblogo}
              />
            </a> */}
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.onClick} />
          <MDBCollapse isOpen={this.state.collapse} navbar>
            {/* <MDBNavbarNav left>
                         <MDBNavItem active>
                            <MDBNavLink to="#">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a rel="noopener noreferrer" className="nav-link Ripple-parent" href="https://mdbootstrap.com/docs/react/" target="_blank">About MDB</a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a rel="noopener noreferrer" className="nav-link Ripple-parent" href="https://mdbootstrap.com/docs/react/getting-started/download/" target="_blank">Free download</a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a rel="noopener noreferrer"  className="nav-link Ripple-parent" href="https://mdbootstrap.com/bootstrap-tutorial/" target="_blank">Free tutorials</a>
                        </MDBNavItem> 
                    </MDBNavbarNav> */}
            <MDBNavbarNav right>
              <MDBNavItem>
                <a
                  className="nav-link navbar-link"
                  rel="noopener noreferrer"
                  target="_blank"
                  onClick={this.clickhelp}
                >
                  <MDBIcon
                    fab
                    icon="whatsapp"
                    size="2x"
                    className="amber-text pr-3"
                  />
                </a>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
        <MDBContainer>
          <MDBModal isOpen={this.state.modal} toggle={this.togglehelp}>
            <MDBModalHeader toggle={this.togglehelp}>การช่วยเหลือ</MDBModalHeader>
            <MDBModalBody style={{background:'rgb(183, 186, 193)'}}><center>OFFICE :  4111 - 4119</center></MDBModalBody>
            <MDBModalFooter>
             <h5 style={{color:'#7b7474',fontSize:16}}> พัฒนาระบบสารสนเทศ(MIS)  088-809-4787</h5>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      </div>
    );
  }
}

export default TopNavigation;
