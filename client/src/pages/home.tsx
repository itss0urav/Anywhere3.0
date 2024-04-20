import CreatePostPreviewContainer from "@/components/create-post-preview";
import { CommonLayout } from "@/components/layouts/common";
import List from "@/components/list";
import PostContainer from "@/components/ui/post-container";
import { data } from "@/data/data";
export default function HomePage() {
  return (
    <CommonLayout className="bg-black">
      <section className="lg:my-12 my-10">
        <CreatePostPreviewContainer />
      </section>
      <div className="flex justify-center">
        <div className="w-[70%] lg:w-full">
          <section className="lg:flex my-10 ">
            <div className="lg:w-[70%]  flex flex-col space-y-6 justify-center items-center">
              {data.map((data) => (
                <PostContainer
                  className="cursor-pointer w-[20rem] lg:w-[30rem]"
                  data={data}
                />
              ))}
            </div>
            <div className="hidden lg:flex lg:w-[30%] h-fit">
              <List title="Popular Communities" data={data} />
            </div>
          </section>
        </div>
      </div>
    </CommonLayout>
  );
}
