import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { CreatePeoject } from "../../actions/ProjectAction";
import classnames from "classnames";

class AddProject extends Component {
  constructor() {
    super();

    this.state = {
      projectName: "",
      projectIdentifier: "",
      projectDesc: "",
      startDate: "",
      endDate: "",
      errors: {},
    };

    this.onChage = this.onChage.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  // Life cycle hooks
  // Commented code is for older version
  /* componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  } */

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errors !== prevState.errors) {
      return { errors: nextProps.errors };
    }
    return null;
  }

  onChage(e) {
    // this.setState({projectName:e.target.value})

    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newProject = {
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      projectDesc: this.state.projectDesc,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      errors: this.state.errors,
    };

    console.log(newProject);

    this.props.CreatePeoject(newProject);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className=" container project">
        {/* In this code, errors is checked for truthiness and then Object.keys(errors).
        length is checked to see if there are any errors in the object. If there are, the <div> with the error message is rendered. */}
        {/*         
        <div className="col-md-8">
          {errors && Object.keys(errors).length > 0 && (
            <div className="alert alert-danger">{errors.projectName}</div>
          )}
        </div>
        */}

        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">
                  Create / Edit Project form
                </h5>
                <hr />
                <form action="" onSubmit={this.onSubmit}>
                  <div className="form-group mt-4">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.projectName,
                      })}
                      placeholder="Project Name"
                      name="projectName"
                      value={this.state.projectName}
                      // onChange={this.onChage.bind(this)}
                      onChange={this.onChage}
                    />
                    {/* <p>{errors.projectName}</p> */}
                    {errors.projectName && (
                      <div className="invalid-feedback">
                        {errors.projectName}
                      </div>
                    )}
                  </div>
                  <div className="form-group mt-4">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.projectIdentifier,
                      })}
                      placeholder="Unique Project ID"
                      name="projectIdentifier"
                      value={this.state.projectIdentifier}
                      onChange={this.onChage}
                    />
                    {/* <p>{errors.projectIdentifier}</p> */}
                    {errors.projectIdentifier && (
                      <div className="invalid-feedback">
                        {errors.projectIdentifier}
                      </div>
                    )}
                  </div>
                  <div className="form-group mt-4">
                    <textarea
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.projectDesc,
                      })}
                      placeholder="Project Description"
                      name="projectDesc"
                      value={this.state.projectDesc}
                      onChange={this.onChage}
                    ></textarea>
                    {/* <p>{errors.projectDesc}</p> */}
                    {errors.projectDesc && (
                      <div className="invalid-feedback">
                        {errors.projectDesc}
                      </div>
                    )}
                  </div>
                  <h6 className="mt-4">Start Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.startDate,
                      })}
                      name="startDate"
                      value={this.state.startDate}
                      onChange={this.onChage}
                    />
                    {/* <p>{errors.startDate}</p> */}
                    {errors.startDate && (
                      <div className="invalid-feedback">{errors.startDate}</div>
                    )}
                  </div>
                  <h6 className="mt-4">Estimated End Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.endDate,
                      })}
                      name="endDate"
                      value={this.state.endDate}
                      onChange={this.onChage}
                    />
                    {/* <p>{errors.endDate}</p> */}
                    {errors.endDate && (
                      <div className="invalid-feedback">{errors.endDate}</div>
                    )}
                  </div>

                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddProject.propTypes = {
  CreatePeoject: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { CreatePeoject })(AddProject);
