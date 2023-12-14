import Button from '@mui/material/Button';
import './button.css'

export default function ButtonComponent({ type, children, disabled, className }) {
    return (
        <Button type={type} variant="contained" disabled={disabled} className={className}>{children}</Button>
    )
}