import React from "react";
import styles from "./table.module.css";
import horarios from "@/models/horarios";
import { capitalize } from "@/utils/formatString";
import { BsClockHistory } from "react-icons/bs";

type Props = {
  name: string;
  dia: string;
};

export default function Table(props: Props) {
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

      <div className={styles.conteudo}>
        {horarios.map((horario, index) =>
          props.name == horario.origem && props.dia == horario.dia ? (
            <div
              key={index}
              className={styles.linha}
              data-outdated={!!horario.outdated}
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
    </div>
  );
}
