export const getBillRequestMy = async (empCode: string) => {
  try {
    const data = await fetch(
      `https://traveldesk.v2retail.com:5050/api/BillRequest/My?employeeCode=${empCode}`,
    );
    const json = await data.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};
