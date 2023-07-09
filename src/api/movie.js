const getMovies = () => {
  const promise = new Promise((resolve, reject) => {
    fetch(`https://www.omdbapi.com/?s=marvel&apikey=cad57c10`)
      .then((dataJSON) => {
        const data = dataJSON.json();
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
  return promise;
};

export default getMovies;
