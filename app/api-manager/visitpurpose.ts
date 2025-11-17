export const getAllVisitPurpose = async () => {
    const data = await fetch(
      'https://traveldesk.v2retail.com:5050/api/VisitPurpose',
    );
    const json = await data.json();
    return json;
}