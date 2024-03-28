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
    return <div className={`${className} px-6 pt-6`}>{children}</div>;
}

export function CardFooter({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return <div className={`${className} pb-6 px-6`}>{children}</div>;
}

export function CardBody({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return <div className={`${className} p-6`}>{children}</div>;
}
