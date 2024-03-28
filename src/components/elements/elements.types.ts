export interface ISectionTitleProps {
    children: React.ReactNode;
    type?: 'column' | 'row';
    href?: string;
    linkLabel?: string;
    buttonVariant?: 'default' | 'primary' | 'outline' | 'secondary' | 'ghost' | 'link';
    buttonSize?: 'default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-md';
    [key: string]: any;
}
