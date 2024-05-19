import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <nav className="w-full h-[60px] bg-gray-900 text-white p-3 flex justify-between items-centre">
      <Link to="/">
        <h2 className="select-none font-extrabold text-2xl">CodeZ</h2>
      </Link>
      <ul className="flex gap-2">
        <li>
          <Link to="/Compiler" > <Button variant={"secondary"}>Compiler</Button></Link>
        </li>
      </ul>
    </nav>
  );
}
