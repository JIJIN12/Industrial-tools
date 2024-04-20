import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import { SnackbarContent } from "@mui/material";

const style = {
  display: "flex",
  justifyContent: "space-between",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  color: "#FEFAF6",
  bgcolor: "#393E46",
  border: "0",
  borderRadius: "3%",
  boxShadow: 24,
  p: 4,
};

export default function TrackOrder({ open, handleClose }) {
  const [mobileNumber, setMobileNumber] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleMobileNumberChange = (e) => {
    const input = e.target.value;

    // Check if the input contains non-numeric characters
    if (/[^0-9]/.test(input)) {
      setSnackbarOpen(true);
      return;
    }

    // Set the mobile number state
    setMobileNumber(input);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              flex: "1",
              marginRight: "20px",
              backgroundColor: "#393E46",
            }}
          >
            {/* Close button */}
            <Button
              onClick={handleClose}
              style={{ position: "absolute", top: 0, right: 0 }}
            >
              X
            </Button>
            <div className="">
              <Typography
                variant="h6"
                component="h2"
                sx={{ display: "flex", justifyContent: "center" }}
              >
                Welcome to Mogli Coins
              </Typography>
              <Typography
                variant="p"
                sx={{ mt: 2, display: "flex", justifyContent: "center", color: '#F4CE14' }}
              >
                Shopping gets more rewarding!
              </Typography>

              <br />
              <br />
              <p className="flex justify-center text-[#F4CE14]">
                Sign Up & avail 20 Mogli Coins now
              </p>
              <br />
              <div className="w-[100%] flex justify-center">
                <button className="flex justify-center bg-[#E0BB20] px-5 py-3 rounded-lg">
                  1 Mogli Coin = ₹ 1<br /> Earn coins on every product you buy
                </button>
              </div>
              <br />
              <br />
              <br />
            </div>
          </div>
          <div>
            <div
              style={{
                flex: "1",
                justifyContent: "flex-start",
                backgroundColor: "#FEFAF6",
                padding: "1rem",
                paddingLeft: "2.5rem",
                paddingTop: "1.5rem",
                borderRadius: "5%",
                color: "#393E46",
              }}
            >
              <Typography variant="h5" component="h2">
                Login or Sign Up
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, textSizeAdjust: "5px" }}>
                Continue to track your orders
                <br />
                <br />
                <input
                  type="text"
                  placeholder="Enter Mobile Number+91 -"
                  className="px-[4.7rem] py-[.8rem] mb-3 border-1 border-black rounded-lg"
                  value={mobileNumber}
                  onChange={handleMobileNumberChange}
                  maxLength={10}
                ></input>
                <br />
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    px: 15,
                    py: 1,
                    mb: 3,
                    bgcolor: "#f44336",
                    color: "white",
                    border: "0",
                    ":hover": {
                      border: "0",
                      bgcolor: "#f44336",
                      color: "white",
                    },
                  }}
                >
                  CONTINUE
                </Button>
                <br />
                <div className="flex">
                  <hr className="w-[36%]" /> <p className="mx-2 mt-1">Or</p>
                  <hr className="w-[36%]" />
                </div>
                <br />
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    px: 8.5,
                    py: 1,
                    mb: 2,
                    bgcolor: "#222831",
                    color: "white",
                    border: "0",
                    ":hover": {
                      border: "0",
                      bgcolor: "#222831",
                      color: "white",
                    },
                  }}
                >
                  CONTINUE WITH EMAIL-ID
                </Button>
                <br />
                <br />
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ px: 15, py: 1, mb: 2, fontSize: "1rem" }}
                >
                  <span
                    style={{
                      fontFamily: "Times New Roman",
                      fontWeight: "bold",
                      color: "blue",
                    }}
                  >
                    G
                  </span>
                  <span
                    style={{
                      fontFamily: "Times New Roman",
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    o
                  </span>
                  <span
                    style={{
                      fontFamily: "Times New Roman",
                      fontWeight: "bold",
                      color: "green",
                    }}
                  >
                    o
                  </span>
                  <span
                    style={{
                      fontFamily: "Times New Roman",
                      fontWeight: "bold",
                      color: "blue",
                    }}
                  >
                    g
                  </span>
                  <span
                    style={{
                      fontFamily: "Times New Roman",
                      fontWeight: "bold",
                      color: "orange",
                    }}
                  >
                    l
                  </span>
                  <span
                    style={{
                      fontFamily: "Times New Roman",
                      fontWeight: "bold",
                      color: "purple",
                    }}
                  >
                    e
                  </span>
                </Button>
                <br />
                Your details are safe with us.
                <br />
                <br />
              </Typography>
            </div>

            <p className="text-[10px] flex justify-center">
              By continuing, you agree to our
              <a href="" className="mx-1 text-white hover:text-[10.5px]">
                {" "}
                Terms of Service{" "}
              </a>
              &{" "}
              <a href="" className="ml-1 text-white hover:text-[10.5px]">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </Box>
      </Modal>

      {/* Snackbar for non-numeric input */}
      <Snackbar
  open={snackbarOpen}
  autoHideDuration={6000}
  onClose={handleSnackbarClose}
  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
>
  <SnackbarContent
    style={{ backgroundColor: '#f44336', color: '#FFFFFF' }}
    message="Please enter only numbers."
    action={
      <React.Fragment>
        <IconButton size="small" aria-label="close" color="inherit" onClick={handleSnackbarClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    }
  />
</Snackbar>
    </div>
  );
}
