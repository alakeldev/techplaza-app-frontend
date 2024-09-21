import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import styles from '../styles/SearchFilter.module.css';

const SearchFilter = ({ searchTerm, onSearchChange }) => {
    return (
        <div className={styles.searchFilter}>
            <Form.Control
                type="text"
                placeholder="Search by country..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
};

SearchFilter.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    onSearchChange: PropTypes.func.isRequired,
};

export default SearchFilter;
