import styles from "@/styles/cards.module.css";
import { PropsWithChildren } from "react";

export interface CardsProps extends PropsWithChildren {}

export function Cards({ children }: PropsWithChildren) {
    return <ul className={styles.cardsList}>{children}</ul>;
}
