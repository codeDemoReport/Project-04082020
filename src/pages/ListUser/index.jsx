import React, { useState } from "react";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import "./style.scss";
import CustomDialog from "../../components/CustomDialog";

function ListUser(props) {
  const [openDelete, setOpenDelete] = useState(false);

  const handleDeleteUser = () => {
    console.log(openDelete);
  };

  return (
    <section className="user">
      <h1 className="user__title">List User</h1>
      <Box className="user__container">
        <Button variant="contained" sx={{ margin: "12px 0", float: "right" }}>
          Add New User
        </Button>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>STT</TableCell>
                <TableCell>Full Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Password</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  cursor: "pointer",
                }}
                hover
              >
                <TableCell component="th" scope="product">
                  1
                </TableCell>
                <TableCell>Truong Thanh Tin</TableCell>
                <TableCell>truongthanhtin6@gmail.com</TableCell>
                <TableCell>12345678</TableCell>
                <TableCell>
                  <Box className="user__icon">
                    <div>
                      <EditIcon
                        sx={{
                          fontSize: "2rem",
                          margin: "0 4px",
                          color: "#3f89eb",
                        }}
                      />
                    </div>
                    <div onClick={() => setOpenDelete(true)}>
                      <DeleteForeverIcon
                        sx={{
                          fontSize: "2rem",
                          margin: "0 4px",
                          color: "red",
                        }}
                      />
                    </div>
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <CustomDialog
        open={openDelete}
        setOpen={setOpenDelete}
        content={`Bạn chắc chắn muốn xóa user # ?`}
        handleClickBtnOK={handleDeleteUser}
      />
    </section>
  );
}

export default ListUser;
