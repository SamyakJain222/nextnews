import Image from "next/image";
import Link from "next/link";

import Logo from "../../public/favicon.ico";
import styles from "./Header.module.css";

import { useAuth } from "../../store/AuthContext";

function Header(props) {
  const { login, contextLogout } = useAuth();

  const onLogout = () => {
    contextLogout();
  };

  return (
    <header className={styles["header-bg"]} style={{backgroundImage: `url(${props.themePath})`}}>
      <h1>
        <Image src={Logo} alt="Logo" /> News Next
      </h1>
      {login === "" ? (
        <Link href="/login">Login</Link>
      ) : (
        <p onClick={onLogout}>Logout</p>
      )}
    </header>
  );
}

export default Header;
