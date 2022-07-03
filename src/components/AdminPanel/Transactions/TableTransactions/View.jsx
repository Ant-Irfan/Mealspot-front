/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { SearchOutlined, UserOutlined, AlignCenterOutlined } from '@ant-design/icons';
import {
  Menu, Input, Select,
} from 'antd';

import styles from '../../adminPanel.module.scss';

const { Option } = Select;
const { Search } = Input;
const filterOptions = [
  <Option value="user_id">User ID</Option>,
];
const AdminTransactions = ({
  actions, transactions, history, total_pages, current_page,
}) => {
  const [first, setfirst] = useState(false);
  const [filter, setfilter] = useState(null);
  const pagination = [];
  const toViewUser = (id) => {
    // eslint-disable-next-line react/prop-types
    history.push(`users/${id}`);
  };

  // eslint-disable-next-line no-console
  const onSearch = (value) => {
    console.log(filter, value);
    if (value === '' || value === null || value === undefined) {
      actions.getTransactions(1);
    } else { actions.getTransactionsByFilter(filter, value); }
  };

  const onFilterChange = (value) => {
    setfilter(value);
  };

  useEffect(() => {
    actions.getTransactions(1);
  }, []);

  if (total_pages) {
    for (let index = 0; index < total_pages; index++) {
      pagination.push(index);
    }
  }

  const changePage = (page) => {
    actions.getTransactions(page);
  };

  return (
    <div className="d-flex flex-column h-100">
      <div className="container d-flex flex-column">
        <div className="header-container d-flex justify-content-between">
          <h1
            className={styles.adminPanelHeading}
          >
            Transactions
          </h1>
        </div>
        <div className="d-flex">
          <Search
            onSearch={onSearch}
            placeholder="input search text"
            size="large"
            style={{ maxWidth: 500 }}
          />
          <Select
            onChange={onFilterChange}
            style={{ minWidth: 120 }}
            placeholder="Filter"
          >
            {filterOptions}
          </Select>
        </div>
      </div>
      <div className="container mt-3">
        <table className="table">
          <thead>
            <tr className="table-secondary">
              <th scope="col">#</th>
              <th scope="col">User ID</th>
              <th scope="col">Email</th>
              <th scope="col">Date</th>
              <th scope="col">Payment Method</th>
              <th scope="col">Price</th>
              <th scope="col">Currency</th>
            </tr>
          </thead>
          <tbody>
            {
            transactions.map((transaction, i) => (
              <tr
                onClick={() => toViewUser(user.id)}
              >
                <th scope="row">{i + 1}</th>
                <td>{transaction.user_id}</td>
                <td>{transaction.user_id}</td>
                <td>{transaction.created_at}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.currency}</td>
              </tr>
            ))
        }
          </tbody>
        </table>
      </div>
      <div className="container d-flex mt-auto">
        {
          pagination.map((page, i) => (
            <div
              onClick={() => changePage(i + 1)}
              className={current_page === i + 1 ? styles.pagginationBoxActive
                : styles.pagginationBox}
            >
              {i + 1}
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default AdminTransactions;
