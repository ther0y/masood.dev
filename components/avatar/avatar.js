import Image from 'next/image';

export const Avatar = ({ className }) => {
  return (
    <Image
      src="/images/me.png"
      alt="Masood's Avatar"
      width={128}
      height={128}
      className={className}
      unoptimized={true}
      draggable={false}
    />
  );
};
