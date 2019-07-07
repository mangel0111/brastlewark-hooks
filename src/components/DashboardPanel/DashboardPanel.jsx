import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GnomeBox from '../GnomeBox';
import FilterText from '../FilterText';
import { Dashboard, Options, Title, GnomesList } from './DashboardPanelStyled';

export const DashboardPanel = ({ gnomesFiltered, gnomes }) => (
  <Dashboard>
    <Options>
      <Title>Gnomes</Title>
      <FilterText gnomes={gnomes} />
    </Options>
    <GnomesList data-testid="gnome-box-container">
      {gnomesFiltered.length !== 0 ? (
        gnomesFiltered.map(gnome => <GnomeBox key={gnome.id} gnome={gnome} />)
      ) : (
        <p data-testid="empty-gnomes-container">No gnomes to display</p>
      )}
    </GnomesList>
  </Dashboard>
);

DashboardPanel.propTypes = {
  gnomesFiltered: PropTypes.array,
  gnomes: PropTypes.array
};

export const mapStateToProps = state => ({
  gnomesFiltered: state.gnomes.gnomesFiltered,
  gnomes: state.gnomes.gnomes
});

export default connect(mapStateToProps)(DashboardPanel);
