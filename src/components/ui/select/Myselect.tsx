import React, { FC } from 'react';

interface Options {
  value: string;
  name: string;
}

interface IMyselect {
  options: any;
  defaultValue: string;
  className: any;
  value: string;
  onChange: (prop: any) => void;
}

export const Myselect: FC<IMyselect> = ({ options, defaultValue, className, value, onChange }) => {
  return (
    <select className={className} value={value} onChange={(e: any) => onChange(e.target.value)}>
      <option disabled value="">{defaultValue}</option>
      {options.map((option: any) => (
        <option key={option.value} value={option.value}>{option.name}</option>
      ))}
    </select>
  );
};
