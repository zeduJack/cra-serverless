import { styled } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";

const Link = styled(NavLink)({
  display: 'block',
  textDecoration: 'none',
  color: 'white'
});

export default Link;