/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import { projects } from "@/Data/Data";
import {AiFillGithub,AiFillEye} from "react-icons/ai"
import Services from "@/components/Services";
import { countUpItems } from "@/Data/Data";
import MyCountUp from "@/components/CountUp";
import { useInView } from "react-intersection-observer";
export default function Portfolio() {
  const {ref,inView} = useInView({
    threshold: 0.5
  })
  return (
    <>
      <Head>
        <title>Kunal Joshi | Portfolio</title>
      </Head>
      <Wrapper pageIndex={3}>
        <div className="flex flex-col pt-40 items-center text-center">
          <div className="uppercase font-semibold text-sm text-WhiteGray">
            - Portfolio
          </div>
          <div className="font-semibold text-3xl mt-8 text-White uppercase">
            My Projects
          </div>
          <p className="text-WhiteGray text-sm mt-8 leading-7 max-w-3xl">
            I specialize in developing custom web applications that cater to
            diverse business needs, from e-commerce platforms to data
            visualization dashboards, using the latest technologies and agile
            methodologies to deliver exceptional user experiences and measurable
            business outcomes.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 md:px-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-Blur p-4  rounded-lg"
              >
                <div className="w-full  relative group">
                  <img src={project.img} alt="project-image" />
                  <div className="absolute w-full h-full bg-Orange top-0 left-0 z-10 flex items-center justify-center gap-4 scale-0 group-hover:scale-100 transition-all duration-300">
                    {
                      (project.githubLink == "")? <></> : <Link href={project.githubLink}>
                      <AiFillGithub className="text-3xl hover:scale-110 transition-all duration-300" />
                    </Link>
                    }
                    

                    <Link href={project.deployedLink}>
                      <AiFillEye className="text-3xl hover:scale-110 transition-all duration-300" />
                    </Link>
                  </div>
                </div>
                <div className="text-White mt-2 text-start">{project.name}</div>
                <div className="flex mt-2 flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-Blur rounded-full py-2 px-3 text-white text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* -----Services ----- */}
        <Services />
        {/* -------Count Up */}
        <div className="flex justify-center gap-12 flex-wrap" ref={ref}>
          {countUpItems.map(item => (
            <div key={item.id} className="text-center">
              <div className="text-Orange text-3xl">
                {inView && <MyCountUp start={0} end={item.number} duration={3}/>}+
              </div>
              <div className="text-WhiteGray mt-2 text-sm">{item.text}</div>
            </div>
          ))}
        </div>
      </Wrapper>
    </>
  );
}
