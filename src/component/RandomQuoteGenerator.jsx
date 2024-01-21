import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuote } from "../store/quoteSlice";
import "./randomQuoteGenerator.css";
import * as FileSaver from "file-saver";
import CopyToClipboard from "./CopyToClipboard/CopyToClipboard";
import { Icon } from "@iconify/react";
import CutomButton from "./CutomButton";
import { FallingLines } from "react-loader-spinner";

import backgroundImage from "../assets/backgroundPic.jpg";

const RandomQuoteGenerator = () => {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quote);
  const tags = useSelector((state) => state.tags);

  const status = useSelector((state) => state.status);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchQuote());
    console.log("tag", tags);
  }, [dispatch]);
  const handleFetchQuote = () => {
    dispatch(fetchQuote());
  };

  const saveQuote = () => {
    const blob = new Blob([quote.content], {
      type: "text/plain;charset=utf-8",
    });
    FileSaver.saveAs(blob, "quote.txt");
  };

  return (
    <div>
      <div className="card col-lg-6 col-md-6 col-10 d-flex justify-content-center">
        <div className="heading">
          {status === "loading" ? (
            <div className="spinner-border text-secondary" role="status">
              <span className="sr-only">
                <FallingLines
                  color="#444444"
                  width="100"
                  visible={true}
                  ariaLabel="falling-circles-loading"
                />
              </span>
            </div>
          ) : null}

          {quote && status === "succeeded" ? (
            <>
              <div
                style={{
                  width: "300%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <span>
                    {" "}
                    <Icon icon="fontisto:quote-left" />
                    {quote.content}
                    <Icon icon="fontisto:quote-right" />
                  </span>

                  <div>{quote.author}</div>

                  <div>
                    {tags[0]} | {tags[1]}
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CopyToClipboard quoteText={quote?.content} />
          <CutomButton
            text="Generate Quote"
            onClick={() => handleFetchQuote()}
          />
          <CutomButton text="Save Quote" onClick={() => saveQuote()} />
        </div>

        {/* <div style={{ color: "grey" }}>
          {tags && tags.length > 0 ? (
            tags.includes("Inspirational") ? (
              <div>Inspirational</div>
            ) : tags.includes("Famous Quotes") ? (
              <div>Famous Quotes</div>
            ) : tags.includes("Wisdom") ? (
              <div>Wisdom</div>
            ) : (
              <div>{tags.length > 0 ? tags[0] : null}</div>
            )
          ) : null}
        </div> */}
      </div>
    </div>
  );
};

export default RandomQuoteGenerator;
