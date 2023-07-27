'use client';

import React, { FC } from 'react';
import { type TInputProps, StInput } from './';
import { ValidationPattern } from '@/components/Form';

export const Input: FC<TInputProps> = ({ name, required, pattern, register, ...props }) => {
  const registerOptions = {
    ...(required && { required: 'Поле не может быть пустым' }),
    ...(pattern && { pattern: ValidationPattern[pattern] }),
  };

  return <StInput {...register(name, registerOptions)} name={name} {...props} />;
};
