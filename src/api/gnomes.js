import fetchApi from '../utils/api-utils';
const gnomesUrl =
  'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

export const fetchGnomes = () => {
  return fetchApi(gnomesUrl, {
    headers: {
      'content-type': 'text/plain; charset=utf-8'
    },
    cache: 'force-cache'
  });
};

export const filterGnomes = ({ gnomes, filterText }) => {
  const gnomesFiltered = gnomes.filter(gnome => {
    if (filterText) {
      return gnome.name.toLowerCase().includes(filterText.toLowerCase());
    }
    return true;
  });
  return gnomesFiltered;
};
