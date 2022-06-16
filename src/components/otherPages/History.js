import React, { useEffect, useState } from "react";
import "../baseStyles.css";
import "./otherPages.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { getAllAppointments } from "../../redux/actions/appointmentCreator";
import Header from "../headers/Header";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function History() {
    const state = useSelector((state) => state.history);
    console.log("history_state: ", state);

    return (
        <>
            <Header />
            <div className="table_cont">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>ФИО</StyledTableCell>
                                <StyledTableCell /* align="right" */>
                                    Специалист
                                </StyledTableCell>
                                <StyledTableCell /* align="right" */>Время</StyledTableCell>
                                {/* <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/*{state.map((item) => (*/}
                            {/*    <StyledTableRow key={item.id}>*/}
                            {/*        <StyledTableCell component="th" scope="row">*/}
                            {/*            {item.attendingDoctor.firstName} {item.attendingDoctor.lastName} {item.attendingDoctor.middleName}*/}
                            {/*        </StyledTableCell>*/}
                            {/*        <StyledTableCell >*/}
                            {/*            {item.attendingDoctor.speciality}*/}
                            {/*        </StyledTableCell>*/}
                            {/*        <StyledTableCell >*/}
                            {/*             21:59*/}
                            {/*        </StyledTableCell>*/}
                            {/*        */}
                            {/*    </StyledTableRow>*/}
                            {/*))}*/}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
}
