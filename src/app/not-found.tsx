import styles from "@/css/not_found.module.css";
import Button from "@mui/material/Button";
import Link from "next/link";
import Typography from "@mui/material/Typography";
const NotFound = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link href="/">
          <div className={`${styles.error_info_box} text-center`}>
            <Button color="inherit" variant="text">
              Not Found Page
            </Button>
          </div>
        </Link>
        <Typography
          component="div"
          align="center"
          sx={{
            fontSize: "15px",
            flexGrow: 1,
            color: "white",
            marginTop: "10px",
          }}
        >
          Click the button to go home
        </Typography>
      </div>
    </div>
  );
};

export default NotFound;
