import { BallTriangle } from 'react-loader-spinner';
import { CenterBox } from './Loader.styled';

export const Loader = () => {
  return (
    <CenterBox>
      <BallTriangle
        heigth="100"
        width="100"
        color="grey"
        ariaLabel="loading-indicator"
      />
    </CenterBox>
  );
};
