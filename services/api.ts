import axios from "axios";

export const api = axios.create({
  baseURL: "https://indexaevento.expertu.com.br/",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImVxdWlwZSIsImlhdCI6MTUxNjIzOTAyMn0.7g6E13Hk4PC2Jp-vkuUBJmVJR1A6al4q6hRrgEHFfLE`,
  },
});

// export const api = axios.create({
//   baseURL: 'http://localhost:3334/',
//   headers: {
//     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImVxdWlwZSIsImlhdCI6MTUxNjIzOTAyMn0.7g6E13Hk4PC2Jp-vkuUBJmVJR1A6al4q6hRrgEHFfLE`
//   }
// });

// export const apibase = axios.create({
//   baseURL: 'http://localhost:3334/',
// });

export const apibase = axios.create({
  baseURL: "https://indexaevento.expertu.com.br/",
});

// export const api = axios.create({
//   baseURL: 'https://mkt.indexadoc.com.br/api/',
//   headers: {
//     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImVxdWlwZSIsImlhdCI6MTUxNjIzOTAyMn0.7g6E13Hk4PC2Jp-vkuUBJmVJR1A6al4q6hRrgEHFfLE`
//   }
// });


