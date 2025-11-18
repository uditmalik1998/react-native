import { ReactNode } from 'react';
import { Modal } from 'react-native';

interface IModal {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const CustomModal = (props: IModal) => {
  const { open = false, onClose = () => {} } = props;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={onClose}
    >
      {props.children}
    </Modal>
  );
};

export default CustomModal;
