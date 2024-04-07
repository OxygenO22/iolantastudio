import { title } from 'process';
import React, { FC } from 'react';

interface Options {
  value: string;
  name: string;
}

interface IMyselect {
  options: Options[];
  title: string;
  defaultValue: string;
  classNameLabel: string;
  classNameSpan: string;
  classNameSelect: string;
  value: string;
  onChange: (prop: string) => void;
}

export const Myselect: FC<IMyselect> = ({
  options,
  title,
  defaultValue,
  classNameSelect,
  classNameLabel,
  classNameSpan,
  value,
  onChange,
}) => {
  return (
    <label className={classNameLabel}>
      <span className={classNameSpan}>{title}</span>
      <select
        className={classNameSelect}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option disabled value="">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </label>
  );
};
