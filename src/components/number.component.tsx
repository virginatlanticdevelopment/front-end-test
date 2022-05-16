/** @jsx h */
import { h } from 'preact';
import * as styles from './number.module.less'

type NumberProps = {
  label: string
  name: string
  id: string
  min: number
  max: number
  value?: number | string
  required?: boolean
}

export const NumberComponent = (props: NumberProps) => {
  return (
    <div className={styles['number-component']}>
      <label for={props?.id}>
        { props?.label }
      </label>
      <input type="number" name={props?.name} id={props?.id} min={props?.min} max={props?.max} value={props?.value} required={props?.required} />
    </div>
  );
};
