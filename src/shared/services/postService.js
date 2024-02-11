import masterInstance from "./request/masterRequest";

const postService = (baseURL, payload) => {
  const requestBody = {
    ...payload,
    agent_code: process.env.NEXT_PUBLIC_AGENT_CDOE,
    agent_token: process.env.NEXT_PUBLIC_AGENT_TOKEN,
  };
  const request = masterInstance.post(baseURL, requestBody);

  const promise = request
    .then((res) => {
      const key = Object.keys(res.data)[2];
      let reuslt = res.data[key];
      if(payload.method == "game_launch") {
        reuslt = res.data;
      }
      return { success: true, data: reuslt };
    })
    .catch((err) => {
      return { success: false, data: { message: err.message } };
    });

  return { promise };
};

export default postService;
