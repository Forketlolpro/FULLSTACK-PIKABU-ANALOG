import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from '../scss/LoginForm.scss';

class LoginForm extends React.Component {
    render() {
        return (
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required')
                })}
                onSubmit={fields => {
                    console.log(JSON.stringify(fields, null, 4))
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div className={styles.FormGroup}>
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className={styles.InvalidFeedback} />
                        </div>
                        <div className={styles.FormGroup}>
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className={styles.InvalidFeedback} />
                        </div>
                        <div className={styles.FormGroup}>
                            <button type="submit" className={styles.Button}>Login</button>
                        </div>
                    </Form>
                )}
            />
        )
    }
}

export { LoginForm }; 