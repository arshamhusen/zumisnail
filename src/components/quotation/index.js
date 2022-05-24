import React, { useEffect, useState } from "react";
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikProvider,
  useFormik,
} from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Axios from "axios";

function Index() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState(false);
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const initialValues = {
    companyName: "",
    phone: "",
    email: "",
    focalPoint: "",
    details: "",
  };

  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required("Company name is required"),
    phone: Yup.string()
      .min(7, "Phone number should be exaclty ")
      .max(7)
      .matches(phoneRegExp, "Phone number is not valid"),

    focalPoint: Yup.string().required("Focal point is required"),
    email: Yup.string().email().required("Email is required"),
    details: Yup.string()
      .min(1)
      .required(" Please add some details for context"),
  });

  const inputHandler = (event, editor) => {
    formik.setFieldValue("details", editor.getData());
  };

  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    Axios.post(
      "http://10.0.11.210:4000/api/website/request-quotation",
      values
    ).then((res) => {
      console.log(res);
      if (res.status === 200) {
        setIsSubmit(true);
        resetForm({ values: "" });
      } else {
        setError(true);
      }
    });

    //save your form data
    //await signatoryInfoCreateAction(fd)
  };

  const formik = useFormik({ initialValues, onSubmit, validationSchema });

  return (
    <section
      style={{
        backgroundImage: `url(http://192.168.1.218:3003//images/bg.png)`,
      }}
      className="relative font-thin  bg-cover bg-center flex items-center justify-center"
    >
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 h-full py-10 lg:py-20 flex items-center justify-center text-center flex-col">
        <div
          data-aos="fade-in"
          data-aos-once="true"
          className="lg:text-4xl text-2xl font-light  text-black pb-5"
        >
          <h1>Book an Appointment</h1>
        </div>
        {isSubmit && (
          <div
            class="bg-gradient-to-r from-primary to-secondary  animate-fade-in-down rounded-lg my-10 py-5 px-6 mb-3 text-base text-green-700 inline-flex items-center w-full"
            role="alert"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="check-circle"
              class="w-4 h-4 mr-2 fill-current"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
              ></path>
            </svg>
            We have recieved your request - We will get back to your shortly..
          </div>
        )}
        {!isSubmit && (
          <>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              className="max-w-7xl lg:mt-10 mt-2 w-full p-10 rounded-lg lg:drop-shadow-xl bg-white shadow-lg sm:rounded-3xl sm:p-10 bg-clip-padding bg-opacity-20 border border-lightgray"
              style={{ backdropFilter: "blur(20px)" }}
            >
              <FormikProvider value={formik}>
                <div>
                  <Form>
                    <div className="flex text-sm lg:text-lg items-start justify-start mb-5 text-left w-full flex-col">
                      <div className="grid grid-cols-1 gap-y-3 w-full">
                        <label htmlFor="companyName"> Name </label>
                        <Field
                          required
                          name="companyName"
                          type="text"
                          className="form-control p-1 px-2 focus:border-secondary focus:ring-lime rounded-lg border-borderGray lg:border-white shadow-sm"
                        />
                        <ErrorMessage
                          name="companyName"
                          component="div"
                          className="text-red text-sm"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-6 text-sm lg:text-lg gap-x-0 lg:gap-x-4">
                      <div className="col-span-3 flex items-start justify-start text-left w-full">
                        <div className="grid grid-cols-1 gap-y-2 w-full">
                          <div className="grid grid-cols-1 gap-y-3 w-full">
                            <label htmlFor="phone"> Phone </label>
                            <div className="grid grid-cols-12 items-center w-full">
                              <div className=" col-span-2 bg-white rounded-l-lg border-r border-r-lightgray lg:border-r-borderGray border border-borderGray h-full  shadow-sm flex items-center justify-center px-4 ">
                                <p className="lg:text-base text-base text-gray">
                                  +960
                                </p>
                              </div>
                              <Field
                                name="phone"
                                type="text"
                                className="col-span-10 p-1 px-2 form-control focus:border-secondary focus:ring-lime rounded-r-lg border-borderGray lg:border-white shadow-sm"
                              />
                            </div>

                            <ErrorMessage
                              name="phone"
                              component="div"
                              className="text-red text-sm"
                            />
                          </div>
                          <div className="grid grid-cols-1 gap-y-3 w-full">
                            <label htmlFor="email"> Email </label>
                            <Field
                              name="email"
                              type="text"
                              className="form-control p-1 px-2 focus:border-secondary focus:ring-lime rounded-lg border-borderGray lg:border-white shadow-sm"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="text-red text-sm"
                            />
                          </div>
                          <div className="grid grid-cols-1 gap-y-3 w-full">
                            <label htmlFor="phone"> Type of Service </label>

                            <Field
                              name="email"
                              type="text"
                              className="form-control p-1 px-2 focus:border-secondary focus:ring-lime rounded-lg border-borderGray lg:border-white shadow-sm"
                            />

                            <ErrorMessage
                              name="phone"
                              component="div"
                              className="text-red text-sm"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-span-3 flex items-start justify-start text-left w-full">
                        <div className="grid grid-cols-1 gap-y-2 w-full">
                          <div className="grid grid-cols-1 gap-y-3 w-full">
                            <label htmlFor="email"> Preferred Date </label>
                            <Field
                              name="email"
                              type="text"
                              className="form-control p-1 px-2 focus:border-secondary focus:ring-lime rounded-lg border-borderGray lg:border-white shadow-sm"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="text-red text-sm"
                            />
                          </div>
                          <div className="grid grid-cols-1 gap-y-3 w-full">
                            <label htmlFor="email"> Preferred Time </label>
                            <Field
                              name="email"
                              type="text"
                              className="form-control p-1 px-2 focus:border-secondary focus:ring-lime rounded-lg border-borderGray lg:border-white shadow-sm"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="text-red text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:mt-10 mt-5">
                      <button
                        type="submit"
                        className="px-8 p-2 bg-white text-primary text-sm lg:text-base font-medium hover:shadow-lg hover:brightness-105 rounded-full"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                </div>
              </FormikProvider>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Index;
