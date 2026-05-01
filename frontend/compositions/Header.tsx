import { TUser } from "@/utils/types";
import InnerContainer from "@/layout/InnerContainer";
import ToggleThemeButton from "@/components/buttons/ToggleThemeButton";
import Image from "next/image";

const Header = ({ user }: { user: TUser }) => {
  return (
    <header className="py-4 bg-white border-b border-gray-200">
      <InnerContainer>
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-x-4">
            <div className="flex justify-center items-center gap-x-2">
              {user.avatarUrl ? (
                <Image
                  alt="user avatar"
                  src={user.avatarUrl}
                  width={40}
                  height={40}
                  priority
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="w-7 h-7 flex justify-center items-center rounded-full bg-blue-400 uppercase text-sm leading-normal font-medium text-white shrink-0">
                  {user.username[0]}
                </div>
              )}
              <div>
                <p className="text-[12px] font-medium text-black leading-normal">
                  {user.username}
                </p>
                <p className="text-[12px] font-normal text-gray-500 leading-normal">
                  {user.email}
                </p>
              </div>
            </div>
          </div>
          <ToggleThemeButton />
        </div>
      </InnerContainer>
    </header>
  );
};

export default Header;
