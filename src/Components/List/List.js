import React from "react";
import classes from "./List.module.css";

const List = () => {
  return (
    <div className={classes.list}>
      <ol>
        <li>
          Hsitory
          <ol type="i">
            <li>Background</li>
            <li>Foundation</li>
            <li>Expansions and termination</li>
          </ol>
        </li>

        <li>Administartion</li>

        <li>
          Organisation
          <ol type="i">
            <li>Tournament format</li>
            <li>Player acquisition, squad composition and salaries</li>
            <li>Match rules</li>
            <li>Prize Money</li>
          </ol>
        </li>

        <li>
          Teams
          <ol type="i">
            <li>Current Teams</li>
            <li>Defunct teams</li>
            <li>Timeline</li>
          </ol>
        </li>
        <li>
          Tournament seasons and results
          <ol type="i">
            <li>Performance in the IPL by title</li>
            <li>IPL seasons results</li>
          </ol>
        </li>
        <li>
          Team Performance
          <ol type="i">
            <li>League stage positions</li>
          </ol>
        </li>
        <li>
          Awards
          <ol type="i">
            <li>Orange Cap</li>
            <li>Purple Cap</li>
            <li>Most valuable Player</li>
            <li>Faimlay Awards</li>
            <li>Emerging Player awards</li>
            <li>Most Scores Award</li>
          </ol>
        </li>
        <li>
          Financials
          <ol type="i">
            <li>Title Sponsorship</li>
            <li>Payments to foreign national boards</li>
            <li>Brand value</li>
          </ol>
        </li>
        <li>
          Broadcasting
          <ol type="i">
            <li>Sony and WSQ(2008-2017)</li>
            <li>Star India(2018-2022)</li>
            <li>2023-2027</li>
            <li>International broadcasters</li>
          </ol>
        </li>
        <li>
          Controversy
          <ol type="i">
            <li>2012 and 2013 IPL spot facing and betting match</li>
            <li>Sponsorship</li>
          </ol>
        </li>
        <li>See also</li>
        <li>Reference</li>
        <li>External links</li>
      </ol>
    </div>
  );
};

export default List;
