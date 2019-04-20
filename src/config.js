const language = 'english';

const forceProd = false;
let apiUrl = 'http://127.0.0.1:3000';

if (forceProd || process.env.NODE_ENV === 'production') {
  apiUrl = 'http://api.hireflow.co';
}


export {
  apiUrl,
  language
};

