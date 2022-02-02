import React from 'react';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';

import Link from './Link';
import LinkBlack from './LinkBlack';
import { NavItem } from '../../nav';

type Props = {
  item: NavItem
}


const HeaderNavItem = ({ item }: Props) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const location = useLocation();

  const useStyles = makeStyles(() => ({
    active: {
      color: 'rosybrown'
    }, 
    activeMenuItem: {
      backgroundColor: 'lightgrey'
    }
  }));

  const classes = useStyles();

  if (item.items && item.items.length > 0) {
    return (
      <div onMouseLeave={() => { setOpen(false) }}>
        <span className={(location.pathname.indexOf(item.route) > -1 ? classes.active : '')} ref={anchorRef} onMouseOver={() => { setOpen(true) }}>{item.displayName}</span>
        <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
          <Paper>
            <MenuList>
              {item.items.map((i, subIndex) => (
                <LinkBlack activeClassName={classes.activeMenuItem} key={subIndex} to={i.route}>
                  <MenuItem>{i.displayName}</MenuItem>
                </LinkBlack>
              ))}
            </MenuList>
          </Paper>
        </Popper>
      </div>
    )
  } else {
    return (<Link activeClassName={classes.active} to={item.route}>{item.displayName}</Link>)
  }
}
export default HeaderNavItem;