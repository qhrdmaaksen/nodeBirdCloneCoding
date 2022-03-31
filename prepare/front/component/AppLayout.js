import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Link href="/">
          <a>노드버드</a>
        </Link>
        <Link href="/profile">
          <a>프로필</a>
        </Link>
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
      </div>
      {children} {/*여기는 AppLayout 의 children*/}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
