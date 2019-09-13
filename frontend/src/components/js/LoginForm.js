import React, { Component } from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from "../scss/LoginForm.scss"
import TodoElem from "./TodoElem";
import {getFromLocalStorage} from "../../helpers/localStorage";


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
    }

    formSubmit() {
        console.log('submit');
    }

    render() {
        return (<div className={styles.LoginForm}>
            <Formik initialValues={{ email: '' }} onSubmit={this.formSubmit}  validationSchema={Yup.object().shape({email: Yup.string().email().required('Required'),})}>
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset,
                    } = props;
                    return (
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email" style={{ display: 'block' }}>
                                Email
                            </label>
                            <input
                                id="email"
                                placeholder="Enter your email"
                                type="text"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    errors.email && touched.email ? 'text-input error' : 'text-input'
                                }
                            />
                            {errors.email && touched.email && (
                                <div className="input-feedback">{errors.email}</div>
                            )}

                            <button
                                type="button"
                                className="outline"
                                onClick={handleReset}
                                disabled={!dirty || isSubmitting}
                            >
                                Reset
                            </button>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </form>
                    );
                }}
            </Formik>
        </div>);
    }
}

export default LoginForm ;