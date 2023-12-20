"use client";
import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { verifyCaptchaAction } from "../../../../Captcha";
import message from "../../../../public/assets/svg/message.svg";
import Image from "next/image";
import right from "../../../../public/assets/svg/right1.svg";
function FooterForm() {
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
        const response = await axios.post(`${domain}/contact/Subscribe`, data);

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
      email: "",
      secure: "",
    },
  });

  return (
    <>
      <div className="rounded h-[38px] flex  overflow-hidden mt-5 ">
        <div className="w-10 h-full hidden sm:flex items-center justify-center bg-[#212121] border-r border-r-black ">
          <Image alt="Message" width={20} height={20} src={message} />
        </div>
        <form className="w-full flex" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Enter Your Email"
            className="outline-none bg-[#292929] flex-1 px-5 text-white"
            {...register("email", {
              required: "Please fill in this field.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid adress",
              },
            })}
            type="email"
          />
          <input type="hidden" {...register("secure")} />
          <button
            disabled={isSubmitting}
            className="bg-[#d3ac23] px-1 sm:px-5 text-white"
          >
            <span className="hidden sm:block">Subscribe</span>
            <Image
              alt="Right"
              width={16}
              height={16}
              src={right}
              className="sm:hidden"/>
          </button>
        </form>
      </div>
    </>
  );
}

export default FooterForm;
