import Header from "@/components/header/Header";
import React, { FC, useState } from "react";

import "markdown-navbar/dist/navbar.css";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import Author from "@/components/author/Author";
import Footer from "@/components/footer/Footer";
import axios from "axios";
import Link from "next/link";
import servicePath from "../config/apiUrl";
import { GetServerSideProps } from "next";
import { ArticleListItem } from "@/pages/types/article";
import { BLOG_NAME } from "@/config/baseConfig";

const Home: FC<{ list: ArticleListItem[] }> = ({ list }) => {
  const [myList] = useState(list);
  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
  });
  return (
    <>
      <Header className=" bg-no-repeat bg-cover absolute inset-x-0 top-0" />
      <div className="bg-info-bg bg-no-repeat bg-cover">
        <div className=" container mx-auto  mb-5">
          <div className="py-40">
            <h1 className="text-8xl text-white text-center font-bold  mb-2">
              {BLOG_NAME}
            </h1>
            <p className="text-xl text-white text-center font-serif">
              「不要因为走得太远 而忘记为什么出发」
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto md:container">
        <div>
          <div className="grid grid-cols-12">
            <div
              className="lg:col-span-7 lg:col-start-2
              lg:pr-8 md:pr-8
           sm:col-span-12
            md:col-span-8 md:col-start-2"
            >
              {myList.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="list-title">
                      <Link
                        href={{
                          pathname: `/detail/detail`,
                          query: { id: item.id, typeName: item.typeName },
                        }}
                      >
                        <h3 className="text-2xl mb-4 font-bold text-gray-700">
                          {item.title}
                        </h3>
                      </Link>
                    </div>

                    <div
                      className="text-gray-400 text-sm font-serif italic"
                      dangerouslySetInnerHTML={{
                        __html: marked(item.introduce),
                      }}
                    />
                  </div>
                );
              })}
            </div>
            <div className="lg:col-span-3  sm:col-span-12 md:col-span-3  lg:pr-16">
              <Author />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get<{
    data: ArticleListItem[];
  }>(servicePath.getArticleList);
  return {
    props: {
      list: res.data.data,
    },
  };
};
export default Home;
