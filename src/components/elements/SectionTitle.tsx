'use client';

import React, { useEffect, useState } from 'react';
import { ISectionTitleProps } from './elements.types';
import Button from '../ui/Button';

export default function SectionTitle({
    children,
    type = 'row',
    href,
    linkLabel,
    titleOnly,
    ...props
}: ISectionTitleProps) {
    const [isExternal, setIsExternal] = useState<boolean>(false);

    useEffect(() => {
        if (href && href[0] !== '/') {
            setIsExternal(true);
        }
    }, [href]);

    return (
        <div
            className={`flex mb-6 items-center gap-2 ${type === 'column' ? 'flex-col' : ''} ${
                titleOnly ? 'justify-center' : 'justify-between'
            }`}>
            {type === 'row' ? (
                <h2 className={`text-foreground ${titleOnly ? 'text-center' : ''}`}>{children}</h2>
            ) : (
                <>{children}</>
            )}

            {href && !titleOnly && (
                <Button
                    href={href}
                    passHref={isExternal}
                    variant={props.buttonVariant || 'link'}
                    className="pr-0"
                    size={props.buttonSize || 'sm'}
                    {...props}>
                    {linkLabel}
                </Button>
            )}
        </div>
    );
}
