"use client";
import { Avatar } from "@mui/material";
import Image from "next/image";
import React from "react";

interface ArticleProps {
  id: number;
  category: string;
  title: string;
  img: any;
  name: string;
  date: string;
}
const Article: React.FC<ArticleProps> = ({
  id,
  category,
  title,
  img,
  name,
  date,
}) => {
  return (
    <div className="flex flex-col">
      <div className="text-sm text-black bg-white px-4 rounded">
        {category.toLocaleUpperCase()}
      </div>
      <h3 className="text-3xl font-bold">{title}</h3>
      <div>
        <Avatar alt={name} src={img} />
        <div>
          <p className="text-sm text-white">Di {name}</p>
          <p className="text-xs text-white">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
