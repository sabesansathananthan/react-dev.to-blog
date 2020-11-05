import React from "react";
import { Card, CardBody, CardFooter } from "shards-react";
import ShortenText from "../utils/ShortenText";
import ToText from "../utils/ToText";
import { faUser, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// functional card component to display single item
export default function BlogCard(props) {
  const monthShortname = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const splitDate = props.pubDate.split(" ");
  const date = splitDate[0];
  const splitMonth = date.split("-");
  const finalDate =
    monthShortname[Number(splitMonth[1] - 1)] +
    " " +
    splitMonth[2] +
    "," +
    " " +
    splitMonth[0];

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
          <FontAwesomeIcon icon={faCalendarAlt} /> {finalDate}
        </span>
      </CardFooter>
    </Card>
  );
}
