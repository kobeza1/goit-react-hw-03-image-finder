import { ThreeDots } from 'react-loader-spinner';
import { CenterBox } from './Loader.styled';

export const Loader = () => {
  return (
    <CenterBox>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#f5f5f5"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </CenterBox>
  );
};
