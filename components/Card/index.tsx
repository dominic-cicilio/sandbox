import styled from '@emotion/styled/types/base';
import * as React from 'react';
import styles from './index.module.scss';

export interface CardProps {

}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className={styles.card}>
      {props.children}
    </div>
  );
}

export default Card;