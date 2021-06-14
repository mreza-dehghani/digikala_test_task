import { Formik, Form } from 'formik';
import { Wrapper } from './style';
import FormControl from '../form/control';
import initialValues from './initialValues';
import Button from '../button';
import filterNormalizer from '../../helper/filterNormalizer';

export default ({ formData, submit, loading }) => {
	return (
		<Wrapper>
			<Formik
				initialValues={initialValues(filterNormalizer(formData))}
				validateOnMount={true}
				onSubmit={values => submit(values)}
				enableReinitialize={true}
			>
				{formik => (
					<Form className="form">
						<FormControl control="input" type="text" name="q" label="سرچ:" placeholder="" />

						<FormControl control="input" type="number" name="price.min" label="قیمت از:" placeholder="" />

						<FormControl control="input" type="number" name="price.max" label="قیمت تا:" placeholder="" />

						<FormControl control="checkbox" type="checkbox" name="hasSell" label="موجود:" placeholder="" />
						<div className="submit-btn-wrapper">
							<Button type="success" size="sm" onClick={() => formik.submitForm()} classes="mt-3" loading={loading}>
								جستجو
							</Button>
						</div>
					</Form>
				)}
			</Formik>
		</Wrapper>
	);
};
