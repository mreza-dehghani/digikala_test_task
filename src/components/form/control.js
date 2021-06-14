import * as Inputs from './input';

const FormControl = ({ control, ...rest }) => {
	switch (control) {
		case 'pureInput':
			return <Inputs.PureInput {...rest} />;
		case 'input':
			return <Inputs.Input {...rest} />;
		case 'checkbox':
			return <Inputs.Checkbox {...rest} />;

		default:
			return null;
	}
};

export default FormControl;
