import { Stack, Card, Chip, Button } from "@mui/material";
import InputIcon from '@mui/icons-material/Input';
import coin from "../assets/coin.png";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Referral from "./Referral";
import React from "react"
import CustomTabs from "./Tabs";
import "./body.css"

const Body = () => {
    return (
        <div style={{borderRight: "2px solid rgba(36, 39, 49, 1)", padding: "0px 30px", color:"#fff", borderLeft: "2px solid rgba(36, 39, 49, 1)", minHeight: "100vh"}}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                <h3 className="section-header">Section</h3>
                <Card sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "5px 15px", bgcolor: "rgba(25, 27, 32, 1)", color: "#fff" }}>
                    <InputIcon style={{ color: "rgba(55, 114, 255, 1)" }} />
                    <p style={{margin: "0px 5px"}}>0.2 $XYZ</p>
                    <Chip
                        style={{ borderRadius: "7px", backgroundColor: "rgba(163, 227, 255, 1)", color: "rgba(55, 114, 255, 1)", height: "21px" }}
                        label="Tier 1"
                        variant="filled"
                    />
                </Card>
            </Stack>
            <Card sx={{ backgroundColor: "rgba(171, 232, 255, 1)", padding: "30px", display: "flex", borderRadius: "15px", position: "relative", mt: 2}}>
                <div>
                    <p style={{color: "#2B2557", fontWeight: "500"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <Button variant="contained" sx={{ fontSize: "0.575rem", backgroundColor: "#fff", color: "#000", marginTop: "5px" }}>Tutorial</Button>
                </div>
                <div className="bitcoin-img">
                    <img alt="img" src={coin} />
                </div>
            </Card>
            <Card sx={{ backgroundColor: "rgba(25, 27, 32, 1)", padding: "20px", display: "flex", mt: 2, color: "#fff", borderRadius: "15px", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <h4 style={{ fontWeight: "500" }}>Your rewards</h4>
                    <h2 style={{marginTop: "5px"}}>$ 0.26231428</h2>
                    <Stack direction="row" spacing={1} sx={{mt:1}}>
                        <Chip
                            style={{ backgroundColor: "rgba(53, 57, 69, 1)", color: "#fff", height: "22px", fontSize: "0.575rem" }}
                            label="$40 AVAX"
                            variant="filled" />
                        <Chip
                            style={{ backgroundColor: "rgba(53, 57, 69, 1)", color: "#fff", height: "22px", fontSize: "0.575rem" }}
                            label="$10 BNB"
                            variant="filled" />
                        <Chip
                            style={{ backgroundColor: "rgba(53, 57, 69, 1)", color: "#fff", height: "22px", fontSize: "0.575rem" }}
                            label="$210 BTC"
                            variant="filled" />
                    </Stack>
                </div>
                <div>
                    <Button variant="contained" sx={{ fontSize: "0.575rem", backgroundColor: "rgba(55, 114, 255, 1)ff", color: "#fff", marginTop: "5px" }} startIcon={<OpenInNewIcon />}>Tutorial</Button>
                </div>
            </Card>
            <Referral />
            <CustomTabs />
        </div>
    )
}

export default Body;