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

export const SideBar = ({onClick, name}) => {
  return (
    <Content>
      <ProfileInfo>
        <ProfileDiv>
          <ProfileImage src={ProfileIcon} />
        </ProfileDiv>
        <ProfileName>{name}</ProfileName>
      </ProfileInfo>
      <LeaveButton onClick={onClick} type="danger">Log out</LeaveButton>
    </Content>
  );
};

export default SideBar;
