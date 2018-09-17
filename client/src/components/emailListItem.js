import React, { Component } from "react";

class EmailListItem extends Component {
  render() {
    return (
      <div className="card">
        <li>
          <table>
            <tbody>
              <tr>
                <td>{this.props.email.from_name}</td>
                <td align="right">{this.props.email.sent.slice(0, 10)}</td>
              </tr>
              <tr>
                <td className="email-subject">{this.props.email.subject}</td>
              </tr>
            </tbody>
          </table>
        </li>
      </div>
    );
  }
}

export default EmailListItem;
