import Head from "next/head";
import Wrapper from "@/components/Wrapper";
import { contacts } from "@/Data/Data";
import { FormEvent } from "react";
export default function contact() {
  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }
  return (
    <>
      <Head>
        <title>Kunal Joshi | Contact</title>
      </Head>
      <Wrapper
        pageIndex={4}
        className="text-White gap-12 flex flex-col justify-center items-center lg:flex-row pt-28 lg:pt-0"
      >
        <div className="md:px-6 py-6 text-center">
          <div className="uppercase md:text-4xl text-3xl md:tracking-widest tracking-wide font-semibold">
            Contact
          </div>
          <p className="leading-8 mb-8 text-sm max-w-xl mt-10 text-WhiteGray">
            If you&apos;re looking for a skilled frontend developer to help bring
            your web application ideas to life, feel free to contact me. Let&apos;s
            discuss how I can contribute to your team and deliver top-notch
            results.
          </p>
          <div>
            {contacts.map(contact => (
              <div className="mt-6" key={contact.id}>
                <div className="text-xl font-medium mb-2">{contact.title}</div>
                <div className="text-sm text-WhiteGray">{contact.text}</div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
}
