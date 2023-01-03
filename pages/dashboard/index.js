import React, { useEffect } from "react";
import Header from './../../components/Header';
import styles from './../../styles/Home.module.css';
import Button from './../../components/Button'
import { useRouter } from "next/router";

const DashboardPage = () => {
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem("isAuthenticated");
    if(!data){
      router.push("/")
    }
  }, []);

  const onLogout = () => {
    localStorage.removeItem("isAuthenticated");
    router.push("/")
  }

	return (
		<div>
			<Header title="Dashboard" />
			<main className={styles.main}>
        <h1 className={styles.title}>
          Hi, Welcome back to <a href="https://nextjs.org">The Dashboard</a>
        </h1>

				<div className={styles.grid}>
          <Button className="mt-2" onClick={onLogout} data-cy="btn-logout">Logout</Button>
        </div>
      </main>
		</div>
	)
}

export default DashboardPage;