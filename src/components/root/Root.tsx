import { FC, ReactNode } from 'react';
import { Work_Sans } from 'next/font/google';

const work_sans = Work_Sans({ subsets: ['latin'] });

type Props = {
    children?: ReactNode;
};

const Root: FC<Props> = ({ children }) => {
    const bodyClasses = 'flex flex-col min-h-screen text-white';

    return (
        <html lang='en' suppressHydrationWarning>
            <body className={`${bodyClasses} ${work_sans.className}`}>{children}</body>
        </html>
    );
};

export default Root;
