import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { ProfileHeadLine } from "./ProfileHeadLine.jsx";
import { ProfileContentContainer } from "./ProfileContentContainer.jsx";
import { ProfileUserData } from "./ProfileUserData.jsx";
import { ProfileUserAddressList } from "./ProfileUserAddressList.jsx";
import ProfileUserSaveAddress from "./ProfileUserSaveAddress.jsx";

export const Profile = () => {
  const { user } = useContext(AuthContext);

  const [aktualisieren, setAktualisieren] = useState(false);

  const neuRendern = () => {
    setAktualisieren((prevAktualisieren) => !prevAktualisieren);
  };

  return <></>;
};

export default Profile;
