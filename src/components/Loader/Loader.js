import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

function Loader() {
  return (
    <div className={css.loader}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#2e8de5"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
      />
    </div>
  );
}
export default Loader;
