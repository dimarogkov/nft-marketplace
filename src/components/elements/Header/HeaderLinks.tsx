import { FC } from 'react';
import Link from 'next/link';
import { PATHS } from '@/src/variables/paths';
import { headerLinks } from '@/src/variables/headerLinks';

import { BtnLink } from '../../ui';
import { User } from 'lucide-react';
import cn from 'classnames';

type Props = {
    isOpen: boolean;
};

const HeaderLinks: FC<Props> = ({ isOpen }) => {
    const rightBlockClasses =
        'z-10 fixed bottom-0 lg:bottom-auto right-0 lg:right-auto lg:relative flex flex-col lg:flex-row lg:items-center w-full sm:w-[450px] lg:w-auto height-full lg:h-full lg:h-auto gap-5 sm:gap-6 lg:gap-10 p-4 sm:p-6 lg:p-0 bg-black';

    const rightBlockTransitionClasses = 'transition-all duration-300';
    const linkClasses = 'font-medium uppercase lg:capitalize transition-colors duration-300';
    const linkHoverClasses = 'hover:text-purple';

    return (
        <div
            className={cn(`${rightBlockClasses} ${rightBlockTransitionClasses}`, {
                'opacity-0 lg:opacity-100 invisible lg:visible translate-x-full sm:translate-x-[450px] lg:translate-x-0':
                    !isOpen,
                'opacity-100 visible translate-x-0': isOpen,
            })}
        >
            {headerLinks.map(({ href, text }) => (
                <Link key={text} href={href} className={`${linkClasses} ${linkHoverClasses}`}>
                    {text}
                </Link>
            ))}

            <BtnLink href={PATHS.SIGN_UP} icon={User}>
                Sign Up
            </BtnLink>
        </div>
    );
};

export default HeaderLinks;
