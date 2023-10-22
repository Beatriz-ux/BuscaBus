import React from "react";
import { BsSearch } from "react-icons/bs";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import styles from "./busca.module.css";
export default function Busca() {
  return (
    <div className={styles.busca}>
      <div  className={styles.pesquisa}>
        <BsSearch size={20} />
        <span>pesquisar</span>
      </div>
      <HiOutlineAdjustmentsHorizontal />
    </div>
  );
}
