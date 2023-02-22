import { LabelHTMLAttributes } from 'react';

import { Label, LabelContent, Span } from './Form.styles';

interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  label: string;
}

const InputLabel = ({ htmlFor, label, ...rest }: InputLabelProps) => {
  return (
    <LabelContent>
      <Label htmlFor={htmlFor} {...rest}>
        <Span>{label}</Span>
      </Label>
    </LabelContent>
  );
};

export default InputLabel;
