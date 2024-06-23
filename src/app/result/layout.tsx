import { Header } from "@/components/layouts/header/Header";
import { Footer } from "@/components/layouts/footer/Footer";
import { ResultPagination } from "@/components/modules/ResultPagination";

export default function resultLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            {children}
            <ResultPagination />
            <Footer />
        </div>
    );
}
