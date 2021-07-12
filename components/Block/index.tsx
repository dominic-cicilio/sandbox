import * as React from 'react';
import styles from '../../styles/block.module.css';

export interface BlockProps {

}

const Block: React.FC<BlockProps> = () => {
  return (
    <div className={styles.block}>Hello World</div>
   );
}

export default Block;