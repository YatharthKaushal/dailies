import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import MainMenu from "./components/MainMenu";

export default function Home() {
  return (
    <>
      <div className="p-10 lg:max-w-[70vw] min-h-[95vh] lg:m-auto flex ">
        <div className=" m-auto max-w-fit mt-[30vh]">
          <MainMenu />
        </div>
      </div>
      <div className="w-fit rounded-sm p-1 m-auto flex text-xs bg-base-300 text-slate-500 font-bold uppercase cursor-pointer ">
        developed by Yatharth.k
      </div>
    </>
  );
}
