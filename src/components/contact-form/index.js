import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement;
const container = document.querySelector('.dr-react-contact-form');

const ContactForm = class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    const t = this;

    t.state = {
      fullName: {
        value: '',
        validationMessage: '',
      },
      email: {
        value: '',
        validationMessage: '',
      },
      message: {
        value: '',
        validationMessage: '',
      },
    };

    t.handleChange = t.handleChange.bind(t);
    t.handleSubmit = t.handleSubmit.bind(t);
  }

  handleChange(event) {
    const t = this;
    const { name, value } = event.target;

    t.state[name].value = value;

    t.setState(t.state);
  }

  handleSubmit(event) {
    const t = this;
    const form = event.target;
    const fields = [...form];

    event.preventDefault();
    event.stopPropagation();

    const mapped = (field) => {
      if (field.validity.valueMissing) {
        t.state[field.name].validationMessage = 'This is a required field.';
        t.setState(t.state);
      }

      if (field.type === 'email' && field.validity.patternMismatch) {
        t.state[field.name].validationMessage = 'Please enter a valid email.';
        t.setState(t.state);
      }
    };

    if (form.checkValidity()) {
      console.log('Full name', {
        fullName: t.state.fullName.value,
        email: t.state.email.value,
        message: t.state.message.value,
      });
    } else {
      fields.map(mapped);
    }

    form.classList.add('was-validated');
  }

  render() {
    const t = this;

    return (
      <form className="needs-validation" onSubmit={t.handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Your name</label>
          <input
            type="text"
            name="fullName"
            className="form-control"
            id="fullName"
            value={t.state.fullName.value}
            onChange={t.handleChange}
            required
          />
          <div className="invalid-feedback">
            {t.state.fullName.validationMessage}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Your email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            value={t.state.email.value}
            onChange={t.handleChange}
            required
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          />
          <div className="invalid-feedback">
            {t.state.email.validationMessage}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Your message</label>
          <textarea
            name="message"
            className="form-control"
            id="message"
            value={t.state.message.value}
            onChange={t.handleChange}
            required
          />
          <div className="invalid-feedback">
            {t.state.message.validationMessage}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    );
  }
};

if (container) {
  ReactDOM.render(element(ContactForm), container);
}
