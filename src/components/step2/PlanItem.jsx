export default function PlanItem({
  title,
  img,
  monthlyPrice,
  yearlyPrice,
  displayMonthly = true,
  selected = false,
  onClick,
}) {
  return (
    <div
      className={`plan-item${selected ? " selected" : ""}`}
      onClick={onClick}
      tabIndex="0"
    >
      <img srcSet={img} className="icon" />
      <div className="text">
        <h2>{title}</h2>
        <h3>
          {displayMonthly
            ? `$${monthlyPrice}/mo`
            : `$${yearlyPrice}/yr`}
        </h3>
        {!displayMonthly && <h4>2 months free</h4>}
      </div>
    </div>
  );
}
