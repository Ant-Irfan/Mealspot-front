import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Alert } from 'antd';
import PropTypes from 'prop-types';
import ProgressTable from './ProgressTable/ProgressTable';
import ProgressChart from './ProgressChart/ProgressChart';
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

const Progress = ({ actions, progress }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [chest, setChest] = useState(null);
  const [weight, setWeight] = useState(null);
  const [hip, setHip] = useState(null);
  const [upperArm, setUpperArm] = useState(null);
  const [thigh, setThigh] = useState(null);
  const [calf, setCalf] = useState(null);
  const [waist, setWaist] = useState(null);

  useEffect(() => {
    actions.getProgressForUser();
  }, []);

  // eslint-disable-next-line no-unused-vars
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const addProgress = () => {
    const postData = {
      weight,
      circumference_chests:chest,
      circumference_waist:waist,
      circumference_hip:hip,
      circumference_upper_arm:upperArm,
      circumference_thigh:thigh,
      circumference_calf:calf,
    };
    // eslint-disable-next-line no-console
    console.log(postData);
    actions.addProgressForUser(postData);
    closeModal();
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
        <ProgressTable
          progress={progress}
          openModal={openModal}
        />
      </div>
      <div className="mt-5">
        <ProgressChart
          progress={progress}
        />
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
                    1. Chest
                  </div>
                  <input
                    className={styles.progressModalInput}
                    onChange={(e) => setChest(e.target.value)}
                  />
                </div>
                <div className="my-2">
                  <div>2. Upper Arm</div>
                  <input
                    className={styles.progressModalInput}
                    onChange={(e) => setUpperArm(e.target.value)}
                  />
                </div>
                <div className="my-2">
                  <div>3. Hip</div>
                  <input
                    className={styles.progressModalInput}
                    onChange={(e) => setHip(e.target.value)}
                  />
                </div>
              </div>
              <div className="col">
                <ProgressBody
                  progress={progress}
                />
              </div>
              <div className="col d-flex flex-column justify-content-evenly">
                <div className="my-2">
                  <div>4. Waist</div>
                  <input
                    className={styles.progressModalInput}
                    onChange={(e) => setWaist(e.target.value)}
                  />
                </div>
                <div className="my-2">
                  <div>5. Thigh</div>
                  <input
                    className={styles.progressModalInput}
                    onChange={(e) => setThigh(e.target.value)}
                  />
                </div>
                <div className="my-2">
                  <div>6. Calf</div>
                  <input
                    onChange={(e) => setCalf(e.target.value)}
                    className={styles.progressModalInput}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col" />
              <div className="col">
                <div>Weight</div>
                <input
                  onChange={(e) => setWeight(e.target.value)}
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
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="button"
              style={{ width: '50%' }}
              className={`${styles.progressAddButton} primary-color-button btn py-2`}
              onClick={addProgress}
            >
              ADD
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const { shape, func } = PropTypes;
Progress.propTypes = {
  actions: shape({
    getProgressForUser: func.isRequired,
    addProgressForUser: func.isRequired,
  }).isRequired,
  progress: Array.isRequired,
};

export default Progress;
