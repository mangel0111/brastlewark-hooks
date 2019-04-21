import { call, put } from 'redux-saga/effects';
import createActionsWatchers from '../utils/create-actions-watchers';
import { isLoading } from '../actions/view';
import { fetchGnomes, filterGnomes } from '../api/gnomes';
import { gnomesFetched, gnomeFetched, gnomesFiltered } from '../actions/gnomes';


export function* fetchGnomesSaga(option) {
	yield put(isLoading(true));
	const result = yield call(fetchGnomes, option);
	yield put(isLoading(false));
	if (!result.error) {
		yield put(gnomesFetched(result));
		yield put(gnomesFiltered(result.Brastlewark));
	}
}

export function* filterGnomesSaga(option) {
	const result = yield call(filterGnomes, option);
	yield put(gnomesFiltered(result));
}

export function* fetchGnomeSaga(option) {
	yield put(isLoading(true));
	const result = yield call(fetchGnomes, option);
	yield put(isLoading(false));
	if (!result.error) {
		const gnome = result.Brastlewark.find(gnome => gnome.id === option.params.id);
		yield put(gnomeFetched(gnome));
		yield put(gnomesFetched(result));
	}
}



export default createActionsWatchers({
	FETCH_GNOMES: fetchGnomesSaga,
	FETCH_GNOME: fetchGnomeSaga,
	FILTER_GNOMES: filterGnomesSaga
});
