export const storeLocation = async () => {
    const data = await fetch(
      'https://traveldesk.v2retail.com:5050/api/StoreLocation',
    );
    const json = await data.json();
    return json;
}

