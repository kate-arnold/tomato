import React from "react";

class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { valName: "", valEmail: "" };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({ valName: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ valEmail: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h2 className="align-center mt3">Keep up to date on the tomato</h2>
        <div className="subscribe-form">
          <p className="align-center mt2">
            Enter your name and email address below to receive weekly updates on
            the status of the tomato.
          </p>
          <form onSubmit={this.handleSubmit} class="mt2">
            <div>
              <label for="input-name">Name</label>
              <input
                id="input-name"
                type="text"
                value={this.state.valName}
                onChange={this.handleNameChange}
              />
            </div>
            <div>
              <label for="input-text">Email</label>
              <input
                id="input-text"
                type="text"
                value={this.state.valEmail}
                onChange={this.handleEmailChange}
              />
            </div>
            <div>
              <input id="input-submit" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SubscribeForm;
