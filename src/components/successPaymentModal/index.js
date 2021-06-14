import Modal from '../../components/modal';
import Button from '../../components/button';

const Index = ({ show, closeHandler, content, title }) => {
	return (
		<Modal show={show} close={true} header={{ title: title }} loading={false} closeHandler={closeHandler}>
			<div style={{ padding: '20px 0' }}>{content}</div>
			<Button type="primary" size="sm" onClick={closeHandler} loading={false}>
				بستن
			</Button>
		</Modal>
	);
};

export default Index;
