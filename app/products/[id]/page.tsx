import Image from "next/image"
import Link from "next/link"

import { getCurrentUser } from "@/lib/session"
import { getProjectDetails } from "@/lib/actions"
import Modal from "@/components/Modal"
// import ProjectActions from "@/components/ProjectActions"
import { ProjectInterface } from "@/common.types"


const Project = async ({ params: { id } }: { params: { id: string } }) => {
  const session = await getCurrentUser()
  const result = await getProjectDetails(id) as { project?: ProjectInterface }

  if (!result?.project) return (
    <p className="no-result-text">Failed to fetch project info</p>
  )

  const projectDetails = result?.project

  const renderLink = () => `/profile/${projectDetails?.title}`

  return (
    <div className="p-7">
      <section className="grid grid-cols-2 gap-5">
        <section className="flex gap-2">
          <section className="flex flex-col gap-2">

          <Image
            src={`${projectDetails?.image1}`}
            className="object-cover"
            width={150}
            height={200}
            alt="poster"
            />
          <Image
            src={`${projectDetails?.image2}`}
            className="object-cover"
            width={150}
            height={200}
            alt="poster"
            />
          <Image
            src={`${projectDetails?.image3}`}
            className="object-cover"
            width={150}
            height={200}
            alt="poster"
            />
          </section>
          <section>
            <Image
              src={`${projectDetails?.image}`}
              className="object-cover"
              width={600}
              height={700}
              alt="poster"
            />
          </section>
        </section>

      {/* detail section */}
        <section className="paddings">
          <h2>{projectDetails?.title}</h2>
          <section className="inline">
            <span>share</span>
            <Link href="/">
                  <Image
                    src='/linkedin.png'
                    width={35}
                    height={35}
                    alt='instagram logo'
                  />
                </Link>
          </section>
        </section>
      </section>
      {/* <section className="flexBetween gap-y-8 max-w-4xl max-xs:flex-col w-full">
                <div className="flex-1 flex items-start gap-5 w-full max-xs:flex-col">

                    <div className="flex-1 flexStart flex-col gap-1">
                        <p className="self-start text-lg font-semibold">
                            {projectDetails?.title}
                        </p>
                        <div className="user-info">
                            <Link href={renderLink()}>
                                {projectDetails?.title}
                            </Link>
                            <Image src="/dot.svg" width={4} height={4} alt="dot" />
                            <Link href={`/?category=${projectDetails.category}`} className="text-primary-purple font-semibold"> 
                                {projectDetails?.category}
                            </Link>
                        </div>
                    </div>
                </div>

            </section>

            <section className="mt-14">
                <Image
                    src={`${projectDetails?.image}`}
                    className="object-cover rounded-2xl"
                    width={1064}
                    height={798}
                    alt="poster"
                />
            </section>

            <section className="flexCenter flex-col mt-20">
                <p className="max-w-5xl text-xl font-normal">
                    {projectDetails?.description}
                </p>
            </section>
   */}
    </div>
  )
}

export default Project