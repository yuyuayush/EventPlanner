import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex h-screen flex-col bg-black w-full ">
        <Header/>
        <main>{children}</main>
       <Footer/>
        </div>
    );
  }