import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";



export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen">
           <Navbar/>
                <div className="flex-1 bg-[#CEE0EA]">
                    {children}
                </div>
                <Footer/>
        </div>
    );
}