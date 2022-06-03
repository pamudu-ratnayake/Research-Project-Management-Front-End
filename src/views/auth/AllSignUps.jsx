import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import StudentRegister from "./StudentRegister";
import StaffRegister from "./StaffRegister";

import { Col } from "reactstrap";

const AllSignUps = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <div style={{marginLeft:550}}>
    <Col lg="12" md="6" className="align-center" >
      <Col md="6">
      <Tabs  className="align-center bg-gradient-secondary opacity-7 rounded-top" value={value} indicatorColor="primary" textColor="primary" onChange={handleChange} aria-label="disabled tabs example">
        <Tab label="As A Student" style={{ paddingLeft:80, paddingRight: 60 }} />
        <Tab label="As A Staff Member" style={{ paddingLeft:80, paddingRight: 60 }} />
      </Tabs>
      </Col>
      <TabPanel value={value} index={0}>
        <StudentRegister handleChange={handleChange} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <StaffRegister />
      </TabPanel>
    </Col>
    </div>
  );
};

export default AllSignUps;
