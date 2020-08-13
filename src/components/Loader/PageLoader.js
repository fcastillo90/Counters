import React, { memo } from 'react';
import { Box } from '@material-ui/core';
import EchoLoader from './EchoLoader';

const PageLoader = memo(() => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexGrow={1}
    >
      <EchoLoader />
    </Box>
  );
});

export default PageLoader;

PageLoader.propTypes = {};
PageLoader.defaultProps = {};
