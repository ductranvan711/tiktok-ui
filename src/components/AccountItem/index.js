import classNames from 'classnames/bind';
import styles from '~/components/AccountItem/AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/8d7f44e29aa585c4875148f967a8925a.jpeg?lk3s=a5d48078&nonce=12685&refresh_token=1f92e4ca47e6dbdebc2e8b7e4cef8543&x-expires=1725181200&x-signature=vN0LCeuhyZnqjtWulv7EJiObjdE%3D&shp=a5d48078&shcp=81f88b70"
                alt="Name"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
