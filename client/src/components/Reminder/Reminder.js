import React from 'react';
import Modal from 'react-responsive-modal';
import DateTimeField from "react-bootstrap-datetimepicker"
import "./Reminder.css";

export default class Reminder extends React.Component {
  state = {
    open: false,
  };

 
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
         <h2>Set Reminder</h2>
         <div className="reminder">
          <form className="form-inline">
            <label className="sr-only" for="inlineFormInputName2">Name</label>
            <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Remind me to..." />

            <label className="sr-only" for="inlineFormInputGroupUsername2">Username</label>
            <div className="input-group mb-2 mr-sm-2">
              <div className="input-group-prepend">
                <div className="input-group-text">@</div>
              </div>
              <DateTimeField />
            </div>
            <button type="submit" className="btn btn-primary mb-2" onClick={this.onOpenModal}>Submit</button>
          </form>
          </div>
        <a
          href="https://github.com/pradel/react-responsive-modal/blob/master/docs/src/examples/centered.js"
          target="_blank"
        >
        </a>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Your reminder has been created!</h2>
         
        </Modal>
      </div>
    );
  }
}