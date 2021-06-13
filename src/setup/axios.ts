import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import apiRoutes from "../services/apiRoutes";

const apiClient = axios.create({
  baseURL: "http://167.172.189.228:8080/",
});

const mock = new MockAdapter(apiClient);

const songs = [
  {
    id: "ef9d7ec3-8536-4e73-be0d-cff3628c7204",
    title: "Song 2",
    authorName: "Author1",
    rate: 0.0,
    publicationYear: 1999,
    links: [
      {
        rel: "self",
        href: "http://167.172.189.228:8080/songs/ef9d7ec3-8536-4e73-be0d-cff3628c7204",
      },
      {
        rel: "allSongs",
        href: "http://167.172.189.228:8080/songs",
      },
    ],
  },
  {
    id: "dsfsafdsfdssdf",
    title: "Song 3",
    authorName: "Author2",
    rate: 4.68,
    publicationYear: 2021,
    links: [
      {
        rel: "self",
        href: "http://167.172.189.228:8080/songs/dsfsafdsfdssdf",
      },
      {
        rel: "allSongs",
        href: "http://167.172.189.228:8080/songs",
      },
    ],
  },
];

mock.onGet(apiRoutes.SONGS).reply(200, songs);

mock.onPut(apiRoutes.CHANGE_LISTENED_STATUS).reply(200, true);
mock.onPut(apiRoutes.RATE_SONG).reply(200, true);
mock.onPost(apiRoutes.ADD_SONG("adsadasdsa")).reply(200, [
  ...songs,
  {
    id: "zxczxczxczxcz",
    title: "Song 4",
    authorName: "Author2",
    rate: 4.68,
    publicationYear: 2021,
    links: [
      {
        rel: "self",
        href: "http://167.172.189.228:8080/songs/dsfsafdsfdssdf",
      },
      {
        rel: "allSongs",
        href: "http://167.172.189.228:8080/songs",
      },
    ],
  },
]);

// apiClient.interceptors.request.use(config => {
//     config.headers = {
//         ...config.headers,
//         'Authorization': `Basic ${btoa(`${'user'}:${'user'}`)}`
//     }

//     console.log(config.headers);

//     return config;
// })

export default apiClient;
