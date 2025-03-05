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

  return (
    <>
    <Dashboard>Dashboard.jsx

      <Sidebar>Sidebar.jsx
          <SidebarTile höhe="33%" props={color: white, title="Kategorien"}>
              <CategoryShort>Haus</CategoryShort>
          </SidebarTile>
          <SidebarTile höhe="33%" props={color: white, title="Threads"}>
              <ThreadShort>Licht brennt</ThreadShort>
          </SidbarTile>
          <SidebarTile höhe="33%" props={color: white, title="Nachrichten"}>
              <UserShort>Bahman</UserShort>
              <UserShort>Andre</UserShort>
          </SidbarTile>
      </Sidebar>
      <Content>
          <Title>Haus</Title>
          <MsgList>
            loop{
              <Msg props={dbmsg}>dbmsg.msg dbmsg.from dbmsg.datu</Msg>
            }
            {/* <Msg>B</Msg> */}
            {/* <Msg>.....</Msg> */}
          </MsgList>
      </Content>

const SidebarTile = ({color, title}){
  return <div style={color}>
    <h2>{title}</h2>
  </div>
}



    </Dashboard>
      <ProfileUserSaveAddress></ProfileUserSaveAddress>
      <main className="UserProfil">
        <ProfileHeadLine headline="Benutzer" />

        <ProfileContentContainer title="Benutzerdaten">
          <ProfileUserData neuRendern={neuRendern}></ProfileUserData>
        </ProfileContentContainer>

        <ProfileContentContainer title="Adressen">
          <ProfileUserAddressList
            neuRendern={neuRendern}
          ></ProfileUserAddressList>
        </ProfileContentContainer>
      </main>
    </>
  );
};

export default Profile;
