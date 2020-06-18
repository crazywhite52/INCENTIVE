import React, { Component } from "react";
import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink
} from "mdbreact";
import Pay1 from "./Pay1";
import Pay2 from "./Pay2";
import Pay3 from "./Pay3";
import Pay4 from "./Pay4";
import Pay5 from "./Pay5";
import Pay6 from "./Pay6";
import Pay7 from "./Pay7";
import Pay8 from "./Pay8";
export default class Receivemoney extends Component {
  state = {
    activeItem: "1",
    dataEdit: []
  };

  toggle = tab => e => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  };
  componentDidMount() {
    this.setState(
      {
        dataEdit: this.props.dataEdit[0]
      },
      () => {}
    );
  }
  render() {
    return (
      <div style={{ marginTop: 0, fontFamily: "Prompt" }}>
        <MDBNav
          className="nav-tabs mt-5"
          style={{ marginTop: 0, paddingTop: 0 }}
        >
          {this.state.dataEdit.pay_cash == 1 && (
            <MDBNavItem style={{ marginTop: 0, fontSize: 16 }}>
              <MDBNavLink
                to="#"
                active={this.state.activeItem === "1"}
                onClick={this.toggle("1")}
                role="tab"
              >
                <strong>จ่ายเป็นเงินสด</strong>
              </MDBNavLink>
            </MDBNavItem>
          )}

          {this.state.dataEdit.pay_transfer == 1 && (
            <MDBNavItem style={{ marginTop: 0, fontSize: 16 }}>
              <MDBNavLink
                to="#"
                active={this.state.activeItem === "2"}
                onClick={this.toggle("2")}
                role="tab"
              >
                <strong>จ่ายด้วยเงินโอน</strong>
              </MDBNavLink>
            </MDBNavItem>
          )}

          {this.state.dataEdit.pay_check == 1 && (
            <MDBNavItem style={{ marginTop: 0, fontSize: 16 }}>
              <MDBNavLink
                to="#"
                active={this.state.activeItem === "3"}
                onClick={this.toggle("3")}
                role="tab"
              >
                <strong>เช็ค</strong>
              </MDBNavLink>
            </MDBNavItem>
          )}
          {this.state.dataEdit.pay_credit == 1 && (
            <MDBNavItem style={{ marginTop: 0, fontSize: 16 }}>
              <MDBNavLink
                to="#"
                active={this.state.activeItem === "4"}
                onClick={this.toggle("4")}
                role="tab"
              >
                <strong>ใบลดหนี้</strong>
              </MDBNavLink>
            </MDBNavItem>
          )}
          {this.state.dataEdit.pay_product == 1 && (
            <MDBNavItem style={{ marginTop: 0, fontSize: 16 }}>
              <MDBNavLink
                to="#"
                active={this.state.activeItem === "5"}
                onClick={this.toggle("5")}
                role="tab"
              >
                <strong>สินค้า</strong>
              </MDBNavLink>
            </MDBNavItem>
          )}
          {this.state.dataEdit.pay_voucher == 1 && (
            <MDBNavItem style={{ marginTop: 0, fontSize: 16 }}>
              <MDBNavLink
                to="#"
                active={this.state.activeItem === "6"}
                onClick={this.toggle("6")}
                role="tab"
              >
                <strong>Voucher</strong>
              </MDBNavLink>
            </MDBNavItem>
          )}
          {this.state.dataEdit.pay_discount == 1 && (
            <MDBNavItem style={{ marginTop: 0, fontSize: 16 }}>
              <MDBNavLink
                to="#"
                active={this.state.activeItem === "7"}
                onClick={this.toggle("7")}
                role="tab"
              >
                <strong> ส่วนลด</strong>
              </MDBNavLink>
            </MDBNavItem>
          )}
          <MDBNavItem style={{ marginTop: 0, fontSize: 16 }}>
            <MDBNavLink
              to="#"
              active={this.state.activeItem === "8"}
              onClick={this.toggle("8")}
              role="tab"
            >
              <strong> อื่นๆ</strong>
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent
          activeItem={this.state.activeItem}
          style={{ marginTop: 0 }}
        >
          <MDBTabPane tabId="1" role="tabpanel">
            <Pay1 />
          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel">
            <Pay2 />
          </MDBTabPane>
          <MDBTabPane tabId="3" role="tabpanel">
            <Pay3 />
          </MDBTabPane>
          <MDBTabPane tabId="4" role="tabpanel">
            <Pay4 />
          </MDBTabPane>
          <MDBTabPane tabId="5" role="tabpanel">
            <Pay5 />
          </MDBTabPane>
          <MDBTabPane tabId="6" role="tabpanel">
            <Pay6 />
          </MDBTabPane>
          <MDBTabPane tabId="7" role="tabpanel">
            <Pay7 />
          </MDBTabPane>
          <MDBTabPane tabId="8" role="tabpanel">
            <Pay8 />
          </MDBTabPane>
        </MDBTabContent>
      </div>
    );
  }
}
