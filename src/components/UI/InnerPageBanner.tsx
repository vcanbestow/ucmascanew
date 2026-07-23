import Image from 'next/image';
import Link from 'next/link';

export default function InnerPageBanner({
  imageDesktop,
  imageMobile,
  alt,
  link,
  width = 1200,
  height = 600,
  fill = false,
  priority = false,
  className = '',
  containerClassName = '',
}) {

  const imageContent = (
    <div className={`overflow-hidden ${fill ? 'relative w-full h-full' : ''} ${containerClassName}`}>

      {/* Mobile Image: Default dikhegi, lekin md (medium) screen ya usse upar jaate hi hidden ho jayegi */}
      <div className={`block md:hidden ${fill ? 'relative w-full h-full' : ''}`}>
        <Image
          src={imageMobile}
          alt={alt}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          fill={fill}
          priority={priority}
          className={`object-cover transition-transform duration-500 ${className}`}
        />
      </div>

      {/* Desktop Image: Pehle hidden rahegi, lekin jaise hi md se upar jayegi, block (dikhne) lagegi */}
      <div className={`hidden md:block ${fill ? 'relative w-full h-full' : ''}`}>
        <Image
          src={imageDesktop}
          alt={alt}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          fill={fill}
          priority={priority}
          className={`object-cover transition-transform duration-500 ${className}`}
        />
      </div>

    </div>
  );

  // Agar link pass karoge toh clickable aur cursor pointer ban jayega, warna normal rahega
  if (link) {
    return (
      <Link href={link} className="block cursor-pointer group">
        {imageContent}
      </Link>
    );
  }

  return <div className="block">{imageContent}</div>;
}