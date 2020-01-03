import React from 'react';
import Link from 'umi/link';

export default () => {
  return <div>
    <Link to={'/a'}>pageA</Link>
    <br/>
    <Link to={'/b'}>pageB</Link>
  </div>;
}
