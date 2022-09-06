interface Props {
    label: string
    className?: string
    }
    export const Input = ({ label, className }: Props) => {
    return (
    <label className={className}>
    {label}: <input />
    </label>
    )
    }