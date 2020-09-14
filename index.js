const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '30da1ff6',
            i: "tt0848228"
        }
    });
    console.log(response.data);
}

fetchData();