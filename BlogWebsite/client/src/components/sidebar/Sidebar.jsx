import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>


        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ32TQyWJ0OM17k2WKjhzaz9vPyphhtx6V23w&usqp=CAU"
          alt=""
        />
        <p>
        

The upcoming fortnight will provide the answer to which European national teams will join Denmark and Germany at next year’s World Cup in Qatar.

Let’s have a quick look at what to expect from November’s international break.
England to book their place at next year’s tournament already against Albania

England’s next World Cup qualifier pits them against Albania at Wembley Stadium as the Three Lions look to seal a place at Qatar 2022 with a game to spare.

With two games left to go in Group I, Gareth Southgate’s men hold a three-point lead over second-placed Poland and could all but cement their place at next year’s showpiece against the Albanians.

England have won six of their eight matches in the ongoing World Cup qualifying cycle (D2), including a 2-0 victory over Albania in the reverse fixture back in March.

Southgate’s side look destined to lock down a place at the upcoming final tournament as they face the section minnows, San Marino, in the final qualifying fixture.

However, there is no doubt England will be looking to finish the job on home soil as part of their efforts to redeem themselves to the London crowd following European Championship final heartbreak.
Italy and Switzerland fight to decide the Group C winner

Italy play host to Switzerland at the Stadio Olimpico in the top-table World Cup Qualification Group C six-pointer.

Both nations have experienced identical fortunes across their opening six 2022 World Cup qualifiers (W4, D2), with the reverse fixture in Switzerland yielding a goalless draw back in September.

Gli Azzurri are leading the way in this section, courtesy of superior goal difference over Swiss, which means there is everything to play for in Rome. 

A noteworthy takeaway from their recent competitive H2Hs is that the Italians have kept a clean sheet in their last four meetings with the Nati (W2, D2). 

Though the recent H2H stakes give Italy a head start going into this encounter, a return of five clean sheets from their six Group C matches should feel Murat Yakin’s side with confidence.
        </p>
        <p>
        Denmark’s rampant World Cup qualifying campaign proves their Euro 2020 run to the semi-finals was no fluke, with Kasper Hjumland’s side securing their berth at Qatar 2022 with two games to spare.

The Danes have been nothing short of outstanding in Group F so far, having won all eight fixtures by an aggregate scoreline of 27-0.

Denmark head into the business end of qualifying as the only nation to have won all their matches to date.

Only a few teams in football history have gone through what the Danish Dynamite endured at Euro 2020, but even the loss of headline performer Christian Eriksen has not shaken Hjumland’s men. 

They will be overwhelming favourites to pick up the three points when they take on the Faroe Islands at Parken Stadium in Copenhagen.

Although a trip to Hampden Park for the final qualifier against Scotland could prove daunting, Denmark look primed to achieve what very few nations have throughout the World Cup qualifying history.
 
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
