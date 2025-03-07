import { TextField, Button, Typography, Container, Box } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Box 
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5" 
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          textAlign: "center",
          padding: "30px",
          borderRadius: "10px",
          backgroundColor: "#fff", 
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
        }}
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>

        <TextField fullWidth margin="normal" label="Email" variant="outlined" />
        <TextField fullWidth margin="normal" label="Password" variant="outlined" type="password" />

        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Login
        </Button>

        <Typography variant="body1" sx={{ my: 2 }}>
          OR
        </Typography>

        <Button 
          variant="contained" 
          fullWidth 
          startIcon={<GoogleIcon />} 
          sx={{ backgroundColor: "#DB4437", color: "#fff", mb: 1, "&:hover": { backgroundColor: "#C1351D" } }}
        >
          Login with Google
        </Button>

        <Button 
          variant="contained" 
          fullWidth 
          startIcon={<FacebookIcon />} 
          sx={{ backgroundColor: "#1877F2", color: "#fff", "&:hover": { backgroundColor: "#155DB2" } }}
        >
          Login with Facebook
        </Button>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Don't have an account?{" "}
          <Link to="/" style={{ color: "#1877F2", textDecoration: "none", fontWeight: "bold" }}>
            Sign Up
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Login;
