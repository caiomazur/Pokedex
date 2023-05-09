import styled from "styled-components";

export const StyledSpinner = styled.div`
  .spinner-container {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    width: 100vw;
  }
  
  .pokemon {
    position: relative;
    height: 100px;
    width: 100px;
    background: linear-gradient(to bottom, rgb(254, 0, 1) 50%, white 50% );
    border-radius: 50%;
    border: 8px solid black;
    animation: spin 1s linear infinite;
  }
  
  .pokemon::before {
    content: '';
    position: absolute;
    height: 8px;
    width: 100px;
    background: black;
    top: 50px;
    transform: translatey(-50%);
  }
  
  .pokemon::after {
    content: '';
    position: absolute;
    height: 38px;
    width: 38px;
    border-radius: 50%;
    background: white;
    top: 50px;
    left: 50px;
    transform: translate(-50%, -50%);
    box-shadow: inset 0 0 0 8px black, inset 0 0 0 10px white, inset 0 0 0 12px black;
  
  }
  
  /* Spin Animation */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`