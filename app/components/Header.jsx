import Menu from "./Menu";
import Icons from "./Icons";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className="flex items-center justify-between border-b-[1px] border-slate-200/10 px-28 py-[3rem] shadow-xl">
      <Logo />
      <Menu />
      <Icons />
    </div>
  );
}
