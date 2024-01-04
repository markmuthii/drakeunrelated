import { Navbar } from "@/components/Navbar";

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar hasBorderBottom={true} />
      <div className="min-w-full h-screen overflow-y-hidden">{children}</div>
    </>
  );
};

export default ProductsLayout;
