import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Success() {
    return (
        <div style={{ color: 'blue', marginTop: 60, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faCircleCheck} style={{ fontSize: 28, paddingRight: 10, marginBottom: 5 }} />
            <h2 style={{ color: 'blue' }}>Thanh toán thành công</h2>
        </div>
    );
}

export default Success;
