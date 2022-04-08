import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
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
import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomDialog from "../../components/CustomDialog";
import history from "../../utils/history";
import "./style.scss";

function ListUser(props) {
  const [openDelete, setOpenDelete] = useState(false);
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.68.51:3000/api/user")
      .then((data) => setListUser(data.data.user))
      .catch((err) => console.log(err));
  }, []);

  const handleDeleteUser = () => {
    console.log(openDelete);
  };

  return (
    <section className="user">
      <h1 className="user__title">LIST USER</h1>
      <Box className="user__container">
        <Button
          variant="contained"
          sx={{ margin: "12px 0", float: "right" }}
          onClick={() => history.push("/list-user/add")}
        >
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
              {listUser?.map((user, index) => (
                <TableRow
                  key={user._id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    cursor: "pointer",
                  }}
                  hover
                >
                  <TableCell component="th" scope="product">
                    {index + 1}
                  </TableCell>
                  <TableCell>{user.fullName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.password}</TableCell>
                  <TableCell>
                    <Box className="user__icon">
                      <div
                        onClick={() =>
                          history.push(`/list-user/edit/${user._id}`)
                        }
                      >
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
              ))}
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
