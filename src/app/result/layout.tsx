

export default function resultLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div data-theme="cupcake" className="flex justify-center">
            {children}
        </div>
    );
}
