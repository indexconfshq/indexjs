import React from 'react';
import { Box } from 'theme-ui';
import Subtitle from '../Subtitle';
import PersonCard from '../PersonCard/PersonCard';

const Day = ({ day }) => (

  <Box
    sx={{
      pt: 52,
      backgroundColor: day.dayColor
    }}
  >
    <Subtitle subtitle={`DAY ${day.day}`} textColor={day.dayTitleColor} />
    <Box 
      sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'space-evenly', 
        alignItems: 'center', 
        flexDirection: day.ltr ? 'row' : 'row-reverse',
      }}
    >
      {day.persons.map( (person, index) => (
        <PersonCard key={person.name + index} person={person} gradientLTR={day.ltr} index={index} presentationDay={day.day} />
      ))}
    </Box>
  </Box>

);

export default Day;
