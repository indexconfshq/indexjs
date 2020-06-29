import React from 'react';
import { Box, Grid } from 'theme-ui';
import Subtitle from '../Subtitle';
import PersonCard from '../PersonCard/PersonCard';
import AnnouncingSoon from './AnnouncingSoon';

const Day = ({ day, announcingSoon = false }) => (

  <Box
    sx={{
      pt: 52,
      backgroundColor: day.dayColor
    }}
  >
    <Subtitle subtitle={`DAY ${day.day}`} textColor={day.dayTitleColor} />
    {
      announcingSoon 
      ? 
        <AnnouncingSoon dayColor={day.dayColor} textColor={day.dayTitleColor} />
      :
      <Grid columns={[1, 1, 1, 2, 2, 4]}>
        {day.persons.map( (person, index) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }} >
            <PersonCard key={person.name + index} person={person} gradientLTR={day.ltr} index={index} presentationDay={day.day} />
          </Box>
        ))}
      </Grid>
    }
    
  </Box>

);

export default Day;
