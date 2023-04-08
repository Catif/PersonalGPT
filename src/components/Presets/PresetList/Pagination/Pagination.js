import "./Pagination.scss";

export default function Pagination({
  handlePagination,
  pagination,
  dataProps,
  limit,
}) {
  return (
    <div className="Presets__list__pagination">
      <button
        className="Presets__list__pagination__button"
        onClick={() => handlePagination("prev")}
        disabled={pagination === 0}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <span className="Presets__list__pagination__text">
        {pagination + 1} / {Math.ceil(dataProps.length / limit)}
      </span>
      <button
        className="Presets__list__pagination__button"
        onClick={() => handlePagination("next")}
        disabled={pagination >= dataProps.length / limit - 1}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}
