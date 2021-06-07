import Link from 'next/link';
import Image from 'next/image';

function nav(link, img, name) {
    return (
        <Link href = {link} className = ''>
            <div className = 'w-full sm:h-12 p-2 sm:p-4 m-auto hover:bg-blue-50 active:bg-blue-50 hover:cursor-pointer'>
                <div className = 'inline-block align-middle mr-1 sm:mr-3'>
                    <Image
                        priority
                        src={img}
                        className = ''
                        height={20}
                        width={20}
                    />
                </div>
                <div className = 'text-xs sm:text-base inline-block text-gray-400'>{name}</div>
            </div>
        </Link>
    );
}

export { nav };