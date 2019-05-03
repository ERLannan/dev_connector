import React from 'react';

const footer = () => {
  return (
    <footer className='footer bg-dark text-white p-2 text-center fixed-bottom'>
      Copyright &copy; {new Date().getFullYear()} Dev Connector
    </footer>
  );
};

export default footer;
