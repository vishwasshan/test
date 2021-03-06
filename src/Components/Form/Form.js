import React from "react";
import { Field, reduxForm } from "redux-form";

class Form extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return <div className="error">{error}</div>;
    }
  }

  renderInput = ({ input, label, meta, type }) => {
    console.log(meta);
    const className = meta.error && meta.touched ? "error" : "";
    return (
      <div>
        <div>
          <label>{label}</label>
          <input type={type}  className={`form-control ${className}`} {...input} autoComplete="off" />
          {this.renderError(meta)}
        </div>
      </div>
    );
  };

  onSubmit(user) {
     const savesUser= JSON.parse(localStorage.getItem("users") || "[]");
     if(savesUser.email.localeCompare(user.email) === 0 && savesUser.password.localeCompare(user.password) === 0){
        console.log("yes")
     }     
     else{
       console.log("not match")
     }
  }

  render() {
    return (
      <div className="form">
        <h1 className="form__heading">Login Form</h1>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field  name="email" component={this.renderInput} label="Enter Email" type="email" />
        <Field name="password"  component={this.renderInput}  label="Enter Password" type="password"/>
        <button className="btn">Submit</button>
      </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.email) {
    //only ran if user not entered title
    errors.email = "You must entered email";
  }
  if (!formValues.password) {
    errors.password = "You Must enter password";
  }
  return errors;
};

export default reduxForm({
  form: "Form",
  validate: validate,
})(Form);
