import { TFunction } from 'react-i18next';
import { object, string } from 'yup';

export const defaultValues = {
  userName: '',
  selectOption: '',
};

export const validationSchema = (t: TFunction<'translation', undefined>) =>
  object().shape({
    userName: string().required(t('common.userNameRequired')),
    selectOption: string().required(t('common.selectOptionRequired')),
  });
