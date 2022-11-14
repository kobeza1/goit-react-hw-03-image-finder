import { ThreeDots, BallTriangle } from 'react-loader-spinner';
import { CenterBox } from './Loader.styled';

export const Loader = () => {
  return (
    <CenterBox>
      {/* <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="blue"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      /> */}

      <BallTriangle
        heigth="100"
        width="100"
        color="grey"
        ariaLabel="loading-indicator"
      />
    </CenterBox>
  );
};
