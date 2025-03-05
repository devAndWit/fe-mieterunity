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
      {/* <Header>
        <Nav>
          <Logo></Logo>
          <UserLog>
            <Login></Login>
            <SignIn></SignIn>
            <SignUp></SignUp>
          </UserLog>
        </Nav>
      </Header>

      <Footer>Links</Footer> */}

      <PrivacyPolicy>
        <Header></Header>
        <HeadLine>Datenschutz</HeadLine>
        <Section>Datenschutzerklärung</Section>
        <Footer>Links</Footer>
      </PrivacyPolicy>

      <LegalNotice>
        <Header></Header>
        <HeadLine></HeadLine>
        <Section>Angaben gemäß §5 TMG</Section>
        <Footer>Links</Footer>
      </LegalNotice>

      <Conatact>
        <Header></Header>
        <HeadLine></HeadLine>
        <Section>Kontaktieren Sie uns</Section>
        <Section>Email</Section>
        <Section>
          <ContactForm></ContactForm>
        </Section>
        <Section>
          Folgt uns
          <ContactSocial>Instagram</ContactSocial>
          <ContactSocial>Telegram</ContactSocial>
          <ContactSocial>Facebook</ContactSocial>
        </Section>
        <Footer>Links</Footer>
      </Conatact>

      <Home SPA>
        <Header></Header>
        <HeadLine></HeadLine>
        <Section>
          <SectionTitle>Deine Stimme zählt</SectionTitle>
          <SectionText></SectionText>
          <SectionImage></SectionImage>
        </Section>
        <Section>
          <CardList>
            <Card1>Austausch leich gemacht</Card1>
            <Card2>Gemeinsam stark</Card2>
            <Card3>Sich & pseudonym</Card3>
          </CardList>
        </Section>
        <Section>
          <SectionTitle>Unsere Vision</SectionTitle>
          <SectionText>Über uns</SectionText>
          <SectionImage></SectionImage>
        </Section>
        <Section>Text</Section>
        <Footer>Links</Footer>
      </Home>

      <Profile>
        <Header></Header>
        <ProfileHeader></ProfileHeader>
        <Sidebar>
          <SidebarItem>UserDataShort</SidebarItem>
          <SidebarItem>UserLocationsShort</SidebarItem>
          <SidebarItem>UserSettingsShort</SidebarItem>
        </Sidebar>
        <Content>
          <UserData></UserData>
          <UserLocations></UserLocations>
          <UserSettings></UserSettings>
        </Content>
        <Footer></Footer>
      </Profile>
    </>
  );
};

export default Profile;
