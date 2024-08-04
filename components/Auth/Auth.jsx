import Head from "next/head";
import { useState } from "react";
import styles from "./Auth.module.css";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { useAuth } from "../../store/AuthContext";

const AuthForm = (props) => {
  const { contextLogin } = useAuth();

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make request to backend and re-route accordingly
    let [reqRoute, routeBack] = ["/api/signup", "/login"];
    if (props.authText === "Login") {
      reqRoute = "/api/login";
      routeBack = "/";
    }
    try {
      const response = await fetch(reqRoute, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        if (reqRoute === "/api/login") {
          const fetchedUid = await response.json();
          contextLogin(fetchedUid);
        }
        router.replace(routeBack);
      } else if (response.status === 409) {
        setErrorMessage("User already exists");
      } else {
        setErrorMessage("Wrong credentials");
      }
    } catch (error) {
      console.log(error);

      setErrorMessage("Something went wrong");
    }
  };

  return (
    <>
      <Head>
        <title>Next News</title>
        <meta name="description" content="Get all your sports news!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles["auth-container"]}>
        <form className={styles["auth-form"]} onSubmit={handleSubmit}>
          <h2>{props.authText}</h2>
          <p className={styles["error-mess"]}>{errorMessage}</p>
          <hr />
          <div className={styles["form-group"]}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {props.authText === "Login" && (
            <p>
              New here? <Link href="/signup">Signup</Link>
            </p>
          )}
          <button type="submit">{props.authText}</button>
        </form>
      </div>
    </>
  );
};

export default AuthForm;
