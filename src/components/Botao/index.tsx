"use client";
import React, { use } from "react";
import styles from "./botao.module.css";
import { useState } from "react";
import { on } from "events";
import { capitalize } from "@/utils/formatString";

const recentes = [
  { name: "SALOBRINHO" },
  { name: "ATACADÃO" },
  { name: "TERMINAL" },
];
type props ={
  onSelect: (nome: string) => void;
}
export default function Botao({onSelect}: props) {
  const [lugares, setLugares] = useState(recentes[0].name);

  const handleLugares = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLugares(e.target.value);
    onSelect(e.target.value);
  };

  return (
    <form action="" className={styles.filtro}>
      {recentes.map((recente) => (
        <div key={recente.name}>
          <input
            type="radio"
            name="filtro"
            id={recente.name}
            value={recente.name}
            onChange={handleLugares}
          />
          <label htmlFor={recente.name} data-checked={lugares === recente.name}>
            {capitalize(recente.name)}
          </label>
        </div>
      ))}
    </form>
  );
}
