import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import React, { useId } from "react";

interface HomeSectionProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

const HomeSection = (props: HomeSectionProps) => {
  const { children, title } = props;
  const id = useId();

  return (
    <div id={id}>
      <Container>
        <h1>{title}</h1>
        <Divider />
        <div>{children}</div>
      </Container>
    </div>
  );
};

export default HomeSection;
