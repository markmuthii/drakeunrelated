import { Navbar } from "@/components/Navbar";

const RoomsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar hasBorderBottom={false} />
      <div className="h-screen overflow-hidden">
        <div className="min-w-full min-h-full">{children}</div>
      </div>
    </>
  );
};

export default RoomsLayout;
