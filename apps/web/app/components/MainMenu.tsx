import React from "react";
import Microphone from "@repo/ui/Microphone";
import More from "@repo/ui/More";
import Todo from "@repo/ui/Todo";
import Pen from "@repo/ui/Pen";
import Cpu from "@repo/ui/Cpu";
import Storage from "@repo/ui/Storage";
import Chat from "@repo/ui/Chat";
import Share from "@repo/ui/Share";
import Search from "@repo/ui/Search";
import Info from "@repo/ui/Info";
import Calendar from "@repo/ui/Calendar";
import Clock from "@repo/ui/Clock";
import Document from "@repo/ui/Document";
import MainMenuItem from "../components/MainMenuItem";

const MainMenu = () => {
  return (
    <>
      <h1 className="text-center font-extrabold uppercase text-2xl hover:saturate-200 hover:contrast-150 cursor-pointer p-2">
        FIRSTNAME
      </h1>

      <div className="grid grid-cols-3 gap-x-4 gap-y-2 w-fit m-auto">
        <MainMenuItem title={"Journal"}>
          <Document />
        </MainMenuItem>

        <MainMenuItem title={"Notes"}>
          <Pen />
        </MainMenuItem>

        <MainMenuItem title={"ToDo"}>
          <Todo />
        </MainMenuItem>

        <MainMenuItem title={"Storage"}>
          <Storage />
        </MainMenuItem>

        <MainMenuItem title={"FileShare"}>
          <Share />
        </MainMenuItem>

        <MainMenuItem title={"Search"}>
          <Search />
        </MainMenuItem>

        <MainMenuItem title={"Ask AI"}>
          <Cpu />
        </MainMenuItem>

        <MainMenuItem title={"ChatRoom"}>
          <Chat />
        </MainMenuItem>

        <MainMenuItem title={"More"}>
          <More />
        </MainMenuItem>
      </div>

      {/* <MainMenuItem title={"Info"}>
            <Info />
          </MainMenuItem> */}
    </>
  );
};

export default MainMenu;
