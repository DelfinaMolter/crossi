import Button from '@mui/material/Button';

export default function ButtonComponent({ color, text }) {
    return (
        <Button variant="contained" className={color}>{text}</Button>
    )
  }