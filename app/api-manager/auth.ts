export const login = async (payload: { code: string; password: string }) => {
  try {
    const data = await fetch(
      'https://traveldesk.v2retail.com:5050/api/Auth/login',
      {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      },
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};
