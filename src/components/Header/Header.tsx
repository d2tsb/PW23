import './Header.scss';
import MenuSwitch from './MenuSwitch/MenuSwitch';

const Header = () => {
  const title = ':Homepage';
  return (
    <header className='header'>
      <div className='header__elements'>
        <p className='header__text'>{title}</p>
        <MenuSwitch />
      </div>
    </header>
  );
};
export default Header;
