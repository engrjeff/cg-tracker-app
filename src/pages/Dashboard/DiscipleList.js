import React from "react";

import Avatar from "../../components/Avatar";
import Box from "../../components/Box";
import Button from "../../components/Button";
import ListItem from "../../components/ListItem";
import TextLead from "../../components/TextLead";

const disciples = [
  { name: "Tony Stark", email: "someemail@example.com" },
  { name: "Bruce Banner", email: "someemail@example.com" },
  { name: "Clint Barton", email: "someemail@example.com" },
  { name: "Steve Rogers", email: "someemail@example.com" },
  { name: "Stephen Strange", email: "someemail@example.com" },
  { name: "Peter Parker", email: "someemail@example.com" },
];

function DiscipleList(props) {
  const selectedDisciple = "Tony Stark";

  return (
    <Box rounded>
      <Box borderedBottom className='d-flex align-items-center'>
        <TextLead>Your Disciples</TextLead>
        <Button text='+ Add' className='ml-8' size='sm' />
      </Box>
      <Box borderedBottom>
        <Box className='-mt-2'>
          {disciples.map((d, index) => (
            <ListItem
              isSelected={selectedDisciple === d.name}
              key={index}
              Avatar={() => <Avatar text={d.name} />}
              primarytext={d.name}
              subtext={d.email}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default DiscipleList;
