import React from 'react';
import { UIView } from '@uirouter/react';

const layout = (config) => (
  <div className="">
    <UIView name="header" />
    <div className="container-fluid">
      <UIView/>
    </div>
    <UIView name="footer_disabled" />
  </div>
);

export default layout;