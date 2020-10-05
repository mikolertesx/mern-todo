import React from "react";
import {
  Content,
  ProfileDiv,
  ProfileInfo,
  ProfileImage,
  ProfileName,
  LeaveButton,
} from "./components";
import ProfileIcon from "../../../../static/images/user.png";

export const SideBar = () => {
  return (
    <Content>
      <ProfileInfo>
        <ProfileDiv>
          <ProfileImage src={ProfileIcon} />
        </ProfileDiv>
        <ProfileName>Name of user</ProfileName>
      </ProfileInfo>
      <LeaveButton type="danger">Log out</LeaveButton>
    </Content>
  );
};

export default SideBar;
