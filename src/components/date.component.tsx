/** @jsx h */
import { h } from 'preact';
import * as styles from './date.module.less'
import { DateTime } from "luxon";


export type Option = {
  value: string
  description: string
}

type DateComponentProps = {
  label: string
  name: string
  id: string
  required?: boolean
  value?: string
}

export const DateComponent = (props: DateComponentProps) => {
  const format: string = "yyyy-MM-dd";
  const min = DateTime.now().plus({ days: 3}).toFormat(format);
  const max = DateTime.now().plus({ months: 12}).toFormat(format);
  const value = props?.value ? DateTime.fromFormat(props?.value, format).toFormat(format) : DateTime.now().plus({ days: 7}).toFormat(format);

  return (
    <div className={styles['date-component']}>
      <label for={props?.id}>
        { props?.label }
      </label>
      <input type="date" name={props?.name} id={props?.id} value={value} min={min} max={max} required={props?.required} />
    </div>
  );
};