import jwt from "jwt-simple";
export default class ApiService {
  constructor(domain) {
    this.domain = "http://172.18.0.135:8015";
    this.host_api = "http://172.18.24.113:5015/gateway/routeapinode";

    this.token = "VmriPq93P-jQc=HItb6IpU~go?#UAQ";
    this.secretcode = "123456";
    this.getToken = this.getToken.bind(this);
    this.getSecret = this.getSecret.bind(this);
  }
  getToken() {
    var token = jwt.encode(this.token, this.secretcode);
    return token;
  }
  getSecret() {
    var mis = "mis999*";
    var secret = jwt.encode(this.secretcode, mis);
    return secret;
  }
  getDataType() {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/showrebatetype",
          this.secretcode
        ),
        Datapass: [],
        Methodpass: "GET"
      };
      // console.log(bodypass)
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mis-access-token": this.getToken(),
          "mis-access-secret": this.getSecret()
        },
        body: JSON.stringify(bodypass)
      };
      // console.log(options)
      return fetch(this.host_api, options)
        .then(response => response.json())
        .then(responseData => {
          //  console.log(responseData)
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }

  getDataPro(typeSelect) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/showrebatepro/" + typeSelect,
          this.secretcode
        ),
        Datapass: [],
        Methodpass: "GET"
      };
      // console.log(bodypass)
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mis-access-token": this.getToken(),
          "mis-access-secret": this.getSecret()
        },
        body: JSON.stringify(bodypass)
      };
      // console.log(options)
      return fetch(this.host_api, options)
        .then(response => response.json())
        .then(responseData => {
          //  console.log(responseData)
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }
  getDataBrand(typeSelect) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/showbrand/" + typeSelect,
          this.secretcode
        ),
        Datapass: [],
        Methodpass: "GET"
      };
      // console.log(bodypass)
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mis-access-token": this.getToken(),
          "mis-access-secret": this.getSecret()
        },
        body: JSON.stringify(bodypass)
      };
      // console.log(options)
      return fetch(this.host_api, options)
        .then(response => response.json())
        .then(responseData => {
          //  console.log(responseData)
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }

  getDataCategory() {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/showcategory",
          this.secretcode
        ),
        Datapass: [],
        Methodpass: "GET"
      };
      // console.log(bodypass)
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mis-access-token": this.getToken(),
          "mis-access-secret": this.getSecret()
        },
        body: JSON.stringify(bodypass)
      };
      // console.log(options)
      return fetch(this.host_api, options)
        .then(response => response.json())
        .then(responseData => {
          // console.log(responseData)
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }
  chkType(txtSearch) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/chkpjob/" + txtSearch,
          this.secretcode
        ),
        Datapass: [],
        Methodpass: "GET"
      };
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mis-access-token": this.getToken(),
          "mis-access-secret": this.getSecret()
        },
        body: JSON.stringify(bodypass)
      };
      return fetch(this.host_api, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }
  chkStatusSupID(txtsearch) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/chksupid/" + txtsearch,
          this.secretcode
        ),
        Datapass: [],
        Methodpass: "GET"
      };
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mis-access-token": this.getToken(),
          "mis-access-secret": this.getSecret()
        },
        body: JSON.stringify(bodypass)
      };
      return fetch(this.host_api, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }
  chkStatusPmID(txtsearch) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/chkpmname/" + txtsearch,
          this.secretcode
        ),
        Datapass: [],
        Methodpass: "GET"
      };
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mis-access-token": this.getToken(),
          "mis-access-secret": this.getSecret()
        },
        body: JSON.stringify(bodypass)
      };
      return fetch(this.host_api, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }

  chkStatusSupName(txtsearch) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/chksupname/" + txtsearch,
          this.secretcode
        ),
        Datapass: [],
        Methodpass: "GET"
      };
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mis-access-token": this.getToken(),
          "mis-access-secret": this.getSecret()
        },
        body: JSON.stringify(bodypass)
      };
      return fetch(this.host_api, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }

  getSuplier(txtSearch) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/showSuplier/" + txtSearch,
          this.secretcode
        ),
        Datapass: [],
        Methodpass: "GET"
      };
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mis-access-token": this.getToken(),
          "mis-access-secret": this.getSecret()
        },
        body: JSON.stringify(bodypass)
      };
      return fetch(this.host_api, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }

  getPmList() {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/showpmlist",
          this.secretcode
        ),
        Datapass: [],
        Methodpass: "GET"
      };
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mis-access-token": this.getToken(),
          "mis-access-secret": this.getSecret()
        },
        body: JSON.stringify(bodypass)
      };
      return fetch(this.host_api, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }
  getDDlcontact() {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/getDDlcontact",
          this.secretcode
        ),
        Datapass: [],
        Methodpass: "GET"
      };
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mis-access-token": this.getToken(),
          "mis-access-secret": this.getSecret()
        },
        body: JSON.stringify(bodypass)
      };
      return fetch(this.host_api, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }

  showContactnow() {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/showContactnow",
          this.secretcode
        ),
        Datapass: [],
        Methodpass: "GET"
      };
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mis-access-token": this.getToken(),
          "mis-access-secret": this.getSecret()
        },
        body: JSON.stringify(bodypass)
      };
      return fetch(this.host_api, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }

  getDDlbrand(txtsearch) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/getDDlbrand/" + txtsearch,
          this.secretcode
        ),
        Datapass: [],
        Methodpass: "GET"
      };
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mis-access-token": this.getToken(),
          "mis-access-secret": this.getSecret()
        },
        body: JSON.stringify(bodypass)
      };
      return fetch(this.host_api, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }

  postSuplier(datasend) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/showSuplierSearch",
          this.secretcode
        ),
        Datapass: datasend,
        Methodpass: "POST"
      };
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mis-access-token": this.getToken(),
          "mis-access-secret": this.getSecret()
        },
        body: JSON.stringify(bodypass)
      };
      return fetch(this.host_api, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }

  postCategory(datasend) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/showCategorySearch",
          this.secretcode
        ),
        Datapass: datasend,
        Methodpass: "POST"
      };
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mis-access-token": this.getToken(),
          "mis-access-secret": this.getSecret()
        },
        body: JSON.stringify(bodypass)
      };
      return fetch(this.host_api, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }

  updateSuplier(datasend) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/updateSuplier",
          this.secretcode
        ),
        Datapass: datasend,
        Methodpass: "POST"
      };
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mis-access-token": this.getToken(),
          "mis-access-secret": this.getSecret()
        },
        body: JSON.stringify(bodypass)
      };
      return fetch(this.host_api, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }

  updateContact(datasend) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/updateContact",
          this.secretcode
        ),
        Datapass: datasend,
        Methodpass: "POST"
      };
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mis-access-token": this.getToken(),
          "mis-access-secret": this.getSecret()
        },
        body: JSON.stringify(bodypass)
      };
      return fetch(this.host_api, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }

  updateClass(datasend) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/updateClass",
          this.secretcode
        ),
        Datapass: datasend,
        Methodpass: "POST"
      };
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mis-access-token": this.getToken(),
          "mis-access-secret": this.getSecret()
        },
        body: JSON.stringify(bodypass)
      };
      return fetch(this.host_api, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }
  updatePm(datasend) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(this.domain + "/rebate/updatePm", this.secretcode),
        Datapass: datasend,
        Methodpass: "POST"
      };
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mis-access-token": this.getToken(),
          "mis-access-secret": this.getSecret()
        },
        body: JSON.stringify(bodypass)
      };
      return fetch(this.host_api, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }

  updateBrand(datasend) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/updateBrand",
          this.secretcode
        ),
        Datapass: datasend,
        Methodpass: "POST"
      };
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mis-access-token": this.getToken(),
          "mis-access-secret": this.getSecret()
        },
        body: JSON.stringify(bodypass)
      };
      return fetch(this.host_api, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }

  saveDataType(datasend) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/saveDatatype",
          this.secretcode
        ),
        Datapass: datasend,
        Methodpass: "POST"
      };
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mis-access-token": this.getToken(),
          "mis-access-secret": this.getSecret()
        },
        body: JSON.stringify(bodypass)
      };
      return fetch(this.host_api, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }
  saveDataContact(datasend) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/saveDataContact",
          this.secretcode
        ),
        Datapass: datasend,
        Methodpass: "POST"
      };
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mis-access-token": this.getToken(),
          "mis-access-secret": this.getSecret()
        },
        body: JSON.stringify(bodypass)
      };
      return fetch(this.host_api, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }
  saveDataPm(datasend) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/saveDataPm",
          this.secretcode
        ),
        Datapass: datasend,
        Methodpass: "POST"
      };
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mis-access-token": this.getToken(),
          "mis-access-secret": this.getSecret()
        },
        body: JSON.stringify(bodypass)
      };
      return fetch(this.host_api, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }

  saveDataSup(datasend) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/saveDataSup",
          this.secretcode
        ),
        Datapass: datasend,
        Methodpass: "POST"
      };
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mis-access-token": this.getToken(),
          "mis-access-secret": this.getSecret()
        },
        body: JSON.stringify(bodypass)
      };
      return fetch(this.host_api, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }

  saveDataPro(datasend) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/saveDataPro",
          this.secretcode
        ),
        Datapass: datasend,
        Methodpass: "POST"
      };
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mis-access-token": this.getToken(),
          "mis-access-secret": this.getSecret()
        },
        body: JSON.stringify(bodypass)
      };
      return fetch(this.host_api, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }

  callSerial(data) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/report/getSerial/" + data,
          this.secretcode
        ),
        Datapass: [],
        Methodpass: "GET"
      };
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mis-access-token": this.getToken(),
          "mis-access-secret": this.getSecret()
        },
        body: JSON.stringify(bodypass)
      };
      return fetch(this.host_api, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }

  getmkp_DataCURDATE() {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          "http://172.18.0.135:5001/rebate/MarketplaceData",
          this.secretcode
        ),
        Datapass: [],
        Methodpass: "GET"
      };
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "mis-access-token": this.getToken(),
          "mis-access-secret": this.getSecret()
        },
        body: JSON.stringify(bodypass)
      };
      return fetch(this.host_api, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }



}