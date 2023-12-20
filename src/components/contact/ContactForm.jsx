"use client";
import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { verifyCaptchaAction } from "../../../Captcha";
import { formKey } from "@/utilities/constants";

function ContactForm({ data, lang }) {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmit = async (data) => {
    if (!executeRecaptcha) {
      return;
    }
    const token = await executeRecaptcha("onSubmit");
    const verified = await verifyCaptchaAction(token);
    if (verified) {
      try {
        const domain = process.env.NEXT_PUBLIC_API_URL;
        const response = await axios.post(`${domain}/contact/FormSubmit`, data);
        reset();
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };
  const {
    register,
    handleSubmit,
    control,
    submissionId,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      secure: "",
    },
  });
  return (
    <form
      className="h-full w-full py-12 flex flex-col justify-center items-center "
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="self-start pb-12 w-full font-semibold text-2xl fancy-title flex ">
        {data.dictionaryValues[3]}
      </h2>
      <div className="grid w-full lg:grid-cols-12 gap-4 justify-start items-center grid-cols-1 ">
        <div className="lg:col-span-2 col-span-12 w-full">
          <label className="flex flex-col gap-2">
            <span className="text-md">
              {lang === "en-US" ? formKey.enName : formKey.trName}{" "}
            </span>
            <input
              className={`border-2  border-solid  py-[8px] px-[14px] ${
                errors["name"] ? "border-red-600" : "border-[#ddd]"
              }`}
              {...register("name", {
                required: `${
                  lang === "en-US" ? formKey.enReqError : formKey.trReqError
                }`,
              })}
              aria-invalid={errors["name"] ? "true" : "false"}
              type="text"
            />
          </label>
          <p
            className={`w-full h-full text-xs pt-2 font-raleway ${
              errors["name"] ? "opacity-100 text-red-600" : "opacity-0 "
            }`}
            role="alert"
          >
            {errors["name"] ? errors["name"]?.message : "hidden"}
          </p>
        </div>

        <div className="lg:col-span-2 col-span-12 w-full">
          <label className="flex flex-col gap-2">
            <span className="text-md">
              {lang === "en-US" ? formKey.enEmail : formKey.trEmail}
            </span>
            <input
              className={`border-2  border-solid  py-[8px] px-[14px] ${
                errors["email"] ? "border-red-600" : "border-[#ddd]"
              }`}
              {...register("email", {
                required: `${
                  lang === "en-US" ? formKey.enReqError : formKey.trReqError
                }`,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: `${
                    lang === "en-US"
                      ? formKey.enEmailError
                      : formKey.trEmailError
                  }`,
                },
              })}
              aria-invalid={errors["email"] ? "true" : "false"}
              type="email"
            />
          </label>
          <p
            className={
              errors["email"]
                ? "opacity-100 text-red-600 text-xs pt-2 font-raleway"
                : "opacity-0"
            }
            role="alert"
          >
            {errors["email"] ? errors["email"]?.message : "hidden"}
          </p>
        </div>

        <div className="lg:col-span-2 col-span-12 w-full font-raleway">
          <label className="flex flex-col gap-2">
            <span className="text-md">
              {lang === "en-US" ? formKey.enTel : formKey.trTel}
            </span>
            <input
              className={`border-2 remove-arrow border-solid  py-[8px] px-[14px] ${
                errors["phone"] ? "border-red-600" : "border-[#ddd]"
              }`}
              {...register("phone", {
                required: `${
                  lang === "en-US" ? formKey.enReqError : formKey.trReqError
                }`,
                minLength: {
                  value: 10,
                  message: `${
                    lang === "en-US" ? formKey.enMinNumber : formKey.trMinNumber
                  }`,
                },
                maxLength: {
                  value: 11,
                  message: `${
                    lang === "en-US" ? formKey.enMaxNumber : formKey.trMaxNumber
                  }`,
                },
              })}
              aria-invalid={errors["phone"] ? "true" : "false"}
              type="number"
            />
          </label>
          <p
            className={
              errors["phone"]
                ? "opacity-100 text-red-600 text-xs pt-2 font-raleway"
                : "opacity-0"
            }
            role="alert"
          >
            {errors["phone"] ? errors["phone"]?.message : "hidden"}
          </p>
        </div>

        <div className="lg:col-span-6 col-span-12 w-full">
          <label className="flex w-full flex-col gap-2">
            <span className="text-md">
              {lang === "en-US" ? formKey.enSub : formKey.trSub}
            </span>
            <input
              className={`border-2  border-solid  py-[8px] px-[14px] ${
                errors["subject"] ? "border-red-600" : "border-[#ddd]"
              }`}
              {...register("subject", {
                required: `${
                  lang === "en-US" ? formKey.enReqError : formKey.trReqError
                }`,
              })}
              aria-invalid={errors["subject"] ? "true" : "false"}
              type="text"
            />
          </label>

          <p
            className={
              errors["subject"]
                ? "opacity-100 text-red-600 text-xs pt-2 font-raleway"
                : "opacity-0"
            }
            role="alert"
          >
            {errors["subject"] ? errors["subject"]?.message : "hidden"}
          </p>
        </div>
      </div>
      <div className="w-full py-12 h-full">
        <label className="flex flex-col">
          <span className="text-md pb-4">
            {lang === "en-US" ? formKey.enMes : formKey.trMes}
          </span>
          <textarea
            className={`border-2  border-solid  py-[8px] px-[14px] ${
              errors["message"] ? "border-red-600" : "border-[#ddd]"
            }`}
            {...register("message", {
              required: `${
                lang === "en-US" ? formKey.enReqError : formKey.trReqError
              }`,
            })}
            aria-invalid={errors["message"] ? "true" : "false"}
            type="textarea "
            rows={7}
          />
        </label>
        <p
          className={
            errors["message"]
              ? "opacity-100 text-red-600 text-xs pt-2 font-raleway"
              : "opacity-0"
          }
          role="alert"
        >
          {errors["message"]?.message}
        </p>
      </div>
      <input type="hidden" {...register("secure")} />
      <button
        className="self-end cursor-pointer bg-[#24bbc4] p-[22px] h-[40px] text-white flex justify-center items-center outline-none drop-shadow-md border-b border-blue-50 font-bold leading-4 m-2 rounded whitespace-nowrap hover:bg-[#428de8] "
        disabled={isSubmitting}
      >
        {lang === "en-US" ? formKey.enButton : formKey.trButton}
      </button>
    </form>
  );
}

export default ContactForm;
