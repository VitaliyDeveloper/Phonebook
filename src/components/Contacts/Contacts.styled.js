import styled from 'styled-components';

// const hidden = css`
//   display: none;
//   visibility: hidden;
//   opacity: 0;
//   background: #fff;
//   z-index: 100;
// `;

// const visible = css`
//   display: flex;
//   visibility: visible;
//   opacity: 1;
// `;

export const ContactsList = styled.ul`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  border-top: 5px solid var(--second-color);
`;

export const ContactItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--second-color);
  opacity: 0.9;
  min-width: 300px;
  padding: 5px 10px 15px 10px;
  margin: 10px;
  border-top: 10px solid var(--second-color);
  transition: 350ms;

  &:hover {
    border-top: 10px solid var(--accent-color);
    opacity: 1;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
`;

export const FieldContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
`;

export const FieldContact = styled.p`
  font-size: medium;
  min-width: 150px;
  color: var(--some-white-color);
  margin: 0 10px;
`;

export const BtnDelete = styled.button`
  padding: 10px;
  background-color: var(--second-color);
  color: var(--some-white-color);
  border: 1px solid var(--accent-color);
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: var(--accent-color);
    color: var(--second-color);
  }

  &:not(:last-child) {
    margin: 0 20px 0 0;
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  border-left: 3px solid var(--accent-color);
  border-right: 3px solid var(--accent-color);
  margin: 0 20px;
  color: var(--some-white-color);
  font-size: 20px;
`;

export const StatusImg = styled.img`
  border-radius: 50%;
  margin: 10px;
`;
