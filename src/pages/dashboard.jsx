import React, { useEffect } from 'react';


const RedirectExternal = () => {
  

  useEffect(() => {
    window.location.href = 'https://angeleduardorenteriameza.projectsutd.online';
  }, []);

  return null; // or a loading spinner, or some indication that the redirect is in progress
};

export default RedirectExternal;
