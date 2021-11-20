import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;

    &:hover {
    border-bottom: 2px solid cadetblue;
    color: cadetblue;
    }
`
