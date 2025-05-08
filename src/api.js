// api.js

const path = 'https://disease.sh/v3/covid-19/countries';

const headers = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
};

function getCountry(country) {
    return fetch(`${path}/${country}`, headers)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            return response.json();
        })
        .catch((error) => {
            console.error('Erro ao buscar dados:', error);
            throw error;
        });
}


const api = {
    getCountry
};

export default api;
