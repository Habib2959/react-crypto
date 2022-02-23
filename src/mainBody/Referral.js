import { 
    Stack, Card, FormControl, OutlinedInput, InputAdornment, IconButton 
} from "@mui/material";
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import React from "react";

const Referral = props => {
    const inputRef = React.useRef(null)
    const copyLink =  (e) => {
             navigator.clipboard.writeText(inputRef.current.firstElementChild.value);
            alert("link copied to clipboard")     
    }
    return (
        <Stack
            direction="row" justifyContent="space-between">
            {
                [...Array(2)].map(() => {
                    return (
                        <Card key={Math.random()} sx={{ backgroundColor: "rgba(25, 27, 32, 1)", padding: "30px", display: "flex", mt: 2, color: "#fff", borderRadius: "10px", width: "24.5rem", }}>
                            <div>
                                <Stack direction="row" spacing={1}>
                                    <AttachMoneyRoundedIcon style={{backgroundColor: "rgba(187, 181, 226, 1)", color: "#fff", borderRadius: "50%"}}/>
                                    <h4>12.5% of fee</h4>
                                </Stack>
                                <p style={{color: "rgba(128, 129, 145, 1)", margin: "10px 0px"}}>Your Referral Link for xyz</p>
                                <FormControl sx={{width: "20rem"}}>
                                    <OutlinedInput
                                    ref={inputRef} 
                                    value={`https://unityexchange.design `}
                                    endAdornment={
                                        <InputAdornment position="end"
                                        >
                                            <ContentCopyIcon sx={{color: "#fff"}}
                                            onClick={(e)=>copyLink(e)}/>
                                        </InputAdornment>
                                      }
                                    sx={{color:"#fff", bgcolor: "rgba(36, 39, 49, 1)", borderRadius: "5px", caretColor: "rgba(0,0,0,0)", cursor: "pointer"}}/>
                                </FormControl>
                            </div>
                        </Card>
                    )
                })
            }
        </Stack>
    )
}


export default Referral;