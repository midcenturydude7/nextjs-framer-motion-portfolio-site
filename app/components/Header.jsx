import Menu from "./Menu";
import Icons from "./Icons";

export default function Header() {
  return (
    <div className="flex items-center justify-between border-b-[1px] border-slate-200/10 px-10 py-[3rem] shadow-xl">
      <Menu />
      <Icons />
    </div>
  );
}
