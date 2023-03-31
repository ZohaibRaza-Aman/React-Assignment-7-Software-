import Button from "@mui/material/Button";
import CircularProgress from '@mui/material/CircularProgress';

function SMButton(props) {
  const { label, onClick, disabled, startIcon, endIcon,loading,sx,size } = props;
  return (
    <>
      <Button
        startIcon={startIcon}
        endIcon={endIcon}
        onClick={onClick}
        variant="contained"
        disabled={loading || disabled}
        size={size}
        sx={sx}
      >
        {loading ? <CircularProgress /> : label}
      </Button>
    </>
  );
}
export default SMButton;