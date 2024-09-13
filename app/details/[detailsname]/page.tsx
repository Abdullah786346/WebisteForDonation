"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { models } from "../../../constants/models";
import Button from "@/components/Button";
import { useParams, useRouter } from "next/navigation";

type ModelInterface = {
  title: string;
  desc: string;
  content: ContentObject[];
};

type ContentObject = {
  subheading?: string | null;
  paragraph?: string | null;
};

const DetailPage = () => {
  const params = useParams();
  const model: ModelInterface =
    models[params.detailsname as keyof typeof models];
  const router = useRouter();

  if (!model) {
    notFound(); // This triggers the 404 page if the detail is not found
  }

  return (
    <>
      <Header />
      <section className="bg-white w-full flex">
        <div className="min-h-screen flex justify-center items-center p-4 pl-12 md:pl-24">
          <div className="max-w-3xl">
            <h1 className="text-blue-800 font-main text-4xl md:text-5xl font-bold mb-4 pt-14">
              {model.title}
            </h1>
            <p className="text-blue-900 font-roboto text-lg mb-4">
              {model.desc}
            </p>
            <div className="text-blue-900 font-montserrat font-medium text-base leading-relaxed space-y-6 pt-12">
              {model.content.map((object: ContentObject, index) => {
                return (
                  <>
                    {object?.subheading ? (
                      <h3 className="text-blue-800 font-roboto font-bold text-2xl">
                        {object.subheading}
                      </h3>
                    ) : null}
                    {object?.paragraph ? (
                      <p className="pt-0" key={index}>
                        {object.paragraph}
                      </p>
                    ) : null}
                  </>
                );
              })}
            </div>
            <div className="lg:flex items-center gap-2  pt-16 pb-16">
              <Button
                variant="blue"
                disabled={false}
                size="lg"
                onClick={() => {
                  router.back();
                }}
              >
                Done
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DetailPage;
