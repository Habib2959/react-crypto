import { FormControl, Stack, Chip, Select, MenuItem, TextField, Button } from "@mui/material";
import Logo from "../assets/logo.png";
import InputIcon from '@mui/icons-material/Input';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "./rightbar.css"
import React from "react";

const RightSideBar = () => {
    const [value, setValue] = React.useState("");
    const handleChange = e => {
        console.log(e.target);
        setValue(e.target.value);
    }
    return (
        <div style={{padding: "0px 20px", color: "#fff"}}>
            <Stack direction="row" flexWrap="wrap">
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <Select
                        value={value}
                        onChange={handleChange}
                        autoWidth
                        displayEmpty
                        className="custom-select-first"
                    >
                        <MenuItem value="">
                            <Chip
                                sx={{ bgcolor: "transparent", color: "#fff" }}
                                avatar={<img src={Logo} />}
                                label="Avalanche"
                                variant="none" />
                        </MenuItem>
                        <MenuItem value={10}>Twenty</MenuItem>
                        <MenuItem value={21}>Twenty one</MenuItem>
                        <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <Select
                        value={value}
                        onChange={handleChange}
                        autoWidth
                        displayEmpty
                        className="custom-select"
                        variant="outlined"
                    >
                        <MenuItem value="">
                            <Chip
                                sx={{ bgcolor: "transparent", color: "#fff" }}
                                avatar={<InputIcon style={{ color: "rgba(55, 114, 255, 1)" }} />}
                                label="0xf6...1353"
                                variant="none" />
                        </MenuItem>
                        <MenuItem value={10}>Twenty</MenuItem>
                        <MenuItem value={21}>Twenty one</MenuItem>
                        <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>
            </Stack>
            <Stack direction="row" sx={{margin: "10px 0px"}}>
                <ArrowBackSharpIcon sx={{ fontSize: 16, height: "auto", mr: 5, color:"#fff" }} />
                <p style={{ fontSize: "16px" }} >Custom link</p>
            </Stack>
            <p>https://testnet.xyz.xyz/trade?ref=</p>
            <TextField fullWidth placeholder="ENTER" id="fullWidth" className="right-bar-input"/>
            <Stack direction="row" flexWrap="wrap" justifyContent="space-evenly">
                <Button variant="contained" sx={{ fontSize: "0.575rem", backgroundColor: "rgba(55, 114, 255, 1)", color: "#fff", marginTop: "5px", borderRadius: "10px" }} startIcon={<OpenInNewIcon />}>Custom Link</Button>
                <Button variant="outlined" sx={{ fontSize: "0.575rem", backgroundColor: "#000", color: "#fff", marginTop: "5px", border: "2px solid #fff", borderRadius: "10px" }} startIcon={<InputIcon />}>Cancel</Button>
            </Stack>
        </div>
    )
}

export default RightSideBar;