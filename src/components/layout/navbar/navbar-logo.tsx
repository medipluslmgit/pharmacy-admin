import Image from 'next/image';

const Logo = () => {
  return (
    <>
      <div className="hidden dark:block">
        <Image
          className="md:hidden h-auto"
          src="/logo/white-mobile.svg"
          alt="Logo"
          width="0"
          height="0"
          priority={false}
          style={{ width: 36, height: 'auto' }}
        />
        <Image
          className="hidden md:block h-auto"
          src="/logo/white.svg"
          alt="Logo"
          width="0"
          height="0"
          placeholder="blur"
          blurDataURL="/logo/white.svg"
          priority={false}
          style={{ width: 140, height: 'auto' }}
        />
      </div>
      <div className="dark:hidden">
        <Image
          className="md:hidden h-auto"
          src="/logo/default-mobile.svg"
          alt="Logo"
          width="0"
          height="0"
          style={{ width: 36, height: 'auto' }}
        />
        <Image
          className="hidden md:block h-auto"
          src="/logo/default.svg"
          alt="Logo"
          width="0"
          height="0"
          placeholder="blur"
          blurDataURL="/logo/default.svg"
          priority={false}
          style={{ width: 140, height: 'auto' }}
        />
      </div>
    </>
  );
};

export default Logo;
