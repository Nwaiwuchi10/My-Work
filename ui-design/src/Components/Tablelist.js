import {
  Input,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { EventAvailableOutlined, Search } from "@material-ui/icons";
import React from "react";
import "./Table.css";

import { FaAngleDown, FaAngleUp, FaCircle } from "react-icons/fa";

const Tablelist = () => {
  // const useStyles = makeStyles({});
  // const theme = createMulTheme({
  //   Typography: {
  //     h6: {
  //       background: white,
  //     },
  //   },

  // });
  return (
    <div className="hol">
      <div className="hol1">
        <EventAvailableOutlined className="cicons" />
        <FaCircle className="cicons1" />
      </div>

      <div>
        <img className="imm" src="./pix/pix.jpg" alt="" />
      </div>

      <div className="col">
        <div className="bol">
          <Typography variant="h6" className="tp">
            Manage User
          </Typography>

          <Input className="input" placeholder="search" />
          <Search className="search" />

          <Typography className="tip">Export CSV</Typography>

          <div>
            <Table>
              <TableHead>
                <TableRow>
                  <th className="tab">
                    <input type="checkbox" />
                    {/* <Checkbox className="check" color="secondary" /> */}
                  </th>

                  <th className="tab">
                    ID
                    <FaAngleUp className="ret" />
                    <FaAngleDown className="rap" />
                  </th>
                  <th className="tab">
                    Name <FaAngleUp className="ret" />
                    <FaAngleDown className="rap1" />
                  </th>
                  <th className="tab">
                    Email <FaAngleUp className="ret" />
                    <FaAngleDown className="rap2" />
                  </th>
                  <th className="tab">
                    Role <FaAngleUp className="ret" />
                    <FaAngleDown className="rap3" />
                  </th>
                  <th className="tab">
                    Date <FaAngleUp className="ret" />
                    <FaAngleDown className="rap4" />
                  </th>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <td className="dab">
                    <input type="checkbox" />
                  </td>
                  <td className="dab">0078952</td>
                  <td className="dab">Great Animashaun</td>
                  <td className="dab">GreatAnimashaun@gmail.com</td>
                  <td className="dab">Manager</td>
                  <td className="dab">25/04/2021</td>

                  <hr className="hrr" />
                </TableRow>
                <TableRow>
                  <td className="dab">
                    <input type="checkbox" />
                    {/* <Checkbox className="dab" color="secondary" /> */}
                  </td>
                  <td className="dab">0078952</td>
                  <td className="dab">Great Animashaun</td>
                  <td className="dab">GreatAnimashaun@gmail.com</td>
                  <td className="dab">Manager</td>
                  <td className="dab">25/04/2021</td>
                  <hr className="hrr" />
                </TableRow>
                <TableRow>
                  <td className="dab">
                    <input type="checkbox" />
                    {/* <Checkbox color="secondary" /> */}
                  </td>
                  <td className="dab">0078952</td>
                  <td className="dab">Great Animashaun</td>
                  <td className="dab">GreatAnimashaun@gmail.com</td>
                  <td className="dab">Manager</td>
                  <td className="dab">25/04/2021</td>
                  <hr className="hrr" />
                </TableRow>
                <TableRow>
                  <td className="dab">
                    <input type="checkbox" />
                    {/* <Checkbox color="secondary" /> */}
                  </td>
                  <td className="dab">0078952</td>
                  <td className="dab">Great Animashaun</td>
                  <td className="dab">GreatAnimashaun@gmail.com</td>
                  <td className="dab">Manager</td>
                  <td className="dab">25/04/2021</td>
                  <hr className="hrr" />
                </TableRow>
                <TableRow>
                  <td className="dab">
                    <input type="checkbox" />
                    {/* <Checkbox color="secondary" /> */}
                  </td>
                  <td className="dab">0078952</td>
                  <td className="dab">Great Animashaun</td>
                  <td className="dab">GreatAnimashaun@gmail.com</td>
                  <td className="dab">Manager</td>
                  <td className="dab">25/04/2021</td>
                  <hr className="hrr" />
                </TableRow>
                <TableRow>
                  <td className="dab">
                    <input type="checkbox" />
                    {/* <Checkbox color="secondary" /> */}
                  </td>
                  <td className="dab">0078952</td>
                  <td className="dab">Great Animashaun</td>
                  <td className="dab">GreatAnimashaun@gmail.com</td>
                  <td className="dab">Manager</td>
                  <td className="dab">25/04/2021</td>
                  <hr className="hrr" />
                </TableRow>
                <TableRow>
                  <td className="dab">
                    <input type="checkbox" />
                    {/* <Checkbox color="secondary" /> */}
                  </td>
                  <td className="dab">0078952</td>
                  <td className="dab">Great Animashaun</td>
                  <td className="dab">GreatAnimashaun@gmail.com</td>
                  <td className="dab">Manager</td>
                  <td className="dab">25/04/2021</td>
                  <hr className="hrr" />
                </TableRow>
                <TableRow>
                  <td className="dab">
                    <input type="checkbox" />
                    {/* <Checkbox color="secondary" /> */}
                  </td>
                  <td className="dab">0078952</td>
                  <td className="dab">Great Animashaun</td>
                  <td className="dab">GreatAnimashaun@gmail.com</td>
                  <td className="dab">Manager</td>
                  <td className="dab">25/04/2021</td>
                  <hr className="hrr" />
                </TableRow>
                <TableRow>
                  <td className="dab">
                    <input type="checkbox" />
                    {/* <Checkbox color="secondary" /> */}
                  </td>
                  <td className="dab">0078952</td>
                  <td className="dab">Great Animashaun</td>
                  <td className="dab">GreatAnimashaun@gmail.com</td>
                  <td className="dab">Manager</td>
                  <td className="dab">25/04/2021</td>

                  <hr className="hrr" />
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <hr className="hrr" />
        </div>
      </div>
    </div>
  );
};

export default Tablelist;
