export const addressData = [
  {
    _id: "123abc456def",
    street: "Hauptstraße",
    houseNr: "1",
    postalCode: "11111",
    city: "Berlin",
    country: "Deutschland",
    lon: 53,
    lat: 54,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    _id: "456abc789def",
    street: "Nebenstraße",
    houseNr: "10",
    postalCode: "22222",
    city: "Bonn",
    country: "Deutschland",
    lon: 35,
    lat: 45,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
];

export const useUserAddress = () => {
  const values = { count: addressData.length, addresses: addressData };

  return values;
};

export default { useUserAddress };
