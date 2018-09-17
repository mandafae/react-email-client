import React, { Component } from "react";
import "./App.css";
import EmailList from "./components/emailList";
import Email from "./components/email";

class App extends Component {
  state = {
    emails: [],
    isEmailOpen: false,
    currentEmail: {}
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ emails: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/emails");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  setCurrentEmail = email => {
    this.setState({ isEmailOpen: true, currentEmail: email });
  };

  onEmailDelete = () => {
    this.callApi()
      .then(res => this.setState({ emails: res }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <div className="list">
          <EmailList
            emails={this.state.emails}
            setCurrentEmail={this.setCurrentEmail}
          />
        </div>
        <div className="email">
          {this.state.isEmailOpen ? (
            <Email
              currentEmail={this.state.currentEmail}
              onEmailDelete={this.onEmailDelete}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
