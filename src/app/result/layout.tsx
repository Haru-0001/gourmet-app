import { Header } from "@/components/layouts/header/Header";

export default function resultLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}
