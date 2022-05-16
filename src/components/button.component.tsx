/** @jsx h */
import { h } from 'preact';
import * as styles from './button.module.less'

type ButtonType = "BUTTON" | "SUBMIT" | "RESET"

type ButtonProps = {
  text: string
  disabled?: boolean
  type?: ButtonType
  skin?: "PRIMARY" | "SECONDARY"
}

export const ButtonComponent = (props: ButtonProps) => {
  return (
    <button
      type={(props?.type || 'button').toLowerCase()}
      className={`${styles['button']} ${styles[`skin-${(props?.skin || 'PRIMARY').toLowerCase()}`]}`}
      disabled={props?.disabled || false}
    >   
      { props?.text }
    </button>
  );
};