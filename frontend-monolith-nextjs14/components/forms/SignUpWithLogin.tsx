"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, ref } from "yup";

// Yup schema to validate the form
const validationSchema = object().shape({
  login: string().trim().required().min(1),
  password: string().trim().required().min(1),
  password_confirm: string().trim().required().min(1),
});

type FormData = {
  login: string;
  password: string;
  password_confirm: string;
};

export default function SignUpWithLoginForm<NextPage>() {
  const formOptions = {
    resolver: yupResolver(validationSchema),
  };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } =
    useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data: FormData) {
    // display form data on success
    alert(
      "SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4)
    );
    return false;
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} method='POST'>
        <input
          type='text'
          {...register("login")}
          id='login'
          placeholder='Логин'
          autoComplete='off'
          required
        />
        {typeof errors.login?.message === "string" && (
          <p>{errors.login.message}</p>
        )}

        <input
          type='password'
          {...register("password")}
          id='password'
          placeholder='Пароль'
          autoComplete='off'
          required
        />
        {typeof errors.password?.message === "string" && (
          <p>{errors.password.message}</p>
        )}

        <input
          type='password'
          {...register("password_confirm")}
          id='password_confirm'
          placeholder='Повторите пароль'
          autoComplete='off'
          required
        />

        <button type='submit'>Зарегистрироваться</button>
        {typeof errors.password_confirm?.message ===
          "string" && (
          <p>{errors.password_confirm.message}</p>
        )}
      </form>
    </>
  );
}
