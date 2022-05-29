import React from 'react';
import {
  Form, Input, Select,
} from 'antd';
import PropTypes from 'prop-types';
import styles from '../../adminPanel.module.scss';

const { Option } = Select;
const categoryOptions = [
  <Option value="fruits">Fruits</Option>,
];

const AdminAddFoodstuff = (props) => {
  const { actions } = props;
  const [addFoodstuffForm] = Form.useForm();

  const onFoodstuffFinish = (values) => {
    const foodstuff = {
      name: values.name,
      description: values.description,
      category: values.category,
      training_time: values.training_time,
      unit: values.unit,
      energy_kilo_joules: Number(values.energy_kilo_joules),
      protein_grams: Number(values.protein_grams),
      fat_grams: Number(values.fat_grams),
      carbs_grams: Number(values.carbs_grams),
      active: true,
    };
    actions.addFoodstuff(foodstuff);
  };

  return (

    <div className="container d-flex flex-column h-100">
      <div className="header-container">
        <h1
          className={styles.adminPanelHeading}
        >
          Add Foodstuff
        </h1>
      </div>
      <div className="container-content">
        <div>
          <Form
            form={addFoodstuffForm}
            onFinish={onFoodstuffFinish}
          >
            <div
              style={{ width: '100%', maxWidth: 500 }}
            >
              <p
                className="mb-1"
              >
                Name
              </p>
              <Form.Item
                className="mb-3"
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please input name of food!',
                  },

                ]}
              >
                <Input
                  className="px-3 py-2"
                  placeholder="Name of food"
                />
              </Form.Item>
            </div>
            <div
              style={{ width: '100%', maxWidth: 500 }}
            >
              <p
                className="mb-1"
              >
                Description
              </p>
              <Form.Item
                className="mb-3"
                name="description"
                rules={[
                  {
                    required: true,
                    message: 'Please input description of food!',
                  },

                ]}
              >
                <Input
                  className="px-3 py-2"
                  placeholder="Description of food"
                />
              </Form.Item>
            </div>
            <div
              style={{ width: '100%', maxWidth: 500 }}
            >
              <p
                className="mb-1"
              >
                Category
              </p>
              <Form.Item
                className="mb-3"
                name="category"
                rules={[
                  {
                    required: true,
                    message: 'Please select category of food!',
                  },

                ]}
              >
                <Select
                  placeholder="Select category"
                >
                  {categoryOptions}
                </Select>
              </Form.Item>
            </div>
            <div
              style={{ width: '100%', maxWidth: 500 }}
            >
              <p
                className="mb-1"
              >
                Unit
              </p>
              <Form.Item
                className="mb-3"
                name="unit"
                rules={[
                  {
                    required: true,
                    message: 'Please Input Unit!',
                  },

                ]}
              >
                <Input
                  className="px-3 py-2"
                  placeholder="Unit of food"
                />
              </Form.Item>
            </div>
            <div
              style={{ width: '100%', maxWidth: 500 }}
            >
              <p
                className="mb-1"
              >
                Energy Kilo Joules
              </p>
              <Form.Item
                className="mb-3"
                name="energy_kilo_joules"
                rules={[
                  {
                    required: true,
                    message: 'Please input energy of food!',
                  },

                ]}
              >
                <Input
                  className="px-3 py-2"
                  placeholder="Energy of food"
                />
              </Form.Item>
            </div>
            <div
              style={{ width: '100%', maxWidth: 500 }}
            >
              <p
                className="mb-1"
              >
                Protein
              </p>
              <Form.Item
                className="mb-3"
                name="protein_grams"
                rules={[
                  {
                    required: true,
                    message: 'Please input protein of food!',
                  },

                ]}
              >
                <Input
                  className="px-3 py-2"
                  placeholder="Protein of food"
                />
              </Form.Item>
            </div>
            <div
              style={{ width: '100%', maxWidth: 500 }}
            >
              <p
                className="mb-1"
              >
                Carbs
              </p>
              <Form.Item
                className="mb-3"
                name="carbs_grams"
                rules={[
                  {
                    required: true,
                    message: 'Please input carbs of food!',
                  },

                ]}
              >
                <Input
                  className="px-3 py-2"
                  placeholder="Carbs of food"
                />
              </Form.Item>
            </div>
            <div
              style={{ width: '100%', maxWidth: 500 }}
            >
              <p
                className="mb-1"
              >
                Fat
              </p>
              <Form.Item
                className="mb-3"
                name="fat_grams"
                rules={[
                  {
                    required: true,
                    message: 'Please input fat of food!',
                  },

                ]}
              >
                <Input
                  className="px-3 py-2"
                  placeholder="Fat of food"
                />
              </Form.Item>
            </div>

          </Form>
        </div>
      </div>
      <div className="footer mt-auto">
        <div>
          <button
            type="button"
            onClick={() => addFoodstuffForm.submit()}
            className="primary-color-button btn btn-light"
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

const { shape, func } = PropTypes;
AdminAddFoodstuff.propTypes = {
  actions: shape({
    addFoodstuff: func.isRequired,
  }).isRequired,
};

export default AdminAddFoodstuff;
