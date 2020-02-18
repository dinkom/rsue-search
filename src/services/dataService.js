const dataEndpoint = 'https://raw.githubusercontent.com/Right-Side-Up-Engineering/coding-challenge/master/sample.json';

export const getSearchData = () =>  {
  return new Promise((resolve, reject) => {
    fetch(dataEndpoint, {
      method: 'GET',
    })
    .then((response) => resolve(response.json()))
    .catch((error) => {
      console.log(error);
      reject(error);
    });
  });
}
