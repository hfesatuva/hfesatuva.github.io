import React from "react";
import Layout from "@theme/Layout";

export default function Cal() {
  const layoutSx = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "red",
  };
  const calsx = {
    flex: "1 0 auto",
    margin: "2em",
    border: "2px solid black",
  };
  const sx = {};
  return (
    <Layout sx={{ display: "flex" }}>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=America%2FNew_York&mode=AGENDA&showTitle=0&showPrint=0&showCalendars=1&src=aGZlc3V2YUBnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679"
        frameborder="0"
        scrolling="no"
        style={calsx}
      ></iframe>
      {/* <iframe
        style={calsx}
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQMk4-MLojAZShXPMc6sAtJQ_p6H_Nz-r8bF6a8n2Wyk8C_n1BOAy5kMk3FPVWyEkP3GG8ItVeMsNFW/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
      ></iframe> */}
    </Layout>
  );
}
