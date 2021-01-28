import React from 'react';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import Link from './Link';
import LinkBlack from './LinkBlack';


const HeaderNavItem = ({ item }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  if (item.items && item.items.length > 0) {
    return (
      <div onMouseLeave={() => { setOpen(false) }}>
        <span ref={anchorRef} onMouseOver={() => { setOpen(true) }}>{item.displayName}</span>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          <Paper>
            <MenuList>
              {item.items.map((i, subIndex) => (
                <LinkBlack key={subIndex} to={i.route}>
                  <MenuItem>{i.displayName}</MenuItem>
                </LinkBlack>
              ))}
            </MenuList>
          </Paper>
        </Popper>
      </div>
    )
  } else {
    return (<Link to={item.route}>{item.displayName}</Link>)
  }
}
export default HeaderNavItem;