import Image from 'next/image';

export const Avatar = ({ className }) => {
  return (
    <Image
      src="/assets/me.png"
      alt="Picture of the author"
      layout="fill"
      className={className}
    />
  );
};
