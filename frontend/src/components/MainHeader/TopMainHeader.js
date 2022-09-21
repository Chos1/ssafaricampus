
import UserHeader from './UserHeader.js'

const TopMainHeader = () => {
  return (
      <div>
          <div>LOGO</div>
          <div>
            <input type="text" name="searchBar" placeholder="검색어를 입력하세요." />
          </div>
          <UserHeader />
      </div>
  );
};

export default TopMainHeader;