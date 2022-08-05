import {css} from 'lit-element';

export const toDoStyle = css`
  :host {
    display: block;
    padding: 25px 10px;
    color: var(--bd-com-text-color, #000);
  }

  input {
    padding:10px;
    border-radius:10px;
    border:1px solid #eee;
    box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
  }

  li {
    font-size: 18px;
  }

  label {
    display: inline-block;
    margin-top: 10px;
  }
  
  .completed {
    text-decoration-line: line-through;
    color: #777;
    font-size: 18px;
  }
`;