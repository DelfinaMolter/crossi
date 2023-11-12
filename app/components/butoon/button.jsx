import Button from '@mui/material/Button';

export default function ButtonComponent({ color }) {
    return (
        <Button variant="contained" className={color}>Contained</Button>
    )
  }