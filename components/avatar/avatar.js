import Image from 'next/image';

export const Avatar = ({ className }) => {
  return (
    <Image
      src="/images/me.png"
      alt="Picture of the author"
      width={128}
      height={128}
      layout="responsive"
      className={className}
    />
  );
};
