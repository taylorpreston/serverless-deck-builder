import React from "react";
import { useTheme } from "@nextui-org/react";
const AppWrapper = (props) => {
  const { children } = props;
  const theme = useTheme();
  const styles = {
    height: "100vh",
    width: "100%",
  };
  return <div style={styles}>{children}</div>;
};

export default AppWrapper;
