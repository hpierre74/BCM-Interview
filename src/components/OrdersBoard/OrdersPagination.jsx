import React from "react";
import { Pagination, PaginationItem, PaginationLink, Input } from "reactstrap";

const OrdersPagination = props => {
  const { page, paginate } = props;

  const styles = {
    justifyContent: "flex-end",
    maxWidth: "100%",
    display: "flex",
    flexFlow: "row wrap"
  };
  return (
    <Pagination style={styles}>
      <PaginationItem>
        <PaginationLink onClick={e => paginate(e, page - 1)} previous />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink> {page} </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next onClick={e => paginate(e, page + 1)} />
      </PaginationItem>
      <Input
        onChange={e => paginate(e, e.target.value)}
        style={{ width: "100px" }}
        type="number"
        name="pickPage"
        id="pickPage"
        placeholder="go to"
      />
    </Pagination>
  );
};
export default OrdersPagination;
