import styled from 'styled-components';

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SortBtnContainer = styled.div`
  width: 200px;
  margin-top: 20px;
`;

export const ContactsList = styled.ul`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
`;

export const ContactItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid var(--second-color);
  opacity: 0.9;
  padding: 15px;
  margin: 10px;
  border-top: 1px solid var(--second-color);
  border-radius: 5px;
  transition: 250ms ease-in-out;
  min-width: 300px;

  animation: showLeft 1500ms ease-in-out;

  @keyframes showLeft {
    0% {
      transform: translate(-120%, 0px);
      opacity: 0;
    }
    100% {
      transform: translate(0px, 0px);
      opacity: 0.9;
    }
  }

  &:hover {
    border-color: var(--accent-color);
    border-top: 10px solid var(--accent-color);
    opacity: 1;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export const FieldContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
`;

export const FieldContact = styled.p`
  font-size: medium;
  min-width: 150px;
  color: var(--second-color);
  margin: 0 10px;
`;
