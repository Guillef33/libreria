import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    transition: all 0.5s ease;

    &:hover {
    border-bottom: 2px solid cadetblue;
    color: cadetblue;
    }
`
