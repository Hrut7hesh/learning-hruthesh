import axios from "axios";

function main(){
  // axios.get('https://api.github.com/users/mapbox')
  // .then((response) => {
  // console.log(response.data);
  // console.log(response.status);
  // console.log(response.statusText);
  // console.log(response.headers);
  // console.log(response.config);
  // });
  // axios.all([
  //   axios.get('https://api.github.com/users/mapbox'),
  //   axios.get('https://api.github.com/users/phantomjs')
  //  ])
  //  .then(responseArr => {
  //   console.log('Date created: ', responseArr[0].data.created_at);
  //   console.log('Date created: ', responseArr[1].data.created_at);
  //  });
  // .then(axios.spread((user1, user2) => {
  //   console.log('Date created: ', user1.data.created_at);
  //   console.log('Date created: ', user2.data.created_at);
  //  }));
  //  axios.interceptors.request.use(config => {
  //   console.log('Request was sent');
  //   return config;
  //  }, error => {
  //   return Promise.reject(error);
  //  });
  //  axios.get('https://api.github.com/users/mapbox')
  //   .then(response => {
  //   console.log(response.data.created_at);
  //   });
  // axios.interceptors.response.use((response) => {
  //   console.log('Response was received');
  //   return response;
  //  }, error => {
  //   return Promise.reject(error);
  //  });
  //  axios.get('https://api.github.com/users/mapbox')
  //   .then(response => {
  //   console.log(response.data.created_at);
  //   });
  const source = axios.CancelToken.source();
  axios.get('https://media.giphy.com/media/C6JQPEUsZUyVq/giphy.gif', {
   cancelToken: source.token
  }).catch(thrown => {
   if (axios.isCancel(thrown)) {
   console.log(thrown.message);
   } else {
   }
  });
  source.cancel('Request canceled.');
  
}
main();
