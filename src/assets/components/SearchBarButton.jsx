import React, { Component } from "react";
import { Button, Form, FormControl, Alert } from "react-bootstrap";

class SearchBarButton extends Component {
  /*
    Custom bootstrap button that changes into a search bar when pressed
  */

  state = { showForm: false };
  showForm() {
    return (
      <div>
        <Form inline>
          <FormControl
            className="form-custom"
            type="text"
            placeholder="Search"
          />
          <Button
            className="btn-postclick custom-nav-link"
            onClick={() => this.search()}
          >
            Search
          </Button>
        </Form>
        <Alert variant="warning" onClose={() => this.hideForm()} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>Search is not functional yet :(</p>
        </Alert>
      </div>
    );
  }

  showButton() {
    return (
      <Button
        className="btn-preclick custom-nav-link"
        onClick={() => this.openForm()}
      >
        Search
      </Button>
    );
  }

  openForm() {
    this.setState({ showForm: true });
  }

  hideForm() {
    this.setState({ showForm: false });
  }

  search() {
    return <div></div>;
  }

  render() {
    const showForm = this.state.showForm;
    let display;
    if (!showForm) {
      display = this.showButton();
    } else {
      display = this.showForm();
    }

    return display;
  }
}

export default SearchBarButton;
