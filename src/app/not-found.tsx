import styles from "@/css/not_found.module.css";
import { Box } from "@mui/material";
import Link from "next/link";

const NotFound = () => {
  return (
    <Box className={styles.container}>
      <Box>
        <Link href="/">
          <Box className={`${styles.error_info_box} text-center`}>
            <span className="text-black">Not Found Page</span>
          </Box>
        </Link>
        <Box sx={{ textAlign: "center" }}>
          <span style={{ fontSize: "0.9rem" }}>
            Click the button to go home
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default NotFound;
