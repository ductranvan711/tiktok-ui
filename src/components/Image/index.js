import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(({ src, alt, className, failBack: customFailBack = images.noImage, ...props }, ref) => {
    const [failBack, setFailBack] = useState('');

    const handleError = () => {
        setFailBack(customFailBack);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={failBack || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
