import { css } from "lit-element";
export const NavLinkStyles = css`
  .nav-link {
    text-decoration: none;
    border: solid 1px black;
    color: black;
    padding: 10px;
    margin-right: 5px;
    border-radius: 5px;
    display: inline-block;
    text-align: center;
    transition: ease .5s;
  }
  slot {
    font-weight: bold;
  }
  .nav-link:hover {
    color: #ffffff;
    background-color: #e1630f;
    border-color:#e1630f;
  }
`;