import { Spinner } from "@/app/tickets/display/Spinner";
import { padWithLeadingZeros } from "@/libs/utils";
import { getActiveTickets } from "@/src/queries/tickets.query";
import {
  CalendarCheck,
  CalendarX,
  ChevronLeft,
  Flag,
  UserRoundCheck,
} from "lucide-react";
import Link from "next/link";

export default async function DisplayTicket() {
  const tickets = await getActiveTickets();
  const ticket = tickets[0];
  const createdAt = new Date(ticket.createdAt);
  const date = new Date(ticket.expires);

  const timeDiff = date.getTime() - createdAt.getTime();
  const timePassed = Date.now() - createdAt.getTime();

  return (
    <div className={"flex flex-col w-full h-full"}>
      <header className={"w-full mb-5 relative"}>
        <Link href={"/tickets/active"} className={"absolute top-2.5 left-3"}>
          <ChevronLeft size={32} />
        </Link>
        <img
          src="/qrcodebanner.png"
          alt="qr code banner sample"
          className={"w-full"}
        />
      </header>
      <div className={"w-full h-full pr-1"}>
        <div
          className={
            "flex flex-col items-center justify-between px-2 pb-10 w-full h-full bg-[#a8ccec] rounded-t-[80px]"
          }
        >
          <div className={"py-14 flex items-center justify-center"}>
            <Spinner />
          </div>
          <div className={"px-0 w-full flex flex-col items-center"}>
            <div
              className={"w-full mb-2 rounded-lg border border-accent bg-white"}
            >
              <header
                className={
                  "w-full flex justify-between bg-[#dfe7f4] rounded-lg rounded-b-none"
                }
              >
                <span
                  className={
                    "rounded-lg rounded-tr-none rounded-bl-none border-r border-b border-accent bg-white flex flex-row items-center justify-center px-4"
                  }
                >
                  <UserRoundCheck size={20} className={"text-accent"} />
                  <span className={"font-bold text-2xl"}>1</span>
                </span>
                <h2 className={"p-2 text-right font-bold text-lg"}>
                  {ticket.type}{" "}
                  <span className={"block -mt-1"}>{ticket.subtype}</span>
                </h2>
              </header>
              <div className={"p-2"}>
                <div>
                  <span className={"text-lg font-bold flex items-center mb-1"}>
                    <Flag size={20} className={"text-accent mr-2"} />{" "}
                    {ticket.from}
                  </span>
                  <span className={"text-lg font-bold flex items-center mb-3"}>
                    <Flag size={20} className={"text-accent mr-2"} />{" "}
                    {ticket.to}
                  </span>
                </div>
                <div className={"flex justify-between w-full"}>
                  <div>
                    <p>Période de validité</p>
                    <span className={"flex font-normal items-center"}>
                      <CalendarCheck
                        size={20}
                        className={"text-success mr-1.5"}
                      />{" "}
                      {padWithLeadingZeros(createdAt.getDate())}/
                      {padWithLeadingZeros(createdAt.getMonth() + 1)}/
                      {createdAt.getFullYear()} à{" "}
                      {padWithLeadingZeros(createdAt.getHours())}:
                      {padWithLeadingZeros(createdAt.getMinutes())}
                    </span>
                    <span className={"flex font-bold items-center"}>
                      <CalendarX size={20} className={"text-red-500 mr-1.5"} />{" "}
                      {padWithLeadingZeros(date.getDate())}/
                      {padWithLeadingZeros(date.getMonth()) + 1}/
                      {date.getFullYear()} à{" "}
                      {padWithLeadingZeros(date.getHours())}:
                      {padWithLeadingZeros(date.getMinutes())}
                    </span>
                  </div>
                  <aside
                    className={
                      "border-l border-l-accent flex flex-col justify-end pl-2"
                    }
                  >
                    <Link
                      href={"/tickets/code"}
                      className={"border border-black rounded p-1"}
                    >
                      <img
                        src={"/qrcode.png"}
                        alt={"qrcode sample image"}
                        className={"w-12"}
                      />
                    </Link>
                  </aside>
                </div>
              </div>
            </div>
            <div
              className={"w-full mb-2 rounded-lg border border-accent bg-white"}
            >
              <header
                className={
                  "w-full flex justify-center items-center bg-[#dfe7f4] rounded-lg rounded-b-none"
                }
              >
                <h2 className={"p-2 text-right font-bold text-lg"}>
                  Informations de contrôle
                </h2>
              </header>
              <div className={"p-3 flex flex-col items-center justify-center"}>
                <p
                  className={
                    "flex items-center justify-center font-medium mb-1"
                  }
                >
                  <CalendarCheck size={20} className={"text-success mr-2"} />{" "}
                  {padWithLeadingZeros(createdAt.getDate())}/
                  {padWithLeadingZeros(createdAt.getMonth() + 1)}/
                  {createdAt.getFullYear()} à{" "}
                  {padWithLeadingZeros(createdAt.getHours())}:
                  {padWithLeadingZeros(createdAt.getMinutes())}
                </p>
                <p className={"text-2xl font-bold text-[#202020]"}>
                  202-658F6AE6A1193
                </p>
              </div>
            </div>
            <div
              className={"w-full h-8 bg-white border border-black rounded-3xl"}
            >
              <div
                className={`h-full bg-success rounded-3xl`}
                style={{
                  width: `${Math?.round((timePassed / timeDiff) * 100)}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
