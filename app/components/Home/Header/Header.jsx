import Menu from "./Navbar/Menu";
import Icons from "./IconMenu/Icons";
import Logo from "./Logo/Logo";

export default function Header() {
  return (
    <div className="flex items-center justify-between space-x-10 border-b-[1px] border-slate-200/10 px-28 py-[3rem] shadow-xl">
      {/* <Logo /> */}
      <Menu />
      <Icons />
    </div>
  );
}
