import { cloneElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const ActivatableLink = ({ href, children, activeClass, include }) => {
  const router = useRouter();

  let className = children.props.className || '';
  if (router.pathname === href) {
    className = `${className} ${activeClass}`;
  }

  if (include && router.pathname.includes(href)) {
    className = `${className} ${activeClass}`;
  }

  return <Link href={href}>{cloneElement(children, { className })}</Link>;
};
