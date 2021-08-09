import * as React from 'react';
import styles from './index.module.scss';

export interface CardListProps {

}

const CardList: React.FC<CardListProps> = (props) => {
  return (<div className={styles.cardList}>
    {props.children}
  </div> );
}

export default CardList;