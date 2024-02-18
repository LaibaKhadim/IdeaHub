import { Box, Button, Grid, Typography, TextField } from '@mui/material';
import React, { useState} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';


import PersonIcon from '@mui/icons-material/Person';
import Navbar from './Navbar'
import AddIcon from '@mui/icons-material/Add';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Congo, Democratic Republic of the',
  'Congo, Republic of the',
  'Costa Rica',
  'Côte d’Ivoire',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kosovo',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia, Federated States of',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'North Korea',
  'North Macedonia',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
]

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


export default function AddInformation() {
  const { id} = useParams();
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object
    const formData = new FormData();
    formData.append('file', file);

    try {
      // Send the form data to the server using fetch or your preferred HTTP client
      const response = await fetch(`http://localhost:3001/users/record/${id}`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('File uploaded successfully!');
        navigate(`/desk/${id}`);
      } else {
        alert('File upload failed.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  // useEffect(() => {
  //   async function fetchRecord() {
  //     try {
  //       const response = await axios.post(`http://localhost:3001/users/record/${id}`);
      
  //       setRecord(response.data);
  //       // const nameField = response.name;
  //       setName( response.data.name);
  //       setRecordId( response.data.id);
  //       // alert('Data found')
       
  //     } catch (error) {
  //       console.error('An error occurred while fetching the record:', error);
  //     }
  //   }

  //   fetchRecord();
  // }, [id]);

  // if (!record) {
  //   return <div>Loading...</div>;
  // }
  
  const [cleared, setCleared] = React.useState(false);

  React.useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);


const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };



  return (
    <>
    <Navbar/>
    <Box
    component="form"
    onSubmit={handleFormSubmit}
    sx={{
      position: 'relative',
      width: '88%',
      height: '65vh',
      backgroundColor: 'inherit',
      marginLeft: '6%',
      marginTop: '3%',
    }}
  >
    <Typography style={{fontSize: '1.8vw', fontFamily: "'Josefin Sans', sans-serif", fontWeight: '600'}}>A few last details, then you can check<br/> and publish your profile.</Typography><br/>
    <Typography style={{fontSize: '1.2vw', fontFamily: "'Josefin Sans', sans-serif"}}>Professional photos and accurate personal information lend credibility and trustworthiness<br/> to your freelancer profile, making you more appealing to potential clients. It creates a <br/> strong first impression and fosters a sense of professionalism and reliability.
</Typography>
     <Grid container spacing={4} sx={{marginTop: '1%'}} >
        <Grid item xs={3} sm={3} xl={3} sx={{ direction: 'ltr' }}>
       <Box sx={{
      
       height: '17vh',
       borderRadius: '30px',
       width: '100%',
       textAlign:'center',
       fontFamily:  "'Josefin Sans', sans-serif",
       fontSize: '1.6vw',
       fontWeight: '500',
       
       }}>
        
        <div style={{ position: 'relative', display: 'inline-block' }}>
      <IconButton sx={{ p: 0 , backgroundColor: 'tan', padding: '5px'}}>
        <PersonIcon style={{ fontSize: '60px', color: 'seagreen' }} />
      </IconButton>
      <div style={{ position: 'absolute', bottom: '-8px', right: '0px' }}>
        <AddIcon style={{ fontSize: '20px', color: 'white', backgroundColor: 'rosybrown', borderRadius: '10px'}} />
      </div>
    </div><br/><br/>
          <Button style={{backgroundColor: 'inherit', border: '2px seagreen solid', color: 'seagreen',fontFamily:  "'Josefin Sans', sans-serif",
       fontSize: '1.2vw',height: '28px',
       fontWeight: '500',textAlign:'center', justifyContent: 'center', textTransform: 'none', borderRadius: '20px'}}
       >
       <label htmlFor="upload-image">
              + Upload Image
              <input
                id="upload-image"
                type="file"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </label></Button>
          </Box>
        </Grid>
         <Grid item xs={9} sm={9} xl={9}>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          width: '100%',
          height: '15vh',
          borderBottom: '1px darkgrey solid'
        }}
      >
         <InputLabel id="demo-multiple-name-label" style={{fontWeight: '550', color: 'black'}}>Date of Birth*</InputLabel>
          <DatePicker
            sx={{ width: 260 ,}}
            slotProps={{
              field: { clearable: true, onClear: () => setCleared(true) },
            }}
          />
      

        {cleared && (
          <Alert
            sx={{ position: 'absolute', bottom: 0, right: 0 }}
            severity="success"
          >
            Field cleared!
          </Alert>
        )}
      </Box>
    </LocalizationProvider>
  <br/>
    <InputLabel id="demo-multiple-name-label" style={{fontWeight: '600', color: 'black'}}>Select Country*</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Select Country" />}
          MenuProps={MenuProps}
          sx={{width: 260}}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      <br/><br/>
      <InputLabel id="demo-multiple-name-label" style={{fontWeight: '600', color: 'black'}}>Street Address*</InputLabel>
        <TextField
          id="Street Address"
          label="Enter Street Address"
          fullWidth
          sx={{ marginBottom: '16px' }}
        />
       
          
        <InputLabel id="demo-multiple-name-label" style={{fontWeight: '600', color: 'black'}}>City*</InputLabel>
        <TextField
          id="City"
          label="Enter City"
          sx={{ marginBottom: '16px' }}
          fullWidth
        />
       
      </Grid>
      </Grid>
      <Button style={{backgroundColor: 'seagreen', border: '2px seagreen solid', color: 'white',fontFamily:  "'Josefin Sans', sans-serif",
       fontSize: '1.2vw',height: '28px',
       fontWeight: '500',textAlign:'center', justifyContent: 'center', textTransform: 'none', borderRadius: '20px', marginLeft: '85%' }} type="submit"
       >Save Information</Button>
    </Box>
    </>
  )
}
