const isInteger = value => !Number.isNaN(parseInt(value, 10));

const paginationParams = (pageSize = 10, pageNumber = 1) => {
  if (!isInteger(pageSize) || pageSize < 1) {
    throw new Error('Page size must be an valid positive non-zero integer number');
  }

  if (!isInteger(pageNumber) || pageNumber < 1) {
    throw new Error('Page number must be an valid positive integer number');
  }

  const offset = parseInt((pageNumber - 1) * pageSize, 10) || 0;

  return {
    pageSize: parseInt(pageSize, 10),
    pageNumber: parseInt(pageNumber, 10),
    offset,
  };
};

const wrapInPagination = (itens, pageNumber, totalResults, totalPages) => ({
  pageSize: itens.length,
  pageNumber,
  totalResults,
  totalPages,
  list: itens,
});

const Paginate = {
  paginationParams,
  wrapInPagination,
};

export default Paginate;
