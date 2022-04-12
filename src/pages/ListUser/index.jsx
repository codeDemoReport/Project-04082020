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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomDialog from "../../components/CustomDialog";
import history from "../../utils/history";
import { deleteUser, getListUser, setUserEdit } from "./../../redux/action";
import "./style.scss";

function ListUser(props) {
  const [openDelete, setOpenDelete] = useState(false);
  const [userDelete, setUserDelete] = useState({});

  const dispatch = useDispatch();
  const { listUser, dataDelete } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getListUser());
  }, [dataDelete]);

  const handleClickIconEdit = (user) => {
    history.push(`/list-user/edit/${user._id}`);
    dispatch(setUserEdit(user));
  };

  const handleClickIconDelete = (user) => {
    setOpenDelete(true);
    setUserDelete(user);
  };

  const handleDeleteUser = () => {
    dispatch(
      deleteUser({
        id: userDelete._id,
      })
    );
    setOpenDelete(false);
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
                <TableCell>Role</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listUser?.length > 0 ? (
                <>
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
                      <TableCell>{user.isAdmin ? "Admin" : "User"}</TableCell>
                      <TableCell>
                        <Box className="user__icon">
                          <div onClick={() => handleClickIconEdit(user)}>
                            <EditIcon
                              sx={{
                                fontSize: "2rem",
                                margin: "0 4px",
                                color: "#3f89eb",
                              }}
                            />
                          </div>
                          <div onClick={() => handleClickIconDelete(user)}>
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
                </>
              ) : (
                <TableRow>
                  <TableCell align="center" size="medium">
                    <h3>No Data</h3>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <CustomDialog
        open={openDelete}
        setOpen={setOpenDelete}
        content={`Bạn muốn xóa user có email #${userDelete.email} ?`}
        handleClickBtnOK={handleDeleteUser}
      />
    </section>
  );
}

export default ListUser;
