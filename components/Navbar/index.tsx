import { UserButton } from "@clerk/nextjs";
import MainNav from "@/components/Navbar/main-nav";

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex items-center h-16 px-4">
        <div>Store switcher</div>
        <MainNav className="mx-6" />
        <div className="flex items-center ml-auto space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
