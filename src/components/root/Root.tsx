import { FC, ReactNode } from 'react';
import { Work_Sans } from 'next/font/google';

const work_sans = Work_Sans({ subsets: ['latin'] });

type Props = {
    children?: ReactNode;
};

const Root: FC<Props> = ({ children }) => {
    return (
        <html lang='en' className='h-full' suppressHydrationWarning>
            <body className={`flex flex-col min-h-full text-white ${work_sans.className}`}>{children}</body>
        </html>
    );
};

export default Root;
