import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/bd75513b621a939514fa03205b813309.jpeg?lk3s=a5d48078&nonce=85999&refresh_token=091c750be4bcf8a7c25a15caccbad08b&x-expires=1726304400&x-signature=jHoi4Sx3%2BzbXhvphEBsZWRB9Cns%3D&shp=a5d48078&shcp=81f88b70"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>nguyenvana</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nguyen Van A</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
