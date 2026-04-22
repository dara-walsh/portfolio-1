import React, { PropsWithChildren } from 'react';
import ContrastCursor from '@/components/animations/cursor/contrastCursor';
import { clsx } from 'clsx';

type Props = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

export default function Layout({
  children,
  title,
  subtitle,
  center
}: PropsWithChildren<Props>) {
  return (
    <div className="mt-8 px-8 py-8 sm:py-10">
      <div className={clsx('pb-14', center ? 'text-center' : '')}>
        <h1
          className={clsx(
            'text-3xl font-medium lg:text-[10rem] leading-tight sm:leading-tight md:leading-tight',
            center ? 'items-center' : ''
          )}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={clsx(
              'mt-4 text-lg text-foreground/70 sm:text-xl lg:mt-6 lg:text-2xl',
              center ? 'mx-auto max-w-2xl' : ''
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
      {children}
      <ContrastCursor isActive={false} text={''} />
    </div>
  );
}
