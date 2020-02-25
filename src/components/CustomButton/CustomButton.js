import React from 'react';

import { CustomButtonContainer } from './CustomButtonStyles';
// import './CustomButton.scss';

const CustomButton = ({children, ...props}) => (
  <CustomButtonContainer {...props} >
    {children}
  </CustomButtonContainer>
)

export default CustomButton;
