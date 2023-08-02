import React from "react";
import classes from "./Table.module.css";

const Table = () => {
  return (
    <div className={classes["table_container"]}>
      <h1>Teams Table</h1>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Teams</th>
            <th>City</th>
            <th>Home ground</th>
            <th>Debut</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chennai Super Kings</td>
            <td>Chennai,Tamilnadu</td>
            <td>M.A Chidambaram Stadium</td>
            <td>2008</td>
            <td>
              <ul>
                <li>N Srininvasan</li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>Delhi Capitals</td>
            <td>New Delhi,Delhi</td>
            <td>Arjun Jaitly Stadium</td>
            <td></td>
            <td>
              <ul>
                <li>Sanjan Jindal</li>
                <li>G.M.Rao</li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>Gujarat Titans</td>
            <td>Ahmedabad, Gujarat</td>
            <td>Narenda Modi Stadium</td>
            <td>2022</td>
            <td>
              <ul>
                <li>Steve Koltes</li>
                <li>Juhi Chawls</li>
                <li>Jay Mehta</li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>Kolkata Knight Riders</td>
            <td>Kolkata, West Bengal</td>
            <td>Eden Gardens</td>
            <td>2008</td>
            <td>
              <ul>
                <li>Shah Rukh Khan</li>
                <li>Juhi Chawla</li>
                <li>Jay Mehta</li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>Lucknow Super Gaints</td>
            <td>Luckow,Uttar Pradeshs</td>
            <td>BRABV Ekana Cricket Stadium</td>
            <td>2022</td>
            <td>
              <ul>
                <li>Sanjiv Goenka</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
