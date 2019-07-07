import React from 'react';
import PropTypes from 'prop-types';
import ImageBox from '../ImageBox';
import { Name, GnomeBoxPanel } from './GnomeBoxStyled';

export const GnomeBox = ({ gnome }) => (
  <GnomeBoxPanel
    data-testid={`gnome-box-item-${gnome.id}`}
    onClick={() => (window.location = `/gnomes/${gnome.id}`)}
    key={gnome.id}
  >
    <ImageBox src={gnome.thumbnail} alt={`Profile: ${gnome.name}`} />
    <Name>{gnome.name}</Name>
  </GnomeBoxPanel>
);

GnomeBox.propTypes = {
  gnome: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    thumbnail: PropTypes.string
  })
};

export default GnomeBox;
