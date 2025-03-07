import { TextField, Button, Typography, Container, Box } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://fsoqhpuwwwpkiryrzjfq.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzb3FocHV3d3dwa2lyeXJ6amZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwMzg5NzcsImV4cCI6MjA1NjYxNDk3N30.EXnVuIQ6socEVn7XM23wRaVeOE4ZVrdvLFQYcd1SJ0E"; 

const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const Signup = () => {
  const handleSignupWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:5173/dashboard", 
      },
    });

    if (error) {
      console.error("Google Sign-in Error:", error.message);
    }
  };

  const handleSignupWithFacebook = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "facebook",
      options: {
        redirectTo: "http://localhost:5173/dashboard",
      },
    });

    if (error) {
      console.error("Facebook Sign-in Error:", error.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
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
          Sign Up
        </Typography>

        <form>
          <TextField fullWidth margin="normal" label="Full Name" variant="outlined" required />
          <TextField fullWidth margin="normal" label="Email" variant="outlined" type="email" required />
          <TextField fullWidth margin="normal" label="Password" variant="outlined" type="password" required />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Sign Up
          </Button>
        </form>

        <Typography variant="body1" sx={{ my: 2 }}>
          OR
        </Typography>

        <Button
          variant="contained"
          fullWidth
          startIcon={<GoogleIcon />}
          sx={{ backgroundColor: "#DB4437", color: "#fff", mb: 1, "&:hover": { backgroundColor: "#C1351D" } }}
          onClick={handleSignupWithGoogle}
        >
          Sign Up with Google
        </Button>

        <Button
          variant="contained"
          fullWidth
          startIcon={<FacebookIcon />}
          sx={{ backgroundColor: "#1877F2", color: "#fff", "&:hover": { backgroundColor: "#155DB2" } }}
          onClick={handleSignupWithFacebook}
        >
          Sign Up with Facebook
        </Button>

        <Typography variant="body2" sx={{ mt: 2 }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#1877F2", textDecoration: "none", fontWeight: "bold" }}>
            Sign In
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Signup;
