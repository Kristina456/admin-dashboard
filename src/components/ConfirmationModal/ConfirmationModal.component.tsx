import { Button } from '../Button/Button.component';
import styles from './ConfirmationModal.module.scss';

interface Props {
  text: string;
  confirmButton: () => void;
  closeButton: () => void;
}

export function ConfirmationModal({ confirmButton, closeButton, text }: Props) {
  return (
    <div className={styles['confirmation-modal']}>
      <div className={styles['confirmation-modal__wrapper']}>
        <p className={styles['confirmation-modal__text']}>{text}</p>
        <div className={styles['confirmation-modal__buttons']}>
          <Button variant="secondary" onClick={confirmButton}>
            confirm
          </Button>
          <Button variant="secondary" onClick={closeButton}>
            close
          </Button>
        </div>
      </div>
    </div>
  );
}
