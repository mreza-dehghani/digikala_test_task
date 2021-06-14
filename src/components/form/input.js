import { Field, ErrorMessage } from 'formik';
import { FormInput, FormLabel, FormText, FormGroup, CheckboxFormGroup, CheckBoxLabel } from '../formElements';

export const PureInput = ({ label, name, ...rest }) => {
	return (
		<>
			{label && <FormLabel htmlFor={name}>{label}</FormLabel>}
			<Field id={name} name={name} {...rest} as={FormInput} />
			<ErrorMessage name={name} component={FormText} />
		</>
	);
};

export const Input = ({ label, name, ...rest }) => {
	return (
		<FormGroup>
			{label && <FormLabel htmlFor={name}>{label}</FormLabel>}
			<Field id={name} name={name} {...rest} as={FormInput} />
			<ErrorMessage name={name} component={FormText} />
		</FormGroup>
	);
};

export const Checkbox = ({ label, name, ...rest }) => {
	return (
		<CheckboxFormGroup>
			{label && <CheckBoxLabel htmlFor={name}>{label}</CheckBoxLabel>}
			<Field id={name} name={name} {...rest} />
			<ErrorMessage name={name} component={FormText} />
		</CheckboxFormGroup>
	);
};
