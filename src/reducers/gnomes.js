import { handleActions } from 'redux-actions';

export const gnomesState = {
	gnomes: [],
	gnomesFiltered: [],
	gnome: {}
};

export default handleActions({
	GNOMES_FETCHED: (state, { payload }) =>
		Object.assign({}, state, {
			gnomes: payload.Brastlewark
		}),
	GNOMES_FILTERED: (state, { payload }) =>
		Object.assign({}, state, {
			gnomesFiltered: payload
		}),
	GNOME_FETCHED: (state, { payload }) =>
		Object.assign({}, state, {
			gnome: payload
		})
}, gnomesState);
