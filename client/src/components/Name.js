import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Moment from "react-moment";

const Wrapper = styled.div`
  margin-top: 12px;
  margin-bottom: 14px;
  display: inline-block;
  color: ${props =>
    props.theme.type === "light" ? "#444444" : props.theme.color};
  font-size: 15px;
  word-break: break-word;
  line-height: 155%;
`;

const Time = styled.span`
  margin-left: 5px;
  display: inline-block;
  color: ${props => props.theme.subColor};
  font-size: 12px;
`;

const Name = ({ children, time, host }) => {
  return (
    <Wrapper>
      {host && (
        <span role="img" aria-label="logo">
          👑&nbsp;
        </span>
      )}
      {children}
      {time && (
        <Time>
          <Moment local format={"H:mm a"}>
            {time}
          </Moment>
        </Time>
      )}
    </Wrapper>
  );
};

Name.propTypes = {
  children: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  host: PropTypes.bool
};

export default Name;
