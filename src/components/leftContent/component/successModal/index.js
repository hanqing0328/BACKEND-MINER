import { Modal } from 'antd';
import './index.less';

const SuccessModal = ({showModal, setShowModal}) => {
  return (
    <Modal
    open={showModal}
    onCancel={() => setShowModal(false)}
    footer={null}
    >
      <div className='success-modal'>
        The miner was successfully created
      </div>
    </Modal>
  )
}

export default SuccessModal;