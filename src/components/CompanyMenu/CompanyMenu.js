import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Menu, MenuItem, Button,
} from '@material-ui/core';
import { useMobile } from '../../hooks';
import { useGlobalContext } from '../../hooks/useGlobalState';

const CompanyMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const {
    companiesData, companiesLoading, currentCompany, setCurrentCompany,
  } = useGlobalContext();
  const isMobile = useMobile();

  const { companies } = companiesData;

  if (!companies || companiesLoading) {
    return <></>;
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChangeMenu = (c) => {
    setCurrentCompany(c);
    setAnchorEl(null);
  };

  const getLabel = (name = 'Selecione uma Companhia') => {
    if (isMobile) {
      const names = name.split(' ');
      return `${names[0]}`;
    }
    return name;
  };

  return (
    <div style={{ marginLeft: '20px' }}>
      <Button
        color="primary"
        variant="contained"
        disableElevation
        onClick={handleClick}
        style={{ overflow: 'hidden' }}
        size="large"
      >
        {getLabel(currentCompany.name)}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {companies.map((c) => (
          <MenuItem key={c.id} onClick={() => handleChangeMenu(c)}>
            {c.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default withRouter(CompanyMenu);
