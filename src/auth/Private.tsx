import { ReactElement } from "react";
import { useAuthSession } from "./AuthSessionContext";
import { Navigate } from "react-router-dom";
import { supabase } from "../supabaseClient";  // Import Supabase client

type PrivateProps = {
  component: ReactElement;
};

// Define the LogoutButton component here
const LogoutButton = () => {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error logging out:", error.message);
    } else {
      alert("Logged out successfully");
      // Optionally redirect the user to the login page after logout
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export const Private = ({ component }: PrivateProps) => {
  const { session, loading } = useAuthSession();

  if (loading) {
    return <>Authenticating...</>;
  }

  return session ? (
    <>
      {/* Render the authenticated component */}
      {component}

      {/* Add the LogoutButton here */}
      <LogoutButton />
    </>
  ) : (
    <Navigate to="/auth" />
  );
};
