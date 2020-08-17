import React from "react";
import { Card, CardBody, CardFooter } from "shards-react";
import ShortenText from "../utils/ShortenText";
import ToText from "../utils/ToText";
import { faUser, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// functional card component to display single item
export default function BlogCard(props) {
  var shortMonthName = new Intl.DateTimeFormat("en-US", {
    month: "short",
  }).format;
  let date = new Date(props.pubDate);
  const publishDate =
    shortMonthName(date) +
    " " +
    date.getDate() +
    "," +
    " " +
    date.getFullYear();
  return (
    <Card small className="card-post h-100">
      <div
        className="card-post__image"
        style={{ backgroundImage: `url('${props.thumbnail}')` }}
      />
      <CardBody>
        <h5 className="card-title">
          <a
            className="text-fiord-blue"
            href={props.link}
            target="_blank"
            className="text-fiord-blue"
            rel="noopener noreferrer"
          >
            {ShortenText(props.title, 0, 100)}
          </a>
        </h5>
        <p className="card-text">
          {ShortenText(ToText(props.content), 0, 120) + "..."}
        </p>
      </CardBody>
      <CardFooter className="text-muted border-top py-3">
        <span className="text-dark">
          <a href={props.profilelink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faUser} /> {props.author}
          </a>
        </span>
        <br />

        <span className="text-muted">
          <FontAwesomeIcon icon={faCalendarAlt} /> {publishDate}
        </span>
      </CardFooter>
    </Card>
  );
}
