import Image from "next/image";
import NextSvg from "@public/next.svg";

type NextLogoProps = {
    className?: string;
    width: number,
    height: number,
};

const useController = ({ className, width, height }: NextLogoProps) => {
    return {
        className: className || "",
        width,
        height
    };
}

const view = ({ className, width, height }: ReturnType<typeof useController>) => {
    return (
    <div className={`logo ${className}`}>
      <Image src={NextSvg} alt="Logo" width={100} height={20} priority />
    </div>
  );
}

const NextLogo = (props: NextLogoProps) => view(useController(props));
export default NextLogo;