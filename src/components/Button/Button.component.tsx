import styles from './Button.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ternary' | 'quaternary';
}

export function Button({ children, variant, className, ...props }: Props) {
  const buttonClasses = `${styles['button']} ${variant ? styles[`button--${variant}`] : ''} ${className || ''}`;

  return (
    <button {...props} className={buttonClasses}>
      {children}
    </button>
  );
}
