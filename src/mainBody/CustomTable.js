import OpenInNew from "@mui/icons-material/OpenInNew";
import { Stack, Table, TableBody, TableCell, TableHead, TableRow, Chip, Avatar } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./body.css"

export default function CustomTable() {
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        axios.get("https://raw.githubusercontent.com/akshita151199/APIs/main/data")
            .then(res => {
                setTableData(res.data.data)
            }).catch(err => {
                console.log(err.message);
            })
    }, [])
    return (
        <div>
            <Table sx={{ borderCollapse: "separate", borderSpacing: "0px 5px" }}>
                <thead>
                    <TableRow style={{ borderRadius: 5, backgroundColor: "rgba(25, 27, 32, 1)" }}>
                        <TableCell sx={{ color: "rgba(128, 129, 145, 1) !important" }}>ASSET</TableCell>
                        <TableCell sx={{ color: "rgba(128, 129, 145, 1) !important" }}>AMOUNT</TableCell>
                        <TableCell align="center" sx={{ color: "rgba(128, 129, 145, 1) !important" }}>USER ACCOUNT</TableCell>
                        <TableCell sx={{ color: "rgba(128, 129, 145, 1) !important" }}>REFERRAL EARNING</TableCell>
                    </TableRow>
                </thead>
                <TableBody>
                    {
                        tableData.map(items => {
                            return (
                                <TableRow key={Math.random()} sx={{ backgroundColor: "rgba(25, 27, 32, .9)", color: "#fff" }}>
                                    <TableCell>
                                        <Stack direction="row" >
                                            <img src={items.img} />
                                            <Stack sx={{ ml: 1 }}>
                                                <p className="text-white">{items.asset}</p>
                                                <Stack direction="row" >
                                                    <span className="text-grey" style={{ marginRight: "8px" }}>{items.type}</span>
                                                    <Chip
                                                        style={{ backgroundColor: "rgba(53, 57, 69, 1)", color: "#fff", borderRadius: "7px", height: "auto", fontSize: "10px", alignItems: "center", paddingBottom: "1px" }}
                                                        avatar={<img src={items.chain.img} style={{ width: "15px", height: "15px" }} />}
                                                        label={items.chain.name}
                                                        variant="filled" />
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </TableCell>
                                    <TableCell align="center">
                                        <p className="text-white">{items.amount}</p>
                                        <p className="text-grey" >{items.state}</p>
                                    </TableCell>
                                    <TableCell className="text-white">{items.user} </TableCell>
                                    <TableCell align="center">
                                        <p className="text-white">{items.referral_earnings}</p>
                                        <a href="/" target="_blank">
                                            <Stack direction="row" justifyContent="center" className="text-grey">
                                                <p style={{ fontSize: "10px" }} >View on BSC Scan</p>
                                                <OpenInNew sx={{ fontSize: 10, height: "auto" }} />
                                            </Stack>
                                        </a>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}