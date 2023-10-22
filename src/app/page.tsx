"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Botao from '../components/Botao'
import Table from '../components/Table'
import { useState } from 'react'
export default function Home() {
  const[selectRecentes, setSelectRecentes] = useState("SALOBRINHO");
  const handleSelectRecentes = (nome : string) => {
    setSelectRecentes(nome);

  };
  return (
    <main className={styles.main}>
      <Botao onSelect={handleSelectRecentes}/>
      <div className={styles.container}>
        <p>Saída {selectRecentes}</p>
        <span>Horarios de Segunda - Sexta</span>
        <Table name={selectRecentes} dia="SEGUNDA - SEXTA"/>
      </div>

    </main>
  )
}
