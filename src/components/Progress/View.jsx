import React, { useState } from 'react';
import Modal from 'react-modal';
import { Alert } from 'antd';
import ProgressTable from './ProgressTable/ProgressTable';
import headerStyles from '../Wizzard/WizzardHeader/wizzardHeader.module.scss';
import styles from './progress.module.scss';
import { ReactComponent as ProgressBody } from '../../images/progress/progressBody.svg';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    borderRadius: '10px',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.45)',
  },
};
const alertDescription = 'Mauris velit quam, dignissim vel ullamcorper vitae, egestas eu massa. Sed nibh ante, vehicula eget consequat fermentum, Mauris velit quam, dignissim vel ullamcorper vitae, ';

const Progress = () => {
  const [modalIsOpen, setIsOpen] = useState(true);

  // eslint-disable-next-line no-unused-vars
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="container">
      <div className={headerStyles.userHeaderContainer}>
        <h1
          className={headerStyles.userHeaderHeading}
        >
          Progress
        </h1>
        <div
          className={headerStyles.userHeaderDescription}
        >
          Mauris velit quam, dignissim vel ullamcorper vitae,
          egestas eu massa. Sed nibh ante, vehicula eget consequat fermentum,
        </div>
      </div>
      <div className="my-3">
        <Alert
          description={alertDescription}
          type="info"
          showIcon
        />
      </div>
      <div>
        <ProgressTable />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="p-2">
          <div className={styles.progressModalHeader}>
            <div className={styles.modalTitle}>Progress</div>
            <div className={styles.modalDescription}>
              Mauris velit quam,
              dignissim vel ullamcorper vitae
            </div>
          </div>
          <div>
            <div className="row">
              <div className="col d-flex flex-column justify-content-evenly">
                <div className="my-2">
                  <div>
                    1. Obim Prsa
                  </div>
                  <input
                    className={styles.progressModalInput}
                  />
                </div>
                <div className="my-2">
                  <div>1. Obim Prsa</div>
                  <input
                    className={styles.progressModalInput}
                  />
                </div>
                <div className="my-2">
                  <div>1. Obim Prsa</div>
                  <input
                    className={styles.progressModalInput}
                  />
                </div>
              </div>
              <div className="col">
                <ProgressBody />
              </div>
              <div className="col d-flex flex-column justify-content-evenly">
                <div className="my-2">
                  <div>1. Obim Prsa</div>
                  <input
                    className={styles.progressModalInput}
                  />
                </div>
                <div className="my-2">
                  <div>1. Obim Prsa</div>
                  <input
                    className={styles.progressModalInput}
                  />
                </div>
                <div className="my-2">
                  <div>1. Obim Prsa</div>
                  <input
                    className={styles.progressModalInput}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col" />
              <div className="col">
                <div>Kilaza</div>
                <input
                  className={styles.progressModalInput}
                />
              </div>
              <div className="col" />
            </div>
          </div>
          <div className={styles.progressModalFooter}>
            <button
              type="button"
              style={{ width: '50%' }}
              className={`${styles.progressCancelButton} gray-color-button btn btn-light py-2`}
            >
              Cancel
            </button>
            <button
              type="button"
              style={{ width: '50%' }}
              className={`${styles.progressAddButton} primary-color-button btn btn-light py-2`}
            >
              ADD
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Progress;
