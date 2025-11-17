export const getAllEmployee = async () => {
  const data = await fetch('https://traveldesk.v2retail.com:5050/api/Employee');
  const json = await data.json();
  return json;
};

export const getTravelRequestMy = async (empCode = '') => {
  const data = await fetch(
    `https://traveldesk.v2retail.com:5050/api/TravelRequest/My?EmployeeCode=${empCode}`,
  );
  const json = await data.json();
  return json;
};

export const createTravelRequest = async (payload: any) => {
  try {
    const data = await fetch(
      'https://traveldesk.v2retail.com:5050/api/TravelRequest',
      { method: 'POST', body: payload },
    );
    const json = await data.json();
    console.log(json);
  } catch (err) {
    console.error('Error while fetching...', err);
  }
};
