import {
	FormLabelElement,
	FormInputElement,
	FormGroupElement,
	FormTextElement,
	CheckboxFormGroupElement,
	CheckBoxLabelElement,
} from './style';

export const FormLabel = ({ children }) => <FormLabelElement>{children}</FormLabelElement>;

export const FormInput = props => <FormInputElement {...props}>{props.children}</FormInputElement>;

export const FormGroup = ({ children }) => <FormGroupElement>{children}</FormGroupElement>;

export const FormText = ({ children }) => <FormTextElement>{children}</FormTextElement>;

export const CheckboxFormGroup = ({ children }) => <CheckboxFormGroupElement>{children}</CheckboxFormGroupElement>;

export const CheckBoxLabel = ({ children }) => <CheckBoxLabelElement>{children}</CheckBoxLabelElement>;
