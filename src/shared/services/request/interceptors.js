const requestInterceptor = (config) => {
  return config;
};

const requestErrorInterceptor = (error) => {
  return Promise.resolve(error);
};

const responseInterceptor = (response) => {
  return response;
};

const responseErrorInterceptor = (error) => {
  return Promise.resolve(error);
};

export {
  requestInterceptor,
  requestErrorInterceptor,
  responseInterceptor,
  responseErrorInterceptor,
};
