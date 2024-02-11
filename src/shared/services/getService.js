import masterInstance from "./request/masterRequest";

const getService = ( method) => {
  const payload = {
    method: method,
    agent_code: process.env.NEXT_PUBLIC_AGENT_CODE,
    agent_token: process.env.NEXT_PUBLIC_AGENT_TOKEN,
  };

  const request = masterInstance.get(payload);

  const promise = request
    .then((res) => {
      // const {  } = res;
      // console.log("data =>", data);
      return { success: true, data: data };
    })
    .catch((err) => {
      return { success: false, data: { message: err.message } };
    });

  return { promise };
};

export default getService;
