import { useSelector, useDispatch } from 'react-redux';
import {
  selectVisibleContacts,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';
import { deleteContacts } from 'redux/contacts/contacts-operations';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import Avatar from 'react-avatar';
import { useEffect, useState } from 'react';
import UpdateContactForm from 'components/UpdateContactForm/UpdateContactForm';
import {
  ContactsContainer,
  // SortBtnContainer,
  ContactsList,
  ContactItem,
  ContactContainer,
  FieldContact,
  FieldContactContainer,
} from 'components/Contacts/Contacts.styled';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ModalEl from 'components/Modal/Modal';

const Root = styled('div')(({ theme }) => ({
  margin: theme.spacing(1),
}));

const Contacts = () => {
  const [contactUpdate, setContactUpdate] = useState(null);
  // const [contactSort, setContactSort] = useState(null);
  // const [sort, setSort] = useState(false);
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  // const handleSort = () => {
  //   const sortContacts = [...contacts].sort(function (a, b) {
  //     if (a.name > b.name) {
  //       return 1;
  //     }
  //     if (a.name < b.name) {
  //       return -1;
  //     }
  //     return 0;
  //   });
  //   setContactSort(sortContacts);
  //   setSort(!sort);
  //   console.log(sortContacts);
  // };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const showUpdateForm = contactId => {
    const contact = contacts.find(({ id }) => id === contactId);
    setContactUpdate(contact);
  };

  const closeForm = () => {
    setContactUpdate(null);
  };

  return (
    <ContactsContainer>
      <ContactsList>
        <>
          {contacts.map(({ name, number, id }) => (
            <>
              <ContactItem key={id}>
                <ModalEl>
                  {contactUpdate && contactUpdate.id === id && (
                    <UpdateContactForm
                      contactUpdate={contactUpdate}
                      closeForm={closeForm}
                    />
                  )}
                </ModalEl>
                <ContactContainer>
                  <Avatar name={name} size="50" borderRadius="5" />
                  <FieldContactContainer>
                    <FieldContact>Name: {name}</FieldContact>
                    <FieldContact>Number: {number}</FieldContact>
                  </FieldContactContainer>
                  <Root>
                    <Button
                      variant="outlined"
                      onClick={() => dispatch(deleteContacts(id))}
                    >
                      {isLoading ? 'Deleting' : 'Delete'}
                    </Button>
                  </Root>
                  <Root>
                    <Button
                      variant="outlined"
                      onClick={() => showUpdateForm(id)}
                    >
                      Edit
                    </Button>
                  </Root>
                </ContactContainer>
              </ContactItem>
            </>
          ))}
        </>
      </ContactsList>
    </ContactsContainer>
  );
};

export default Contacts;

// return (
//   <ContactsContainer>
//     <SortBtnContainer>
//       {!sort ? (
//         <Button variant="outlined" onClick={handleSort}>
//           Sort by A-Z
//         </Button>
//       ) : (
//         <Button variant="outlined" onClick={handleSort}>
//           Return as it was
//         </Button>
//       )}
//     </SortBtnContainer>
//     <ContactsList>
//       {!sort ? (
//         <>
//           {contacts.map(({ name, number, id }) => (
//             <>
//               {contactUpdate && contactUpdate.id === id && (
//                 <UpdateContactForm
//                   contactUpdate={contactUpdate}
//                   closeForm={closeForm}
//                 />
//               )}
//               <ContactItem key={id}>
//                 <ContactContainer>
//                   <Avatar name={name} size="50" borderRadius="5" />
//                   <FieldContactContainer>
//                     <FieldContact>Name: {name}</FieldContact>
//                     <FieldContact>Number: {number}</FieldContact>
//                   </FieldContactContainer>
//                   <Root>
//                     <Button
//                       variant="outlined"
//                       onClick={() => dispatch(deleteContacts(id))}
//                     >
//                       {isLoading ? 'Deleting' : 'Delete'}
//                     </Button>
//                   </Root>
//                   <Root>
//                     <Button
//                       variant="outlined"
//                       onClick={() => showUpdateForm(id)}
//                     >
//                       Edit
//                     </Button>
//                   </Root>
//                 </ContactContainer>
//               </ContactItem>
//             </>
//           ))}
//         </>
//       ) : (
//         <>
//           {contactSort.map(({ name, number, id }) => (
//             <>
//               {contactUpdate && contactUpdate.id === id && (
//                 <UpdateContactForm
//                   contactUpdate={contactUpdate}
//                   closeForm={closeForm}
//                 />
//               )}
//               <ContactItem key={id}>
//                 <ContactContainer>
//                   <Avatar name={name} size="50" borderRadius="5" />
//                   <FieldContactContainer>
//                     <FieldContact>Name: {name}</FieldContact>
//                     <FieldContact>Number: {number}</FieldContact>
//                   </FieldContactContainer>
//                   <Root>
//                     <Button
//                       variant="outlined"
//                       onClick={() => dispatch(deleteContacts(id))}
//                     >
//                       {isLoading ? 'Deleting' : 'Delete'}
//                     </Button>
//                   </Root>
//                   <Root>
//                     <Button
//                       variant="outlined"
//                       onClick={() => showUpdateForm(id)}
//                     >
//                       Edit
//                     </Button>
//                   </Root>
//                 </ContactContainer>
//               </ContactItem>
//             </>
//           ))}
//         </>
//       )}
//     </ContactsList>
//   </ContactsContainer>
// );
