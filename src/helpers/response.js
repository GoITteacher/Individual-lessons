export const Responses = {
  _200: (data) => {
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  },

  _400: (err) => {
    return {
      statusCode: 400,
      body: JSON.stringify(err),
    };
  },
};
