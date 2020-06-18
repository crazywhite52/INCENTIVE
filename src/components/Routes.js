import React from "react";
import { Route, Switch } from "react-router-dom";

import pagesetting from "./settingsys/pagesetting";
import Createjobp from "./newpages/Createjobp";
import Createjobc from "./newpages/Createjobc";
import editp_job from "./newpages/Editp_page";
import login from "./authlogin/Login";
import Diffcostnow from "./report/Diffcostnow";
import Diffcosthis from "./report/Diffcosthis";
import Marketplace from "./newpages/Marketplace";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={login} />
        <Route path="/Login" exact component={login} />
        <Route path="/settingsys" component={pagesetting} />
        <Route path="/createnewjob" component={Createjobp} />
        <Route path="/createnewjob_claim" component={Createjobc} />
        <Route path="/reportincentive" component={Diffcostnow} />
        <Route path="/reportincentive_his" component={Diffcosthis} />
        <Route path="/editp_job/:id" component={editp_job} />
        <Route path="/Marketplace" component={Marketplace} />
      </Switch>
    );
  }
}

export default Routes;
