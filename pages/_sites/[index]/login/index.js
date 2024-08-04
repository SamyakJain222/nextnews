import Head from "next/head";
import { useState } from "react";
import AuthForm from "../../../../components/Auth/Auth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <Head>
        <title>Next News</title>
        <meta name="description" content="Get all your sports news!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthForm authText="Login" />
    </>
  );
};

export default LoginForm;
