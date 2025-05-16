"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import s from "./page.module.scss";
import { useRouter } from "next/navigation";

interface IFormInput {
  admin: string;
  password: string;
}

export default function LoginStore() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const [formSubmissions, setFormSubmissions] = useState<IFormInput[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useRouter();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (data.admin === "Nora Toktobekova" && data.password === "1234567890") {
      setIsAdmin(true);
      navigate.push("admin/users");
    } else {
      alert("Неправильные данные");
    }
  };

  return (
    <div className={s.store}>
      <div className={s.box}>
        <h1>Admin Login</h1>
        <p className={s.subtitle}>
          Enter your credentials to access the admin panel
        </p>
        <form className={s.inputForm} onSubmit={handleSubmit(onSubmit)}>
          <label>
            Username
            <input
              type="text"
              placeholder="admin"
              {...register("admin", { required: true, maxLength: 20 })}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              placeholder="*****"
              {...register("password", { required: true })}
            />
          </label>
          <button type="submit">Login</button>
          <pre className={s.demoHint}>
            Demo: username "admin", password "admin"
          </pre>
        </form>
      </div>
    </div>
  );
}
