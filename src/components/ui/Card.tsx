import React from 'react';

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div
            className={`${className} rounded-xl border border-gray-200 transition-colors duration-300 hover:border-blaze-500`}>
            {children}
        </div>
    );
}

export function CardHeader({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return <div className={`${className} px-4 pt-4 md:px-6 md:pt-6`}>{children}</div>;
}

export function CardFooter({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return <div className={`${className} pb-4 px-4 md:pb-6 md:px-6`}>{children}</div>;
}

export function CardBody({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return <div className={`${className} p-4 md:p-6`}>{children}</div>;
}
