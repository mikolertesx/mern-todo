import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from "../redux/actions";
import { connect } from "react-redux";

// Page that will always redirect to ToDos.
const NoAuthPage = (props) => {
  const onFailUrl = props.onFailUrl;
  const childLessProps = { ...props };

  delete childLessProps["children"];
  delete childLessProps["onFailUrl"];

  if (props.isLoggedIn === true) {
    return <Redirect to={onFailUrl} />;
  }
  return <>{React.cloneElement(props.children, childLessProps)}</>;
};

// Page that will always need auth.
const AuthPage = (props) => {
  const onFailUrl = props.onFailUrl;
  const childLessProps = { ...props };

  delete childLessProps["children"];
  delete childLessProps["onFailUrl"];

  if (props.isLoggedIn === false) {
    return <Redirect to={onFailUrl} />;
  }
  return <>{React.cloneElement(props.children, childLessProps)}</>;
};

export const connectedPageTemplate = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NoAuthPage));

export const authRequiredTemplate = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AuthPage));