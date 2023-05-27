import axios from "axios";

export const api = axios.create({
    baseURL: 'https://expertu.com.br/api/',
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImVxdWlwZSIsImlhdCI6MTUxNjIzOTAyMn0.7g6E13Hk4PC2Jp-vkuUBJmVJR1A6al4q6hRrgEHFfLE`
    }
});


// export const api = axios.create({
//   baseURL: 'http://localhost:17586/api/',
//   headers: {
//     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImVxdWlwZSIsImlhdCI6MTUxNjIzOTAyMn0.7g6E13Hk4PC2Jp-vkuUBJmVJR1A6al4q6hRrgEHFfLE`
//   }
// });

// export const apibase = axios.create({
//   baseURL: 'http://localhost:17586/api/',
// });

export const apibase = axios.create({
  baseURL: 'https://expertu.com.br/api/',
});

// export const api = axios.create({
//   baseURL: 'https://mkt.indexadoc.com.br/api/',
//   headers: {
//     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImVxdWlwZSIsImlhdCI6MTUxNjIzOTAyMn0.7g6E13Hk4PC2Jp-vkuUBJmVJR1A6al4q6hRrgEHFfLE`
//   }
// });

