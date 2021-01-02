import React from 'react';
import T from 'prop-types';

import noop from 'utilities/noop';

import Classes from './styles.css';

function Button(props) {
  const {
    children, className, href, target, type, onClick,
  } = props;

  let buttonClasses = Classes[type];
  if (className) buttonClasses += ` ${className}`;

  if (href) {
    return (
      <a href={ href } onClick={ onClick } target={ target } className={ buttonClasses }>
        { children }
      </a>
    );
  }

  return (
    <button type="button" className={ buttonClasses } onClick={ onClick }>
      { children }
    </button>
  );
}

Button.propTypes = {
  children: T.string.isRequired,
  className: T.string,
  onClick: T.func,
  target: T.string,
  href: T.string,
  type: T.oneOf([
    'primary',
    'secondary',
  ]).isRequired,
};

Button.defaultProps = {
  className: '',
  target: '',
  onClick: noop,
  href: '',
};

export default Button;
