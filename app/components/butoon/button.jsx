import Button from '@mui/material/Button';

export default function ButtonComponent({ type, color, children, disabled }) {
    return (
        <Button type={type} variant="contained" className={color} disabled={disabled}>{children}</Button>
    )
}