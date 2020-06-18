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
  getType(type) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/create/getType/"+type,
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
  getPromo(pro) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/create/getPromo/"+pro,
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
  getQuarter(quar) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/create/getQuarter/"+quar,
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

  getDifftoday() {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/report/getSellDiffcost",
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

  getDifftodayTime(data) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/report/getSellDiffcostTime",
          this.secretcode
        ),
        Datapass: data,
        Methodpass: "POST"
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



  getDiffHis(rows) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/report/getSellDiffcost_his",
          this.secretcode
        ),
        Datapass:rows ,
        Methodpass: "POST"
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

  getDataEdit(code) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/create/getEditdoc/"+code,
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

  getBand(cate) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/create/getBand/"+cate,
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
  
  getcontactBrand(cate) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/create/getcontactBrand/"+cate,
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



  getCateBrand() {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/create/getCateBrand",
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
  getPm() {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/create/getPm",
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
  

  
  
  getSup() {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/create/getSup",
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

  updateStatusIncentive(datasend) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/updateStatusIncentive",
          this.secretcode
        ),
        Datapass: datasend,
        Methodpass: "POST"
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
  
  updateDataIncentive(datasend){
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/updateIncentiveDoc",
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

  // CREATE DATA 
  saveDataIncentive(datasend) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/createIncentiveDoc",
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

  getDocdata(datasend) {
    try {
      let bodypass = Array();
      bodypass = {
        Urlpass: jwt.encode(
          this.domain + "/rebate/create/getDocnow/"+datasend,
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


}