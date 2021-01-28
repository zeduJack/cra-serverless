import { styled } from '@material-ui/core/styles';
import { Link as RouterLink } from "react-router-dom";

const Link = styled(RouterLink)({
  display: 'block',
  textDecoration: 'none',
  color: 'white'
});

export default Link;