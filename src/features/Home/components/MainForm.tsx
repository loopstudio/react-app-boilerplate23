import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import Form from 'features/common/components/Form';
import { Option } from 'features/common/types';
import { defaultValues, validationSchema } from '../utils';

const MainForm = () => {
  const { t } = useTranslation();

  const formMethods = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema(t)),
  });

  const onSubmit = () => {
    // TODO: add attributes: object as a param on the function
    // console.log({ attributes });
  };

  const options: Array<Option> = [
    { label: 'option1', value: 'option1' },
    { label: 'option2', value: 'option2' },
  ];

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <span>{t('Home.formTitle')}</span>
      <Form.Input id="userName" name="userName" label={t('common.userName')} />
      <Form.Select
        id="selectOption"
        name="selectOption"
        label={t('common.selectOption')}
        options={options}
      />
      <Form.Button text={t('common.submit')} />
    </Form>
  );
};

export { MainForm };
