const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '30da1ff6',
            s: 'avengers'
        }
    });
    console.log(response.data);
}

fetchData();