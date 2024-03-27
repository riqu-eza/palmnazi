import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from './firebase'; // Import your Firebase configuration
import { TextField, Button, Container, Typography, Grid } from '@mui/material';

const AdminPage = () => {
  // Define state variables to store form data for each category
  const [activityName, setActivityName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [nightlifeName, setNightlifeName] = useState('');
  const [serviceName, setServiceName] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  // Function to handle form submission for activities
  const handleActivitySubmit = async (e) => {
    e.preventDefault();
    try {
      // Add data to Firestore
      await addDoc(collection(firestore, 'activities'), {
        name: activityName,
        // Add other attributes for activities here
      });
      console.log('Activity added successfully!');
      // Clear form fields after submission
      setActivityName('');
      // Clear other fields for other categories
    } catch (error) {
      console.error('Error adding activity: ', error);
    }
  };

  // Similar functions for other categories

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Admin Dashboard
      </Typography>
      <Grid container spacing={3}>
        {/* Activities Form */}
        <Grid item xs={12}>
          <Typography variant="h6">Add New Activity</Typography>
          <form onSubmit={handleActivitySubmit}>
            <TextField
              label="Activity Name"
              value={activityName}
              onChange={(e) => setActivityName(e.target.value)}
              fullWidth
              required
            />
            {/* Add input fields for other attributes of activities */}
            <Button type="submit" variant="contained" color="primary">
              Add Activity
            </Button>
          </form>
        </Grid>
        {/* Similar sections for other categories */}
      </Grid>
    </Container>
  );
};

export default AdminPage;
