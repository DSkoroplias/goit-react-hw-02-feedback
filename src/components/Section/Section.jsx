import PropTypes from 'prop-types';

import styles from '../styles/styles.module.scss';

const Section = ({ children, title }) => {
  return (
    <div className={styles.block_result}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Section;

Section.prototypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
