import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const OrdersPagination = props => {
  const { orders, page, paginate, isVisible, displayPagination } = props;

  const renderPaginations = () => {
    return Object.values(orders).map((order, index) => {
      return (
        <PaginationItem key={index}>
          <PaginationLink onClick={e => paginate(e, index)} value={index}>
            {index}
          </PaginationLink>
        </PaginationItem>
      );
    });
  };
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
      {isVisible ? (
        renderPaginations()
      ) : (
        <PaginationItem>
          <PaginationLink> {page} </PaginationLink>
        </PaginationItem>
      )}
      <PaginationItem>
        <PaginationLink onClick={e => displayPagination(e)}>
          {" "}
          ...{" "}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next onClick={e => paginate(e, page + 1)} />
      </PaginationItem>
    </Pagination>
  );
};
export default OrdersPagination;
