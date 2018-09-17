import React, { Component } from "react";

class Email extends Component {
  state = {
    emailDeleted: false
  };
  deleteEmail = async () => {
    const response = await fetch(`/api/emails/${this.props.currentEmail.id}`, {
      method: "DELETE"
    }).then(res => res.json());
    this.setState({ emailDeleted: true });
    this.props.onEmailDelete();
    return response;
  };
  render() {
    const email = this.props.currentEmail;
    return (
      <div className="card email-container">
        <div className="email-heading">
          <span className="bold-text">{email.from_name}</span> (
          {email.from_address}){" "}
          <span className="right-text">{email.sent.slice(0, 10)}</span>
        </div>
        <span className="email-subject">{email.subject}</span>
        <p>{email.email_body}</p>
        <button onClick={this.deleteEmail}>Delete</button>
      </div>
    );
  }
}

export default Email;
