// METHODS
import methods from './methods';

// axios instance
import instance from './instance';

async function request({ endpoint, method, headers, body }) {
  try {
    if (
      endpoint === null ||
      endpoint === undefined ||
      !method ||
      !headers ||
      !body
    ) {
      throw new Error('Too few arguments in request.js');
    }

    if (!methods[method]) {
      throw new Error('Invalid method specified in reqeust.js');
    }

    const response = await instance[method.toLowerCase()](
      endpoint,
      body,
      headers,
    );

    return response;
  } catch (error) {
    return error;
  }
}

export default request;
