import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { ProfileHeadLine } from "./ProfileHeadLine.jsx";
import { ProfileContentContainer } from "./ProfileContentContainer.jsx";

import { ProfileAddressList } from "./ProfileAddressList.jsx";

import styles from "./Profile.module.css";

export const Profile = () => {
  const addressData = [
    {
      street: "Nebenstraße",
      houseNumber: "11",
      postalCode: "12345",
      city: "test",
      country: "Germany",
    },
    {
      street: "Nebenstraße",
      houseNumber: "12",
      postalCode: "12345",
      city: "test",
      country: "Germany",
    },
    {
      street: "Nebenstraße",
      houseNumber: "13",
      postalCode: "12345",
      city: "test",
      country: "Germany",
    },
  ];

  const { user } = useContext(AuthContext);

  return (
    <main className="UserProfil">
      {/* <ProfileHeadLine headline="Benutzer" />

      <ProfileContentContainer title="Benutzerdaten">
        Hallo
      </ProfileContentContainer>

      <ProfileContentContainer title="Adressen">
        <ProfileAddressList addressData={addressData}>
          
        </ProfileAddressList>
      </ProfileContentContainer> */}
    </main>
  );
};

export default Profile;
