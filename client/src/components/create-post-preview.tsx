import { Input } from "@/components/ui/input";
import { MdGroups2, MdSupervisedUserCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
export default function CreatePostPreviewContainer() {
  const nav = useNavigate();

  return (
    <div className=" flex justify-center">
      <div className="flex justify-center gap-2 items-center bg-neutral-900 w-fit p-2 px-6 rounded-xl">
        <MdSupervisedUserCircle
          onClick={() => {
            nav("/UserProfile");
          }}
          className="text-white w-10 h-10"
        />

        <Input
          onClick={() => {
            nav("/post/create/");
          }}
          className="w-full rounded p-2 "
          type="text"
          placeholder="Have something to discuss?"
        />
        <MdGroups2
          onClick={() => {
            nav("/CreateCommunity");
          }}
          className=" cursor-pointer text-4xl lg:ml-3 text-white"
        />
      </div>
    </div>
  );
}
