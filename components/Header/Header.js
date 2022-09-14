import Image from 'next/image';
import HeaderItem from '../HeaderItem/HeaderItem';
import { CheckBadgeIcon, CircleStackIcon, HomeIcon, LightBulbIcon, UserIcon, MagnifyingGlassIcon} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row items-center justify-between'>
        <div className='flex flex-grow justify-evenly max-w-2xl pt-2'>
            <HeaderItem title={"HOME"} Icon={HomeIcon}/>
            <HeaderItem title={"TRENDING"} Icon={LightBulbIcon}/>
            <HeaderItem title={"VERIFIED"} Icon={CheckBadgeIcon}/>
            <HeaderItem title={"COLLECTIONS"} Icon={CircleStackIcon}/>
            <HeaderItem title={"SEARCH"} Icon={MagnifyingGlassIcon}/>
            <HeaderItem title={"ACCOUNT"} Icon={UserIcon}/>
        </div>
        <Image src="https://links.papareact.com/ua6" width={100} height={50}/>
    </header>
  )
}


export default Header;