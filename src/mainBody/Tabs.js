import React from 'react';
import { Tab, Tabs } from '@mui/material';
import CustomTable from './CustomTable';
import SecondTab from './SecondTab';


const CustomTabs = props => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return (
        <div style={{margin: "10px 0px"}}>
            <Tabs value={value} onChange={handleChange} >
                <Tab style={{color: "#fff"}} label="First Tab" sx={{fontWeight: "600"}}/>
                <Tab style={{color: "#fff"}} label="Second tab" />
            </Tabs>
            {value === 0 && <CustomTable />}
            {value === 1 && <SecondTab />}
        </div>
    )
}

export default CustomTabs;