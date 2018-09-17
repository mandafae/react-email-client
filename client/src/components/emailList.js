import React, { Component } from "react";
import EmailListItem from "./emailListItem";

class EmailList extends Component {
  state = {
    currentEmail: {}
  };

  onEmailSelect(email) {
    this.props.setCurrentEmail(email);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.emails.map(email => {
            return (
              <div key={email.id} onClick={() => this.onEmailSelect(email)}>
                <EmailListItem email={email} />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default EmailList;
