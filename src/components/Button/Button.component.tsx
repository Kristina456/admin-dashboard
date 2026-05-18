import styles from './Button.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ children, variant, className, ...props }: Props) {
  const buttonClasses = `${styles['button']} ${variant ? styles[`button--${variant}`] : ''} ${className || ''}`.trim();

  return (
    <button {...props} className={buttonClasses}>
      {children}
    </button>
  );
}
