import CreatePostPreviewContainer from "@/components/create-post-preview";
import { CommonLayout } from "@/components/layouts/common";
import PostContainer from "@/components/ui/post-container";

export default function HomePage() {
  const data = {
    _id: { $oid: "65cf845b2eb75ddd2ba127b0" },
    name: "Stake",
    category: "Gambling",
    description:
      "Stake.com is an Australian-Curaçaoan online casino. It is operated by Medium Rare NV, a company incorporated in Curaçao where it holds an online casino licence. It is a global company with offices in Serbia, Australia, Cyprus and staff globally.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Stake_logo.svg/1200px-Stake_logo.svg.png",
    nsfw: true,
    author: "test",
    community: "Crypto",
    votes: [
      {
        user: "65cf81512eb75ddd2ba12606",
        voteStatus: { $numberInt: "1" },
        _id: { $oid: "65cf870e2eb75ddd2ba12868" },
      },
      {
        user: "65cf87dc2eb75ddd2ba1293f",
        voteStatus: { $numberInt: "-1" },
        _id: { $oid: "65cf8a482eb75ddd2ba12a32" },
      },
      {
        user: "65dee11d3995641c8c536381",
        voteStatus: { $numberInt: "1" },
        _id: { $oid: "65def09d70229d7dcc1f5ff5" },
      },
      {
        user: "6608eebb01d3cea78d9863d7",
        voteStatus: { $numberInt: "1" },
        _id: { $oid: "6608f32f01d3cea78d986cde" },
      },
    ],
    comments: [],
    createdAt: { $date: { $numberLong: "1708098651685" } },
    updatedAt: { $date: { $numberLong: "1711862575546" } },
    __v: { $numberInt: "4" },
  };
  return (
    <CommonLayout className="bg-black">
      <section>
        <CreatePostPreviewContainer />
      </section>
      <section className="lg:flex my-10 ">
        <div className="lg:w-[70%] flex justify-center">
          <PostContainer className="w-[30rem]" data={data} />
        </div>
        <div className="lg:w-[30%]">
          <div className="bg-white">fd </div>
        </div>
      </section>
    </CommonLayout>
  );
}
