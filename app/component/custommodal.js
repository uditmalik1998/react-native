import { Modal } from 'react-native';

const CustomModal = props => {
  const { open = false, onClose = () => {} } = props;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={onClose}
    >{props.children}</Modal>
  );
};

export default CustomModal;
