"use client";

import { SecurityFormHashResponse } from "@/utils/securityFormHash/securityFormHash";
import { FormEventHandler, useState } from "react";

type Props = {
  securityFormHash: SecurityFormHashResponse;
};

export default function SignUpWithLoginForm(props: Props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setPasswordConfirm] =
    useState("");

  function submit(event: React.FormEvent) {
    // Prevent Default Action
    event.preventDefault();

    alert(
      JSON.stringify({ login, password, password_confirm })
    );

    return false;
  }

  return (
    <>
      <form onSubmit={submit} method='POST'>
        <input
          type='text'
          name='login'
          onChange={(e) => setLogin(e.target.value)}
          id='login'
          placeholder='Логин'
          autoComplete='off'
          required
        />

        <input
          type='password'
          name='password'
          onChange={(e) => setPassword(e.target.value)}
          id='password'
          placeholder='Пароль'
          autoComplete='off'
          required
        />

        <input
          type='password'
          name='password_confirm'
          onChange={(e) =>
            setPasswordConfirm(e.target.value)
          }
          id='password_confirm'
          placeholder='Повторите пароль'
          autoComplete='off'
          required
        />

        <input
          type='hidden'
          name='securityFormHash'
          id='securityFormHash'
          value={props.securityFormHash.hash}
        />
        <input
          type='hidden'
          name='securityFormTimestamp'
          id='securityFormTimestamp'
          value={props.securityFormHash.timestamp}
        />

        <button type='submit'>Зарегистрироваться</button>
      </form>
    </>
  );
}
