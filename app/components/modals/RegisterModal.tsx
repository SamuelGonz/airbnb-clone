"use client";
import { useCallback, useState } from "react";

import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { useRegisterModal } from "@/app/hooks";
import { Modal } from "./Modal";
import { Heading } from "../Heading";

// ICONS
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

export const RegisterModal = () => {
   const registerModal = useRegisterModal();
   const [isLoading, setIsLoading] = useState(false);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FieldValues>({
      defaultValues: {
         name: "",
         email: "",
         password: "",
      },
   });

   const onSubmit: SubmitHandler<FieldValues> = (data) => {
      setIsLoading(true);

      axios
         .post("/api/register", data)
         .then(() => registerModal.onClose())
         .catch((error) => console.log(error))
         .finally(() => setIsLoading(false));
   };

   const bodyContent = (
      <div className="flex flex-col gap-4 ">
         <Heading title="Welcome to Airbnb" subTitle="Create an account!" />
      </div>
   );

   return (
      <Modal
         disabled={isLoading}
         isOpen={registerModal.isOpen}
         tittle="Register"
         actionLabel="Continue"
         onClose={registerModal.onClose}
         onSubmit={handleSubmit(onSubmit)}
         body={bodyContent}
      />
   );
};
