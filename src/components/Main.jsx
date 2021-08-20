import React from 'react';
import Text from './Text';
import FlexboxExample from './Flexbox';


const Main = () => {
  return (
    <>
      <Text>Simple text</Text>
      <Text style={{ paddingBottom: 10 }}>Text with custom style</Text>
      <Text fontWeight="bold" fontSize="subheading">
        Bold subheading
      </Text>
      <Text color="textSecondary">Text with secondary color</Text>
      <FlexboxExample />

    </>
  );
};

export default Main;
