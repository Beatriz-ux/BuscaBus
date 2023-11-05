import React from "react";
import styles from "./table.module.css";
import horarios from "@/models/horarios";
import { capitalize } from "@/utils/formatString";
import { BsClockHistory } from "react-icons/bs";
import { MagicMotion } from "react-magic-motion";

type Props = {
  name: string;
  dia: string;
};

export default function Table(props: Props) {

  function checkOutdated(horario: string) {
    let horarioAtual = new Date().getHours();
    let minutosAtual = new Date().getMinutes();
    let horarioOnibus = parseInt(horario.split(":")[0]);
    let minutosOnibus = parseInt(horario.split(":")[1]);

    let minutosAtualTotal = horarioAtual * 60 + minutosAtual;
    let minutosOnibusTotal = horarioOnibus * 60 + minutosOnibus;


    return ((minutosAtualTotal-minutosOnibusTotal) > 60);
  }

  return (
    <div className={styles.tabela}>
      <div className={styles.cabecalho}>
        <div>
          <BsClockHistory />
        </div>
        <div>
          <p>Destino</p>
        </div>
        <div>
          <p>Via</p>
        </div>
        <div>
          <p>Empresa</p>
        </div>
      </div>
      <MagicMotion>
      <div className={styles.conteudo}>
        {horarios.map((horario, index) =>
          props.name == horario.origem && props.dia == horario.dia ? (
            <div
              key={index}
              className={styles.linha}
              data-outdated={checkOutdated(horario.horario)}
              //data-outdated={!!horario.outdated}
            >
              <div>
                <p>{horario.horario}</p>
              </div>
              <div>
                <p>{capitalize(horario.destino)}</p>
              </div>
              <div>
                <p>{capitalize(horario.via)}</p>
              </div>
              <div>
                <p>{horario.empresa}</p>
              </div>
            </div>
          ) : null
        )}
      </div>
      </MagicMotion>
    </div>
  );
}
