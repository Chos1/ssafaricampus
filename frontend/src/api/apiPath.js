const HOST = 'http://j7b105.p.ssafy.io/api/v1/';

const AUTH = 'auth/';
const USER = 'user/';

const apiPath = {
  auth: {
    login: () => HOST + AUTH + 'login/',
    logout: () => HOST + AUTH + 'logout/',
    reaccess: () => HOST + AUTH + 'reaccess/',
  },
  user: {
    join: () => HOST + USER + 'register/',
    delete: () => HOST + USER + 'register/company/',
  },
};

export default apiPath;