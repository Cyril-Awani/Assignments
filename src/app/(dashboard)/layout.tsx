import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Cawani",
  description: "Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex">
      {/*Left*/}
      <div className="w-[14%] md:w-[16%] lg:w-[16%]">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          {/*<Image src="logo.png" alt="Cawani Logo" width={32} height={32}/>*/}
          <span className="hidden lg:block ">LoGo</span>
        </Link>
        <Menu />
      </div>
      {/*RIGHT*/}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] bg-gray-100 overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
