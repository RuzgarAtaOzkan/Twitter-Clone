// METHODS
import methods from './methods';

// axios instance
import instance from './instance';

async function request({ endpoint, method, headers, body }) {
  if (endpoint === null || endpoint === undefined || !method) {
    throw new Error('Too few arguments in request.js');
  }

  if (!methods[method]) {
    throw new Error('Invalid method specified in reqeust.js');
  }

  if (method === methods.POST || method === methods.PUT) {
    if (!headers || !body) {
      throw new Error(
        'Too few arguments specified in request.js, headers and body cannot be null when POST or PUT request type specified',
      );
    }
  }

  try {
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
