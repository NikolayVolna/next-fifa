import Link from "next/link";
import React from "react";

import type { Group as GroupT } from "./../data/fifa";

import { Group } from "./Group";

interface Props {
  groups: GroupT[];
}

export default function Groups({ groups }: Props) {
  return (
    <>
      <div className="container my-0 mx-auto pb-36 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 gap-x-1 text-rose-900	">
        {groups.map((group) => {
          return (
            <div
              key={group.name}
              className="rounded-2xl bg-gray-300 mx-10 bmv:mx-20 md:mx-2 px-5 py-2 text-2xl">
              <Link
                href={{
                  pathname: "/react-practice/fifa/group/[id]",
                  query: { id: group.name },
                }}>
                {group.name}
              </Link>
              <hr className="border-yellow-500" />
              <Group group={group} />
            </div>
          );
        })}
      </div>
    </>
  );
}
