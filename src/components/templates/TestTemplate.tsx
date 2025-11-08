
import NextLogo from "@atoms/NextLogo";

type TestTemplateProps = {
    children: React.ReactNode;
};

const useController = ({ children }: TestTemplateProps) => {
    return {
        children
    };
}

const view = ({ children }: ReturnType<typeof useController>) => {
    return (
        <main className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <div className="w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
                <header className="mb-8">
                    <NextLogo className="dark:invert" width={100} height={20} />
                </header>

                <div className="grow">
                    {children}
                </div>

                <footer className="mt-8 text-sm text-zinc-500">© Mon app</footer>
            </div>
        </main>
  );
}

const TestTemplate = (props: TestTemplateProps) => view(useController(props));
export default TestTemplate;