import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header';
import ImageBox from '../ImageBox';
import { fetchGnome } from '../../actions/gnomes';
import { ProfileHeader, Image, DescriptionBlock, Professions } from './GnomeDetailsStyled';
import { useFetching } from '../../utils/hooks-utils';

const goToFriend = ({ friend, gnomes }) => {
	const gnomeSelected = gnomes.find(gnome => gnome.name === friend);
	if (gnomeSelected) {
		window.location = `/gnomes/${gnomeSelected.id}`;
	}
};


export const GnomeDetails = ({ gnome, gnomes, fetchGnomesAPI, match }) => {
	useFetching(() => fetchGnomesAPI(parseInt(match.params.id)));

	if (gnome.id === undefined) {
		return null;
	}
	return (
		<div>
			<Header />
			<ProfileHeader>
				<Image>
					<ImageBox
						src={gnome.thumbnail}
						alt={`Profile: ${gnome.name}`}
						width="150px"
						height="150px"
					/>
				</Image>
				<div>{gnome.name}</div>
				<DescriptionBlock><span>Age</span>{gnome.age}</DescriptionBlock>
				<DescriptionBlock><span>Weight</span>{gnome.weight}</DescriptionBlock>
				<DescriptionBlock><span>Height</span>{gnome.height}</DescriptionBlock>
				<DescriptionBlock><span>Hair Color</span>{gnome.hair_color} </DescriptionBlock>
				{
					gnome.professions &&
					<Professions>
						Professions:<ul>{gnome.professions.map(profession => (<li key={profession}> {profession} </li>))}{gnome.professions.length === 0 && 'This gnome do not have any Profession'}</ul>
					</Professions>
				}
				{
					gnome.friends &&
					<Professions>
						Friends:<ul>{gnome.friends.map(friend => (<li onClick={() => goToFriend({ friend, gnomes })} key={friend}> {friend} </li>))}{gnome.friends.length === 0 && 'This gnome do not have any Friends'}</ul>
					</Professions>
				}

			</ProfileHeader>
		</div>);

};

GnomeDetails.propTypes = {
	gnome: PropTypes.object,
	gnomes: PropTypes.array,
	match: PropTypes.object,
	fetchGnomesAPI: PropTypes.func
};

export const mapStateToProps = (state) => ({
	gnome: state.gnomes.gnome,
	gnomes: state.gnomes.gnomes
});


const mapDispatchToProps = dispatch => ({
	fetchGnomesAPI: (id) => dispatch(fetchGnome({
		params: {
			id
		}
	}))
});

export default connect(mapStateToProps, mapDispatchToProps)(GnomeDetails);
