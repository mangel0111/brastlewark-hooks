import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Filter } from './FilterTextStyled';
import { filterGnomes } from '../../actions/gnomes';
import Input from '../Input';

export const FilterText = ({ filterText, gnomes }) => (
  <Filter>
    <Input
      data-testid="gnomes-filter-input"
      type="text"
      width="150px"
      isFilter
      title="Filter"
      onChange={({ target }) =>
        filterText({ filterText: target.value, gnomes })
      }
    />
  </Filter>
);

FilterText.propTypes = {
  filterText: PropTypes.func,
  gnomes: PropTypes.array
};

const mapDispatchToProps = dispatch => ({
  filterText: ({ filterText, gnomes }) =>
    dispatch(
      filterGnomes({
        filterText,
        gnomes
      })
    )
});

export default connect(
  null,
  mapDispatchToProps
)(FilterText);
