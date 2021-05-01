import Image from 'next/image';
// width = 120,
//     height = 120,
//     rounded = false
export const Avatar = ({ className }) => {
  return (
    <Image
      src="/images/me.png"
      alt="Picture of the author"
      layout="fill"
      className={className + ' '}
      unoptimized={true}
    />
  );
};
