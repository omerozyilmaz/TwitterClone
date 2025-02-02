import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSignUp = () => {
    navigate("/register");
  };

  const onSubmit = (data) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.username === data.username &&
      storedUser.password === data.password
    ) {
      alert("Giriş başarılı!");
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    } else {
      alert("Kullanıcı adı veya şifre hatalı.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("username", { required: true })}
            placeholder="Enter your username"
          />
          {errors.username && <span>Kullanıcı adı gereklidir</span>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true })}
            placeholder="Enter your password"
          />
          {errors.password && <span>Şifre gereklidir</span>}
        </div>
        <button type="submit">Login</button>
        <button type="button" onClick={onSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
