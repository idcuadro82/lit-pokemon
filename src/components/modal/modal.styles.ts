import { css } from 'lit';

export const modalStyles = css`
  .modal-wrapper {
    display: none;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9;
  }

  .modal-opened {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .modal-container {
    background-color: white;
    padding: 50px;
    position: relative;
  }

  .modal-content {
    display: flex;
    flex-direction: column;
  }

  .close-modal-button {
    color: white;
    border: 0;
    padding: 10px 30px;
    font-size: 20px;
    border-radius: 5px;
    background-color: var(--red-pokemon);
    cursor: pointer;
  }
`;

export default modalStyles;
