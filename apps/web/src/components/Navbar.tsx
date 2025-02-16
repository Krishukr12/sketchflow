import { RocketIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "./ui/button";

interface ILinkData {
  title: string;
  path: string;
}

const LinkData: ILinkData[] = [
  {
    title: "Features",
    path: "#features",
  },
  {
    title: "Draw",
    path: "/draw",
  },
  {
    title: "Pricing",
    path: "#pricing",
  },
];

const Navbar = () => {
  return (
    <section>
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md z-50 ">
        <div className="container mx-auto flex items-center justify-between h-16 px-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <RocketIcon className="w-6 h-6 text-white" />
            </div>
            <Link href="/">
              <span className="text-xl font-bold text-gray-800">
                SketchFlow
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {LinkData.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 ">
            <Link href="/signin">
              <Button variant="ghost" className="text-gray-700">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 hidden sm:flex">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
