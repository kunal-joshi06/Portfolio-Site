import Link from "next/link";
import { WrapperProps } from "@/Types";
import {
  AiFillGithub,
  AiFillLinkedin
} from "react-icons/ai";

export default function Wrapper({pageIndex,children,className}: WrapperProps) {
  const socialClassNames = "text-3xl cursor-pointer text-White"
  return(
    <section className={className}>
      <div className="fixed w-[20rem] h-[20rem] xs:w-[28rem] xs:h-[28rem] md:w-[50rem] md:h-[50rem]  md:-left-10 md:-top-40 -z-10 bg-Blur rounded-full blur-3xl"></div>
      <>{children}</>

      <div className="fixed bottom-12 left-6 hidden md:flex items-center flex-col gap-4">
        <Link href={"https://github.com/kunal-joshi06"} target={"_blank"}>
          <AiFillGithub className={socialClassNames} />
        </Link>
        <Link href={"https://www.linkedin.com/in/kunal-joshi-033b7b23a"} target={"_blank"}>
          <AiFillLinkedin className={socialClassNames} />
        </Link>
      </div>
      <div className="fixed bottom-14 right-6 xs:text-3xl text-2xl text-Orange">
        0{pageIndex}
      </div>
    </section>
  )
}
