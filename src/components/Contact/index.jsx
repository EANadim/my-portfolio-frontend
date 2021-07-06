import React from 'react';
import { Formik, Field } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import * as emailjs from 'emailjs-com';
import { EMAIL_JS_USER_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_SERVICE_ID } from '../../contents/constants';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const handleFormSubmit = (values) => {
        if (!values.name) {
            toast.error("Name must not be empty");
        } else if (!values.email) {
            toast.error("Email must not be empty");
        } else if (!values.subject) {
            toast.error("Subject must not be empty");
        } else if (!values.message) {
            toast.error("Message must not be empty");
        } else {
            var templateParams = {
                name: values.name,
                email: values.email,
                subject: values.subject,
                message: values.message,
            };
            emailjs.send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, templateParams, EMAIL_JS_USER_ID)
                .then(function (response) {
                    toast.success("Message submitted");
                }, function (error) {
                    toast.error("Something went wrong. Please try again later");
                });
        }
    }
    return (
        <div class="contact wow fadeInUp" data-wow-delay="0.1s" id="contact">
            <div class="container-fluid">
                <div class="container">
                    <div class="row align-items-center map-container">
                        <div class="col-md-5">
                            <iframe src="https://www.google.com/maps/d/embed?mid=1LSpxpPRZNG0CdWKKDOqMM7hcprB-STwW" width="100%" height="480"></iframe>
                        </div>
                        <div class="col-md-7">
                            <div class="contact-form">
                                <div id="success"></div>
                                <Formik
                                    initialValues={{ name: "", email: "", subject: "", message: "" }}
                                    onSubmit={handleFormSubmit}
                                >
                                    {(form) => <form onSubmit={form.handleSubmit}>
                                        <div class="control-group">
                                            <Field type="text" class="form-control" id="name" name="name" placeholder="Your Name" />
                                            <p class="help-block"></p>
                                        </div>
                                        <div class="control-group">
                                            <Field type="email" class="form-control" id="email" name="email" placeholder="Your Email" />
                                            <p class="help-block"></p>
                                        </div>
                                        <div class="control-group">
                                            <Field type="text" class="form-control" id="subject" name="subject" placeholder="Subject" />
                                            <p class="help-block"></p>
                                        </div>
                                        <div class="control-group">
                                            <Field as={"textarea"} class="form-control" id="message" placeholder="Message" name="message" />
                                            <p class="help-block"></p>
                                        </div>
                                        <div>
                                            <button class="btn" type="submit" id="sendMessageButton">Send Message</button>
                                        </div>
                                    </form>}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Contact;