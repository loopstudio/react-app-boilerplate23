import { SelectHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import InputLabel from './InputLabel';
import { Option } from '../../types';

import { Error, InputContainer, Select } from './Form.styles';

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  name: string;
  label?: string | null;
  options: Array<Option>;
}

const FormSelect = ({ id, name, label, options, ...rest }: FormSelectProps) => {
  const { t } = useTranslation();

  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name];

  return (
    <InputContainer hasError={Boolean(error)}>
      <InputLabel htmlFor={id ?? name} label={label || name} />
      <Select {...rest} id={id ?? name} {...register(name)}>
        <option value="">{t('common.selectOption')}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      {/*  @ts-ignore */}
      <Error>{error?.message}</Error>
    </InputContainer>
  );
};

export default FormSelect;
