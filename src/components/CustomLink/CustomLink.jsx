import React from 'react';
import {Link, useMatch} from 'react-router-dom';
import st from './customlink.module.scss';

export default function Customlink({children, to, ...props}) {
    const match = useMatch(to);
    // console.log({match});
  return (
<Link to={to}
{...props} className={match ? `${st.chosen}` : `${st.notChosen}` }>
    {children}
</Link>
  )
}