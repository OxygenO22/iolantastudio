import React, { FC } from 'react';

interface IMyInput {
  title: string;
  classNameLabel: string;
  classNameSpan: string;
  classNameInput: string;
  value: string;
  type: string;
  placeholder: string;
  onChange: (prop: string) => void;
  isTextarea: boolean;
}

export const MyInput: FC<IMyInput> = ({
  title,
  type,
  placeholder,
  classNameLabel,
  classNameSpan,
  classNameInput,
  value,
  onChange,
  isTextarea,
}) => {
  return (
    <label className={classNameLabel}>
      <span className={classNameSpan}>{title}</span>
      {isTextarea ? (
        <textarea
          className={classNameInput}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      ) : (
        <input
          className={classNameInput}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type={type}
          placeholder={placeholder}
        />
      )}
    </label>
  );
};
