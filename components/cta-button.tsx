import styles from "@/styles/cta-button.module.css";

export interface CtaButtonProps {
    label: string;
    onClick: () => void;
    className?: string;
}
export function CtaButton({ label, onClick, className }: CtaButtonProps) {
    return (
        <button
            className={`${styles.ctaButton} ${className}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}
