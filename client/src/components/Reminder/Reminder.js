import React from 'react';
import Modal from 'react-responsive-modal';
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
      <div className="example">
        <h2>Reminders</h2>
        <button className="btn btn-action" onClick={this.onOpenModal}>
          Set A Reminder
        </button>{' '}
        <a
          href="https://github.com/pradel/react-responsive-modal/blob/master/docs/src/examples/centered.js"
          target="_blank"
        >
        </a>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Set Reminder</h2>
          
            <form className="form-inline">
              <label className="sr-only" for="inlineFormInputName2">Name</label>
              <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe">

                <label className="sr-only" for="inlineFormInputGroupUsername2">Username</label>
                <div className="input-group mb-2 mr-sm-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">@</div>
                  </div>
                  <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Username">

                  <div className="form-check mb-2 mr-sm-2">
                    <input className="form-check-input" type="checkbox" id="inlineFormCheck">
                      <label className="form-check-label" for="inlineFormCheck">
                        Remember me
    </label>
  </div>

                    <button type="submit" class="btn btn-primary mb-2">Submit</button>
</form>

          </p>

        </Modal>
      </div>
            );
          }
}