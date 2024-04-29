

export default function resultLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div data-theme="cupcake">
            {children}
        </div>
    );
}
