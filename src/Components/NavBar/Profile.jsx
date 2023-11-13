import { UserIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
const Profile = () => {
  return (
    <div className="flex items-center gap-4">
      <UserIcon className="w-6 h-6 hover:text-[#FF7E0D] " />
      <ShoppingBagIcon className="w-6 h-6 hover:text-[#FF7E0D]" />
    </div>
  );
};

export default Profile;
