import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
  IconButton,
  Collapse,
  Box,
  useMediaQuery,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

export default function CollapsibleTable({
  columns,
  fetchData,
  title,
  rowsPerPageOptions = [1, 2, 5],
}) {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(1);
  const [totalRows, setTotalRows] = useState(0);
  const [openRow, setOpenRow] = useState({}); // to track open/collapse state for each row

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // For mobile devices (below 600px)
  const isTabletOrAbove = useMediaQuery(theme.breakpoints.up("md")); // For tablet and above

  useEffect(() => {
    const loadData = async () => {
      const { data, total } = await fetchData(page, rowsPerPage);
      setRows(data);
      setTotalRows(total);
    };
    loadData();
  }, [fetchData, page, rowsPerPage]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const toggleRow = (rowIndex) => {
    setOpenRow((prevState) => ({
      ...prevState,
      [rowIndex]: !prevState[rowIndex], // toggle open/close state for the row
    }));
  };

  // Determine which columns to show based on screen size
  const displayedColumns = isMobile ? columns.slice(0, 2) : columns;
  const hiddenColumns = isMobile ? columns.slice(2) : []; // columns hidden in mobile view

  return (
    <>
      <Typography variant="h6" sx={{ paddingX: 2, pt: 2 }}>
        {title}
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              {displayedColumns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <React.Fragment key={rowIndex}>
                <TableRow>
                  <TableCell>
                    <IconButton
                      size="small"
                      onClick={() => toggleRow(rowIndex)}
                    >
                      {openRow[rowIndex] ? (
                        <KeyboardArrowUp />
                      ) : (
                        <KeyboardArrowDown />
                      )}
                    </IconButton>
                  </TableCell>
                  {displayedColumns.map((column) => (
                    <TableCell key={column.id}>
                      {row[column.id] !== "" ? row[column.id] : "-"}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={displayedColumns.length + 1}
                  >
                    <Collapse
                      in={openRow[rowIndex]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <Box margin={1}>
                        <Typography variant="body2">
                          {isTabletOrAbove
                            ? `Full content for row ${rowIndex + 1}`
                            : `Mobile content for row ${rowIndex + 1}`}
                        </Typography>
                        {/* Display hidden columns in the collapsed view on mobile */}
                        {isMobile && (
                          <Box mt={2}>
                            {hiddenColumns.map((column) => (
                              <Typography key={column.id} variant="body2">
                                <strong>{column.label}:</strong>{" "}
                                {row[column.id] !== "" ? row[column.id] : "-"}
                              </Typography>
                            ))}
                          </Box>
                        )}
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={totalRows}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
