import { NotFoundContainer, ErrorName, ErrorCode } from './NotFound.styled';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <ErrorName>Not found</ErrorName>
      <ErrorCode>ERROR 404</ErrorCode>
    </NotFoundContainer>
  );
};

export default NotFound;
