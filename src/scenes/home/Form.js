import React from "react";
import * as qs from "query-string";
import { Redirect } from "react-router";

const scriptURL = "https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXXXXX/exec";

export default class Form extends React.Component {
  state = {
    name: "",
    company: "",
    email: "",
    referrer: "",
    type: "hrdepartment",
    redirect: false,
    loading: false
  };

  componentWillMount() {
    const parsed = qs.parse(location.search);
    this.setState({ referrer: parsed.referrer || "" });
  }

  checkForm(){
    const { name, company, email, type } = this.state;

    return name && company && email && type;
  }

  async submit() {
    const body = new FormData();
    body.append("name", this.state.name);
    body.append("company", this.state.company);
    body.append("email", this.state.email);
    body.append("referrer", this.state.referrer);
    body.append("type", this.state.type);
    this.setState({ loading: true });
    fetch(scriptURL, { method: "POST", body });
    this.setState({ redirect: true });
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/registered" />;
    }

    return (
      <div className="register">
        <div className="title">Register for free</div>
        <input placeholder="Name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
        <input
          placeholder="Company"
          value={this.state.company}
          onChange={e => this.setState({ company: e.target.value })}
        />
        <select value={this.state.type} onChange={e => this.setState({ type: e.target.value })}>
          <option value="hrdepartment">HR Department</option>
          <option value="hragency">HR Agency</option>
          <option value="manager">Manager</option>
          <option value="other">Other</option>
        </select>
        <input placeholder="Email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
        <button
          disabled={!this.checkForm()}
          onClick={this.submit.bind(this)}
        >
          REGISTER</button>
      </div>
    );
  }
}
