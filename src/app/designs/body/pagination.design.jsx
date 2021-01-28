import React from "react";
import { Pagination } from "react-bootstrap";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const pagesItem = [
  {
    item: 1,
    link: `/pages/${1}`,
    isActive: true,
  },
  {
    item: 2,
    link: `/pages/${2}`,
    isActive: false,
  },
  {
    item: 3,
    link: `/pages/${3}`,
    isActive: false,
  },
  {
    item: 4,
    link: `/pages/${4}`,
    isActive: false,
  },
  {
    item: 5,
    link: `/pages/${5}`,
    isActive: false,
  },
  {
    item: 6,
    link: `/pages/${6}`,
    isActive: false,
  },
  {
    item: 7,
    link: `/pages/${7}`,
    isActive: false,
  },
];
export function PaginationDesign(props) {
  return (
    <>
      <Pagination>
        {/* <Pagination.First /> */}
        <Pagination.Prev />
        {pagesItem.map((pages, index) => (
          <Pagination.Item
            href={pages.link}
            key={index}
            active={pages.isActive}
          >
            {pages.item}
          </Pagination.Item>
        ))}
        <Pagination.Ellipsis />
        <Pagination.Next />
        {/* <Pagination.Last /> */}
      </Pagination>
    </>
  );
}
